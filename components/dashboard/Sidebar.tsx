interface ISidebarProps {
	// * Add setNewTab function to sidebar, in order to update tab state in main and reflect tab state
	setNewTab: (tab: string) => void;
	theme: string;
}

const Sidebar = (props: ISidebarProps) => {
	return (
		<div className="w-full h-full p-8">
			<div
				className={`${
					props.theme === "dark" ? "gradient-border" : "gradient-border-light"
				} w-full h-full rounded-3xl drop-shadow-xl flex flex-col`}>

                    {/* Logo Mark */}
                    <div className="w-full h-1/8 flex justfiy-center items-center">
                        {props.theme === "dark" && <img src="/m-white.png" className="scale-50" />}
                        {props.theme === "light" && <img src="/m-grad.png" className="scale-50" />}
                    </div>

                    {/* Tabs */}
                    <div className="w-full h-6/8 bg-blue-500 flex flex-col">
                        <div className="Home w-full h-1/6 bg-black">

                        </div>
                        <div className="Dashboard w-full h-1/6 bg-black">

                        </div>
                        <div className="Pages w-full h-1/6 bg-black">

                        </div>
                        <div className="Assets w-full h-1/6 bg-black">

                        </div>
                        <div className="Contracts w-full h-1/6 bg-black">

                        </div>
                        <div className="Settings w-full h-1/6 bg-black">

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
