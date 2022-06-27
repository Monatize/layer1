interface IStatsPanel {
	dark: boolean;
}

const StatsPanel = (props: IStatsPanel) => {
	return (
		<div className={`w-full h-full flex justify-center items-center transition-all duration-500 ${props.dark ? "bg-brand-black" : "bg-brand-font"}`}>
			<h1 className="text-8xl font-bold text-black">Stats</h1>
		</div>
	);
};

export default StatsPanel;
