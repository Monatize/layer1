interface IHomePanel {
	dark: boolean;
}

const HomePanel = (props: IHomePanel) => {
	return (
		<div className={`w-full h-full transition-all duration-500 ${props.dark ? "bg-brand-black" : "bg-brand-font"}`}>
			<div></div>
		</div>
	);
};

export default HomePanel;
