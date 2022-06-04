import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import DashboardSideBar from "../../components/dashboard/Sidebar";

const Admin: NextPage = () => {
	const [tab, setTab] = useState("dashboard");
	const [ darkMode, setDarkMode ] = useState("light");

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
		if(savedTheme) {
			setDarkMode(savedTheme);
		}
	}

	// * Function to set new tab state
	const setNewTab = (tab: string) => {
		localStorage.setItem("tab", tab);
		setTab(tab);
	};

	// * Function to set/change theme
	const setTheme = (theme: string) => {
		localStorage.setItem("theme", theme);
		setTheme(theme);
	}

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
				<div className="w-full h-full flex bg-brand-soft-white">

				</div>
			</div>
		</div>
	);
};

export default Admin;
