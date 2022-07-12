interface IHomePanel {
	dark: boolean;
}

const HomePanel = (props: IHomePanel) => {
	return (
		<div className={`w-full h-full transition-all duration-500 overflow-y-hidden p-6`}>
			<h1 className="font-mt font-bold text-white text-5xl whitespace-nowrap">Welcome Home, Landon.</h1>
			<div className="w-full h-full flex flex-wrap pt-12 pb-12 overflow-y-scroll">
				<div className="w-full flex items-center basis-full xl:basis-1/2 p-4 xl:p-12">
					<div className="w-full h-full bg-red-500 rounded-2xl p-8">

					</div>
				</div>
				<div className="w-full flex items-center basis-full xl:basis-1/2 p-4 xl:p-12">
					<div className="w-full h-full bg-red-500 rounded-2xl p-8">

					</div>
				</div>
				<div className="w-full flex items-center basis-full xl:basis-1/2 p-4 xl:p-12">
					<div className="w-full h-full bg-red-500 rounded-2xl p-8">

					</div>
				</div>
				<div className="w-full flex items-center basis-full xl:basis-1/2 p-4 xl:p-12">
					<div className="w-full h-full bg-red-500 rounded-2xl p-8">

					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePanel;
