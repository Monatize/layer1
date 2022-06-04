import { useState } from 'react';
import { IconContext } from 'react-icons';
import { RiHome2Line, RiHome2Fill } from 'react-icons/ri';
import { MdOutlineDashboard, MdDashboard } from 'react-icons/md';

interface ISidebarProps {
	// * Add setNewTab function to sidebar, in order to update tab state in main and reflect tab state
	setNewTab: (tab: string) => void;
	theme: string;
}

const Sidebar = (props: ISidebarProps) => {
    const [tab, setTab] = useState("home");

    const setNewTab = (tab: string) => {
        setTab(tab);
        props.setNewTab(tab);
    }

	return (
		<div className="w-full h-full p-8">
			<div
				className={`${
					props.theme === "dark" ? "gradient-border shadow-lg shadow-brand-gradients-darkb2" : "gradient-border-light shadow-lg shadow-brand-gradients-darkb1"
				} w-full h-full rounded-3xl flex flex-col animate-in slide-in-from-left ease-[cubic-bezier(.76,.3,.15,.84)] duration-0.6`}>

                    {/* Logo Mark */}
                    <div className="w-full h-1/8 flex justfiy-center items-center">
                        {props.theme === "dark" && <img src="/m-white.png" className="scale-50" />}
                        {props.theme === "light" && <img src="/m-grad.png" className="scale-50" />}
                    </div>

                    {/* Tabs */}
                    <div className="w-full h-6/8 flex flex-col">
                        <div onClick={() => setNewTab("home")} className={`${tab === "home" ? 'bg-brand-green/20' : 'bg-transparent'} w-full h-1/8 flex justify-center items-center hover:cursor-pointer hover:bg-brand-green/20 transition-all ease-in-out duration-500`}>
                            <IconContext.Provider value={{size: "2.75em", className: `${props.theme === "dark" ? 'fill-white' : 'fill-black'}`}}>
                                {tab === "home" && <RiHome2Fill />}
                                {tab !== "home" && <RiHome2Line />}
                            </IconContext.Provider>
                        </div>
                        <div onClick={() => setNewTab("dashboard")} className={`${tab === "dashboard" ? 'bg-brand-green/20' : 'bg-transparent'} w-full h-1/8 flex justify-center items-center hover:cursor-pointer hover:bg-brand-green/20 transition-all ease-in-out duration-500`}>
                            <IconContext.Provider value={{size: "2.75em", className: `${props.theme === "dark" ? 'fill-white' : 'fill-black'}`}}>
                                {tab === "dashboard" && <MdDashboard />}
                                {tab !== "dashboard" && <MdOutlineDashboard />}
                            </IconContext.Provider>
                        </div>
                        <div className="Pages w-full h-1/8 ">

                        </div>
                        <div className="Assets w-full h-1/8 ">

                        </div>
                        <div className="Contracts w-full h-1/8 ">

                        </div>
                        <div className="Settings w-full h-1/8 ">

                        </div>
                    </div>

                    {/* Dark Mode & Dashboard Version */}
                    <div className="w-full h-1/8">

                    </div>
                </div>
		</div>
	);
};

export default Sidebar;
