import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import DashboardSideBar from "../../components/dashboard/Sidebar";

const Admin: NextPage = () => {

    // * State variables to hold tab state
    const [ tab, setTab ] = useState("dashboard")

    // * Function to retrieve last tab state
    const getLastTab = () => {
        const savedTab = localStorage.getItem("tab");
        if(savedTab) {
            setTab(savedTab);
        }
    }

    // * Function to set new tab state
    const setNewTab = (tab: string) => {
        localStorage.setItem("tab", tab);
        setTab(tab);
    }

    useEffect(() => {
        getLastTab();
    }, [])
    return (
        <div className="w-screen h-screen">
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-row bg-brand-white">
                    <div className="w-1/10 h-full bg-brand-black">
                        <DashboardSideBar setNewTab={setNewTab} />
                    </div>
                    <div className="w-9/10 h-full bg-brand-black">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;