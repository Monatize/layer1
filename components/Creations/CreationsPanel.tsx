interface ICreationsPanel {
	dark: boolean;
}

const CreationsPanel = (props: ICreationsPanel) => {
	return (
		<div className="w-full h-full bg-brand-black flex flex-col justify-center items-center">
		<h1 className="text-brand-soft-white font-sans font-bold text-8xl">Creations</h1>
		<h1 className="text-brand-soft-white font-sans font-semibold text-5xl">(coming soon)</h1>
	</div>
	);
};

export default CreationsPanel;