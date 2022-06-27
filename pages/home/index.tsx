import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import HomePanel from "../../components/HomePanel";
import MobileNav from "../../components/MobileNavigation";
import Sidebar from "../../components/Sidebar";

const Home: NextPage = () => {
	const [dark, setDark] = useState(true);
	const [tab, setTab] = useState("dash");

	const toggleTheme = () => {
		setDark(!dark);
	};

	const setNewTab = (tab: string) => {
		setTab(tab);
	};
	return (
		<div className={`w-screen h-screen ${dark ? "bg-brand-black" : "bg-brand-font"}`}>
			<Head>
				<title>Home</title>
			</Head>
			<div className="w-full h-full flex flex-row shrink-0">
				<div className={`w-[10rem] h-full shrink-0 hidden sm:flex`}>
					<Sidebar toggleTheme={toggleTheme} tab={tab} dark={dark} setTab={setNewTab} />
				</div>
				<div className={`w-full sm:w-[calc(100%-10rem)] transition-all ease-in-out duration-0.6 ${dark ? "bg-brand-black" : "bg-brand-font"}`}>
					<div className="w-full flex pt-4 pb-4">
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
				</div>
			</div>
		</div>
	);
};

export default Home;
