// * React/Next
// * React/Next

// * Icons
import { IconContext } from "react-icons";
import { BsFileCode, BsFileCodeFill } from "react-icons/bs";
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { RiHome2Line, RiHome2Fill, RiPagesFill, RiPagesLine } from "react-icons/ri";
// * Icons

// * Interfaces
interface ISidebar {
	tab: string;
	dark: boolean; // * True = dark False = light
	toggleTheme: () => void;
	setTab: (tab: string) => void;
}
// * Interfaces

const Sidebar = (props: ISidebar) => {
	return (
		<div className={`w-full h-full flex flex-col shrink-0 overflow-y-scroll transition-all ease-in-out duration-500 ${props.dark ? "bg-brand-black border-r border-brand-green" : "bg-brand-font border-r border-brand-purple"}`}>
			<div className="w-full pt-8 pb-8 flex shrink-0 justify-center items-center">
				{props.dark && <img src="/m-white.png" className="w-16" />}
				{!props.dark && <img src="/m-grad.png" className="w-16" />}
			</div>
			<div className="Spacer w-full pt-8 pb-8 flex shrink-0" />
			{/* Home Tab */}
			<div onClick={() => props.setTab("home")} className={`Home w-full pt-2 pb-2 flex justify-center items-center shrink-0 pl-2 pr-2 hover:cursor-pointer`}>
				<div className={`w-full flex space-x-2 items-center shrink-0 pt-1 pb-1 pl-1 hover:bg-brand-green/20 rounded-lg transition-all duration-300 ${props.tab === "home" ? "bg-brand-green/50 hover:bg-brand-green/50" : ""}`}>
					<IconContext.Provider
						value={{
							size: "2rem",
							className: `${props.dark ? "fill-brand-font" : "fill-brand-black"} transition-all duration-500`,
						}}>
						{props.tab === "home" && <RiHome2Fill />}
						{props.tab !== "home" && <RiHome2Line />}
					</IconContext.Provider>
					<h1 className={`font-mt transition-all duration-500 ${props.dark ? "text-brand-font" : "text-brand-black"} font-semibold`}>Home</h1>
				</div>
			</div>
			{/* Home Tab */}

			{/* Stats Tab */}
			<div onClick={() => props.setTab("stats")} className={`Stats w-full pt-2 pb-2 flex justify-center items-center shrink-0 pl-2 pr-2 hover:cursor-pointer`}>
				<div className={`w-full flex space-x-2 items-center shrink-0 pt-1 pb-1 pl-1 hover:bg-brand-green/20 rounded-lg transition-all duration-300 ${props.tab === "dash" ? "bg-brand-green/50 hover:bg-brand-green/50" : ""}`}>
					<IconContext.Provider
						value={{
							size: "2rem",
							className: `${props.dark ? "fill-brand-font" : "fill-brand-black"} transition-all duration-500`,
						}}>
						{props.tab === "stats" && <MdDashboard />}
						{props.tab !== "stats" && <MdOutlineDashboard />}
					</IconContext.Provider>
					<h1 className={`font-mt transition-all duration-500 ${props.dark ? "text-brand-font" : "text-brand-black"} font-semibold`}>Stats</h1>
				</div>
			</div>
			{/* Stats Tab */}

			{/* Pages Tab */}
			<div onClick={() => props.setTab("pages")} className={`Pages w-full pt-2 pb-2 flex justify-center items-center shrink-0 pl-2 pr-2 hover:cursor-pointer`}>
				<div className={`w-full flex space-x-2 items-center shrink-0 pt-1 pb-1 pl-1 hover:bg-brand-green/20 rounded-lg transition-all duration-300 ${props.tab === "pages" ? "bg-brand-green/50 hover:bg-brand-green/50" : ""}`}>
					<IconContext.Provider
						value={{
							size: "2rem",
							className: `${props.dark ? "fill-brand-font" : "fill-brand-black"} transition-all duration-500`,
						}}>
						{props.tab === "pages" && <RiPagesFill />}
						{props.tab !== "pages" && <RiPagesLine />}
					</IconContext.Provider>
					<h1 className={`font-mt transition-all duration-500 ${props.dark ? "text-brand-font" : "text-brand-black"} font-semibold`}>Pages</h1>
				</div>
			</div>
			{/* Home Tab */}

			{/* Pages Tab */}
			<div onClick={() => props.setTab("contracts")} className={`Contracts w-full pt-2 pb-2 flex justify-center items-center shrink-0 pl-2 pr-2 hover:cursor-pointer`}>
				<div className={`w-full flex space-x-2 items-center shrink-0 pt-1 pb-1 pl-1 hover:bg-brand-green/20 rounded-lg transition-all duration-300 ${props.tab === "contracts" ? "bg-brand-green/50 hover:bg-brand-green/50" : ""}`}>
					<IconContext.Provider
						value={{
							size: "2rem",
							className: `${props.dark ? "fill-brand-font" : "fill-brand-black"} transition-all duration-500`,
						}}>
						{props.tab === "contracts" && <BsFileCodeFill />}
						{props.tab !== "contracts" && <BsFileCode />}
					</IconContext.Provider>
					<h1 className={`font-mt transition-all duration-500 ${props.dark ? "text-brand-font" : "text-brand-black"} font-semibold`}>Contracts</h1>
				</div>
			</div>
			{/* Home Tab */}

			<div className={`w-[10rem] p-1 absolute bottom-0 flex flex-col shrink-0 justify-center items-center space-y-2`}>
				<div className={`w-full transition-all duration-500 ${props.dark ? "bg-brand-black" : "bg-brand-font"} flex flex-row justify-center items-end pt-2`}>
					<h1 className={`${props.dark ? "text-brand-font" : "text-brand-black"}`}>Version 0.1</h1>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
