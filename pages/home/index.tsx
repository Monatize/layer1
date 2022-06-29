// * React/Next
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
// * React/Next

// * Navigation
import Sidebar from "../../components/Navigation/Sidebar";
import MobileNav from "../../components/Navigation/MobileNavigation";
// * Navigation

// * Panels
import HomePanel from "../../components/Home/HomePanel";
import StatsPanel from "../../components/Stats/StatsPanel";
import PagesPanel from "../../components/Pages/PagesPanel";
import ContractsPanel from "../../components/Contracts/ContractsPanel";
// * Panels

// * Icons
import { IconContext } from "react-icons";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
// * Icons

const Home: NextPage = () => {
	const [dark, setDark] = useState(false);
	const [tab, setTab] = useState("stats");

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

	useEffect(() => {
		getLastTheme();
	}, []);
	return (
		<div className={`w-screen h-screen ${dark ? "bg-brand-black" : "bg-brand-font"}`}>
			<Head>
				<title>Home</title>
			</Head>
			<div className="w-full h-full flex flex-row shrink-0">
				<div className={`w-[10rem] h-full shrink-0 hidden sm:flex`}>
					<Sidebar toggleTheme={toggleTheme} tab={tab} dark={dark} setTab={setNewTab} />
				</div>
				<div className={`w-full sm:w-[calc(100%-10rem)] transition-all ease-in-out duration-500 ${dark ? "bg-brand-black" : "bg-brand-font"}`}>
					<div className={`w-full flex h-[6rem]`}>
						<div className="w-1/2"></div>
						<div className="w-1/2 flex space-x-4 justify-end items-center pr-4">
							<IconContext.Provider
								value={{
									className: `${dark ? "fill-brand-font" : "fill-brand-black"} hover:cursor-pointer`,
									size: `2.5rem`,
								}}>
								{dark && <BsSunFill onClick={toggleTheme} />}
								{!dark && <BsMoonFill onClick={toggleTheme} />}
							</IconContext.Provider>
							<div className="w-16 h-16 bg-gray-500 flex justify-center items-center rounded-full text-white font-bold text-3xl">P</div>
						</div>
					</div>
					<div className="w-full h-[calc(100%-6rem)] overflow-y-scroll">
						{tab === "home" && <HomePanel dark={dark} />}
						{tab === "stats" && <StatsPanel dark={dark} />}
						{tab === "pages" && <PagesPanel dark={dark} />}
						{tab === "contracts" && <ContractsPanel dark={dark} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
