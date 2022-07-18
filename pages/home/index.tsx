// * React/Next
import { NextPage } from "next";

import Head from "next/head";
import { useEffect, useState } from "react";
// * React/Next

// * Navigation
import Sidebar from "../../components/Navigation/Sidebar";
// * Navigation

// * Panels
import HomePanel from "../../components/Home/HomePanel";
import StatsPanel from "../../components/Stats/StatsPanel";
import PagesPanel from "../../components/Pages/PagesPanel";
import ContractsPanel from "../../components/Contracts/ContractsPanel";
import CreationsPanel from "../../components/Creations/CreationsPanel";
import AssetsPanel from "../../components/Assets/AssetsPanel";
import SettingsPanel from "../../components/Settings/AssetsPanel";
import axios from "axios";
import { ethers } from "ethers";
// * Panels

declare global {
	interface Window {
		ethereum: any;
	}
}
const Home: NextPage = () => {
	const [dark, setDark] = useState(false);
	const [tab, setTab] = useState("pages");
	const [authenticated, setAuthenticated] = useState(false);

	const getLastTheme = () => {
		const lsTheme = localStorage.getItem("dark");
		if (lsTheme && lsTheme === "false") {
			setDark(false);
		} else {
			setDark(true);
		}
	};
	const toggleTheme = () => {
		if (dark) {
			localStorage.setItem("dark", "false");
		} else {
			localStorage.setItem("dark", "true");
		}
		setDark(!dark);
	};

	const setNewTab = (tab: string) => {
		setTab(tab);
	};

	const getMessage = (address: string) => {
		let nonce = "";
		let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for (let i = 0, n= chars.length; i < 12; i++) {
			nonce += chars.charAt(Math.floor(Math.random() * n));
		} 
		return {
			nonce,
			message: `Thanks for using Monatize. To authenticate, please sign this message.\nAddress: ${address}\nNonce: ${nonce}\n\nTOS: https://monatize.it/legal/tos`
		}
	};

	const attemptAuthentication = async () => {
		// - Attempt to authenticate the user with their JWT token & address

		// - Connect to signer & get address w/ ethers.js
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		await provider.send("eth_requestAccounts", []);
		const signer = await provider.getSigner();
		const address = await signer.getAddress();

		// - Get token and check if it was there
		const authToken = localStorage.getItem("token");
		if (authToken) {
			console.log("Auth token found - authenticating");
			// - Implies there was a token - now we query the authentication microservice using axios
			let authQuery = await axios.post("http://localhost:3001/authentication", {
				token: authToken,
				address,
			}).then(response => {
				if(response.data.code === 200) {
					setAuthenticated(true)
				}
				else {
					setAuthenticated(false);
				}
			}).catch(e => {
				console.log(e);
			})
		} else {
			console.log("No auth token found - signing");
			// - No auth token found - sign message & send it to entry
			const message = getMessage(address);
			const signature = await signer.signMessage(message.message);
			let authQuery = await axios.post("http://localhost:3001/entry", {
				address,
				signature,
				nonce: message.nonce,
			}).then(response => {
				localStorage.setItem("token", response.data.identifier);
				setAuthenticated(true);
			}).catch(e => console.log(e)); 

		}
	};

	useEffect(() => {
		getLastTheme();
		attemptAuthentication().catch(e => console.log(e))
	}, []);

	return (
		<>
			{!authenticated && (
				<div className="w-screen h-screen bg-brand-black">
					<div className="w-full h-full flex flex-col space-y-4 justify-center items-center">
						<h1 className="text-brand-soft-white font-mt font-bold text-4xl">Please authenticate in order to access the admin panel.</h1>
						<button onClick={attemptAuthentication} className="p-4 border border-white shadow-light-btn text-brand-soft-white bg-brand-black text-xl font-mt font-medium hover:-translate-y-4 transition-all duration-300">Log in with Web3</button>
					</div>
				</div>
			)}
			{authenticated && (
				<div className="w-screen h-screen flex">
					<button onClick={toggleTheme} className="w-16 h-16 hover:scale-125 rounded-full absolute bottom-8 right-8 flex justify-center items-center">
						<img src="/dot.svg" />
					</button>
					<div className={`w-[15rem] h-full p-6 ${dark ? "bg-brand-black" : "bg-brand-soft-white"} transition-all duration-500`}>
						<Sidebar dark={dark} tab={tab} toggleTheme={toggleTheme} setTab={setNewTab} />
					</div>
					<div className={`w-[calc(100%-15rem)] ${dark ? "bg-brand-black" : "bg-brand-soft-white"} transition-all duration-500`}>
						{tab === "home" && <HomePanel dark={dark} />}
						{tab === "stats" && <StatsPanel dark={dark} />}
						{tab === "pages" && <PagesPanel dark={dark} />}
						{tab === "contracts" && <ContractsPanel dark={dark} />}
						{tab === "creations" && <CreationsPanel dark={dark} />}
						{tab === "assets" && <AssetsPanel dark={dark} />}
						{tab === "settings" && <SettingsPanel dark={dark} />}
					</div>
				</div>
			)}
		</>
	);
};
export default Home;
