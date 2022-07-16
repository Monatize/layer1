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
// * Panels

const Home: NextPage = () => {
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState("pages");

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
    <div className="w-screen h-screen flex">
      <button onClick={toggleTheme} className="w-16 h-16 hover:scale-125 rounded-full absolute bottom-8 right-8 flex justify-center items-center">
        <img src="/dot.svg" />
      </button>
      <div className={`w-[15rem] h-full p-6 ${dark ? 'bg-brand-black' : 'bg-brand-soft-white'} transition-all duration-500`}>
        <Sidebar dark={dark} tab={tab} toggleTheme={toggleTheme} setTab={setNewTab} />
      </div>
      <div className={`w-[calc(100%-15rem)] ${dark ? 'bg-brand-black' : 'bg-brand-soft-white'} transition-all duration-500`}>
        {tab === "home" && <HomePanel dark={dark}/>}
        {tab === "stats" && <StatsPanel dark={dark} />}
        {tab === "pages" && <PagesPanel dark={dark} />}
        {tab === "contracts" && <ContractsPanel dark={dark} />}
        {tab === "creations" && <CreationsPanel dark={dark} />}
        {tab === "assets" && <AssetsPanel dark={dark} />}
        {tab === "settings" && <SettingsPanel dark={dark} />}
      </div>
    </div>
  );
};
export default Home;
