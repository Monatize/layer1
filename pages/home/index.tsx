// * React/Next/Libs
import { NextPage } from 'next'

import Head from 'next/head'
import { useEffect, useState } from 'react'
// * React/Next/Libs

// * Utils
import { attemptAuthentication } from '../../utils/attemptAuthentication'
// * Utils

// * Navigation
import Sidebar from '../../components/Navigation/Sidebar'
// * Navigation

// * Panels
import HomePanel from '../../components/Home/HomePanel'
import StatsPanel from '../../components/Stats/StatsPanel'
import PagesPanel from '../../components/Pages/PagesPanel'
import ContractsPanel from '../../components/Contracts/ContractsPanel'
import AssetsPanel from '../../components/Assets/AssetsPanel'
import SettingsPanel from '../../components/Settings/SettingsPanel'
// * Panels

const Home: NextPage = () => {
    const [dark, setDark] = useState(false)
    const [tab, setTab] = useState('home')
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        attemptAuthentication({
            setAuthenticatedState: setAuthenticated,
        }).catch((e) => console.log(e))
    }, [])

    return (
        <>
            {!authenticated && (
                <div className="w-screen h-screen bg-brand-soft-white">
                    <Head>
                        <title>Authentication - Monatize</title>
                    </Head>
                    <div className="w-full h-full flex flex-col space-y-4 justify-center items-center">
                        <h1 className="text-brand-black font-mt font-bold text-4xl">
                            Please authenticate in order to access the admin
                            panel.
                        </h1>
                        <button
                            onClick={() =>
                                attemptAuthentication({
                                    setAuthenticatedState: setAuthenticated,
                                })
                            }
                            className="p-4 border rounded-xl border-brand-black shadow-sm-btn text-brand-black bg-brand-soft-white text-xl font-mt font-medium hover:-translate-y-2 transition-all duration-300"
                        >
                            Log in with Web3
                        </button>
                    </div>
                </div>
            )}
            {authenticated && (
                <div className="w-screen h-screen flex">
                    <Head>
                        <title>Monatize</title>
                    </Head>
                    <div
                        className={`w-[15rem] h-full p-6 bg-brand-soft-white transition-all duration-500`}
                    >
                        <Sidebar
                            dark={dark}
                            tab={tab}
                            toggleTheme={() => ({ dark, setDark })}
                            setTab={setTab}
                        />
                    </div>
                    <div
                        className={`w-[calc(100%-15rem)] p-6 ${
                            dark ? 'bg-brand-black' : 'bg-brand-soft-white'
                        } transition-all duration-500`}
                    >
                        {tab === 'home' && (
                            <HomePanel dark={dark} setTab={setTab} />
                        )}
                        {tab === 'stats' && <StatsPanel dark={dark} />}
                        {tab === 'pages' && <PagesPanel dark={dark} />}
                        {tab === 'contracts' && <ContractsPanel dark={dark} />}
                        {tab === 'assets' && <AssetsPanel dark={dark} />}
                        {tab === 'settings' && <SettingsPanel dark={dark} />}
                    </div>
                </div>
            )}
        </>
    )
}
export default Home
