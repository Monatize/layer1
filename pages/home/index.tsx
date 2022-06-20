import { NextPage } from "next";
import { useEffect, useState } from "react";
import HomePanel from "../../components/HomePanel";
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
		<div
			className={`w-screen h-screen ${
				dark ? "bg-brand-black" : "bg-brand-font"
			}`}>
			<div className="w-full h-full flex flex-row shrink-0">
				<div className={`w-[10rem] flex shrink-0`}>
					<Sidebar
						toggleTheme={toggleTheme}
						tab={tab}
						dark={dark}
						setTab={setNewTab}
					/>
				</div>
				<div
					className={`w-[calc(100%-10rem)] ${
						dark ? "bg-brand-black" : "bg-brand-font"
					}`}>
					{tab === "home" && <HomePanel dark={dark} />}
				</div>
			</div>
		</div>
	);
};

export default Home;
