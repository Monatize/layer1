interface IHomePanel {
	dark: boolean;
}

const HomePanel = (props: IHomePanel) => {
	return (
		<div className={`w-full h-full flex justify-center items-center transition-all duration-500 ${props.dark ? "bg-brand-black" : "bg-brand-font"}`}>
			<h1 className="text-8xl font-bold text-black">Home</h1>
		</div>
	);
};

export default HomePanel;
