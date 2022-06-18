import { IconContext } from "react-icons";
import { RiHome2Line, RiHome2Fill } from "react-icons/ri";
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

interface ISidebar {
	tab: string;
	dark: boolean; // * True = dark False = light
}

const Sidebar = (props: ISidebar) => {
	return (
		<div
			className={`w-full sm:rounded-3xl flex flex-col shrink-0 ${
				props.dark ? "gradient-border shadow-lg shadow-brand-green" : "gradient-border-light shadow-lg shadow-brand-purple"
			}`}>
			<div className="w-full pt-8 pb-8 flex shrink-0 justify-center items-center">
				{props.dark && <img src="/m-white.png" className="w-16" />}
				{!props.dark && <img src="/m-grad.png" className="w-16" />}
			</div>
			<div className="Spacer w-full md:pt-8 md:pb-8 flex shrink-0" />
			<div className={`Home w-full pt-2 pb-2 flex justify-center items-center shrink-0 pl-2 pr-2`}>
                <div className="w-full flex justify-center items-center shrink-0 border-2 border-brand-green">
                    <IconContext.Provider value={{size: '3rem', className: `${props.tab === "home" ? 'fill-brand-black' : 'fill-brand-black'}`}}>
						<RiHome2Fill />
					</IconContext.Provider>
                </div>
            </div>
		</div>
	);
};

export default Sidebar;
