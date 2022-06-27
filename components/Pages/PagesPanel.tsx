interface IPagesPanel {
	dark: boolean;
}

const PagesPanel = (props: IPagesPanel) => {
	return (
		<div className={`w-full h-full flex justify-center items-center	 transition-all duration-500 ${props.dark ? "bg-brand-black" : "bg-brand-font"}`}>
			<h1 className="text-8xl font-bold text-black">Pages</h1>
		</div>
	);
};

export default PagesPanel;
