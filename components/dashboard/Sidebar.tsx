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
				} w-full h-full rounded-3xl drop-shadow-xl`}></div>
		</div>
	);
};

export default Sidebar;
