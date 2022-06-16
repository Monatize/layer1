import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import PrelaunchHome from "../../components/dashboard/Home/PrelaunchHome";
import Store from "../../components/dashboard/Home/Store";
import Sidebar from "../../components/dashboard/Sidebar";
import WalkthroughModal from "../../components/dashboard/WalkthroughModal";

const Admin: NextPage = () => {
	const [tab, setTab] = useState("home");
	const [theme, setTheme] = useState("light");
	const [firstTime, setFirstTime] = useState(true);

	// * Function to retrieve last tab state
	
	const getLastTab = () => {
		const savedTab = localStorage.getItem("tab");
		if (savedTab) {
			setTab(savedTab);
		}
	};

	// * Function to retrieve light/dark mode
	const getTheme = () => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	};

	// * Function to set new tab state
	const setNewTab = (tab: string) => {
		localStorage.setItem("tab", tab);
		setTab(tab);
	};

	// * Function to set/change theme
	const setNewTheme = (theme: string) => {
		localStorage.setItem("theme", theme);
		setTheme(theme);
	};

	useEffect(() => {
		getTheme();
		getLastTab();
	}, []);

	return (
		<div className="w-screen h-screen">
			<Head>
				<title>Dashboard</title>
			</Head>
			<div className="w-full h-full">
				{/* {firstTime && <WalkthroughModal theme={theme} />} */}
				<div
					className={`w-full h-full flex transition-all ease-in-out duration-500 ${
						theme === "dark" ? "bg-brand-black" : "bg-brand-font"
					}`}>
					<div
						className={`w-1/10 h-full flex justify-center items-center`}>
						<Sidebar setNewTab={setNewTab} setNewTheme={setNewTheme} theme={theme} />
					</div>
					{tab === "home" && (
						<>
							<div className={`w-7/10 h-full`}>
								<PrelaunchHome theme={theme} />
							</div>
							<div className={`w-2/10 h-full`}>
								<Store theme={theme} />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Admin;
