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
  const [dark, setDark] = useState(true);
  const [tab, setTab] = useState("home");

  const getLastTheme = () => {
    const lsTheme = localStorage.getItem("dark");
    if (lsTheme && lsTheme === "false") {
      setDark(true);
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
      <div className={`w-[15rem] h-full p-8 ${dark ? 'bg-brand-black' : 'bg-brand-soft-white'}`}>
        <div className={`w-full h-full border ${dark ? 'border-brand-soft-white shadow-lg shadow-light-btn' : 'border-brand-soft-white shadow-light-btn'}`}>
        </div>
      </div>
      <div className={`w-[calc(100%-15rem)] ${dark ? 'bg-brand-black' : 'bg-brand-soft-white'}`}>
      </div>
    </div>
  );
};
export default Home;
