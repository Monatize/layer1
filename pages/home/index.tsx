import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";

const Admin: NextPage = () => {
	const [tab, setTab] = useState("dashboard");
	const [theme, setTheme] = useState("light");

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
				<div
					className={`w-full h-full flex ${
						theme === "dark" ? "bg-brand-black" : "bg-brand-font"
					}`}>
					<div className={`w-1/10 h-full flex justify-center items-center animate-in fade-in ease-[cubic-bezier(.76,.3,.15,.84)] duration-0.6`}>
						<Sidebar setNewTab={setNewTab} theme={theme} />
					</div>
					<div className={`w-9/10 h-full flex relative justify-center items-center ${theme === "dark" ? "bg-brand-black" : "bg-brand-font"}`}>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
