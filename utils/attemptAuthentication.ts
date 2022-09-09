import axios from 'axios'
import { ethers } from 'ethers'
import { Dispatch, SetStateAction } from 'react'

const getMessage = (address: string) => {
    let nonce = ''
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for (let i = 0, n = chars.length; i < 12; i++) {
        nonce += chars.charAt(Math.floor(Math.random() * n))
    }
    return {
        nonce,
        message: `Thanks for using Monatize. To authenticate, please sign this message.\nAddress: ${address}\nNonce: ${nonce}\n\nTOS: https://monatize.it/legal/tos`,
    }
}

interface IAttemptAuthentication {
    setAuthenticatedState: Dispatch<SetStateAction<boolean>>
}

const attemptAuthentication = async (props: IAttemptAuthentication) => {
    axios.defaults.validateStatus = () => {
        return true
    }

    // - Attempt to authenticate the user with their JWT token & address
    
    // - Connect to signer & get address w/ ethers.js
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = await provider.getSigner()
    const address = await signer.getAddress()

    // - Get token and check if it was there
    const authToken = localStorage.getItem('token')
    if (authToken) {
        // - Implies there was a token - now we query the authentication microservice using axios
        const authQuery = await axios.post(
            'https://ms-dev.monatize.it/api/users/authorization/',
            {
                address,
            },
            {
                headers: {
                    "Authorization": authToken
                }
            }
        )

        if (authQuery.status === 200) {
            const storeQuery = await axios.get(
                `https://ms-dev.monatize.it/api/stores/getbyid/?id=${process.env.NEXT_PUBLIC_STORE_ID}`
            )
            if (storeQuery.data.creator === address) {
                props.setAuthenticatedState(true)
            } else {
                props.setAuthenticatedState(false)
            }
        } else if (authQuery.status === 401) {
            const message = getMessage(address)
            const signature = await signer.signMessage(message.message)
            console.log("test: " + signature);
            const entryQuery = await axios.post(
                'https://ms-dev.monatize.it/api/users/entry/',
                {
                    address,
                    signature,
                    nonce: message.nonce,
                }
            )

            if (entryQuery.status === 200) {
                const storeQuery = await axios.get(
                    `https://ms-dev.monatize.it/api/stores/getbyid/?id=${process.env.NEXT_PUBLIC_STORE_ID}`
                )
                if (storeQuery.data.creator === address) {
                    localStorage.setItem('token', entryQuery.data.data.token);
                    props.setAuthenticatedState(true)
                } else {
                    props.setAuthenticatedState(false)
                }
            } else {
                localStorage.setItem('token', '')
                props.setAuthenticatedState(false)
            }
        } else {
            props.setAuthenticatedState(false)
        }
    } else {
        const message = getMessage(address)
        const signature = await signer.signMessage(message.message)
        console.log("aaaaaaa" + signature);
        console.log(address + " " + signature + " " + message.nonce);
        const entryQuery = await axios.post('https://ms-dev.monatize.it/api/users/entry/', {
            address,
            signature,
            nonce: message.nonce,
        })

        if (entryQuery.status === 200) {
            const storeQuery = await axios.get(
                `https://ms-dev.monatize.it/api/stores/getbyid/?id=${process.env.NEXT_PUBLIC_STORE_ID}`
            )
            if (storeQuery.data.creator === address) {
                localStorage.setItem('token', entryQuery.data.data.token)
                props.setAuthenticatedState(true)
            } else {
                // props.setAuthenticatedState(false)
                props.setAuthenticatedState(false)
            }
        } else {
            props.setAuthenticatedState(false)
        }
    }
}

export { attemptAuthentication }
