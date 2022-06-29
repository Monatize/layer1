interface IHomePanel {
	dark: boolean;
}

const HomePanel = (props: IHomePanel) => {
	return (
		<div className={`w-full h-full transition-all duration-500 overflow-y-scroll rounded-tl-2xl ${props.dark ? "gradient-border-tl" : "gradient-border-light-tl"}`}>
			<div className="w-full h-full"></div>
		</div>
	);
};

export default HomePanel;
