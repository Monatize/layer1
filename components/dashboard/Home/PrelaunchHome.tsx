// * Prelaunch vs Postlaunch Home Components

// * Prelaunch contains specific content like a to-do list before lauching, a countdown, and more.

interface IPrelaunchHome {
	theme: string;
}
const PrelaunchHome = (props: IPrelaunchHome) => {
	return (
		<div
			className={`w-full h-full transition-all ease-in-out duration-500 flex flex-col ${
				props.theme === "dark" ? "bg-brand-black" : "bg-brand-font"
			}`}>
			<div className={`w-full h-1/2 flex flex-row`}>
				<div
					className={`checklist w-1/2 h-full flex justify-center items-center `}>
					<div className={`inner-checklist w-10/12 h-5/6`}>
						<div
							className={`inner-checklist-title-wrapper w-full h-2/8 flex items-center pl-2`}>
							<h1
								className={`inner-checklist-title font-mt text-[2.5rem] font-semibold ${
									props.theme === "dark"
										? "text-brand-font"
										: "text-brand-black"
								}`}>
								Drop Checklist
							</h1>
						</div>
					</div>
				</div>

				<div
					className={`checklist w-1/2 h-full flex justify-center items-center`}>
					<div className={`inner-checklist w-10/12 h-5/6`}>
						<div
							className={`inner-checklist-title-wrapper w-full h-2/8 flex items-center pl-2`}>
							<h1
								className={`inner-checklist-title font-mt text-[2.5rem] font-semibold ${
									props.theme === "dark"
										? "text-brand-font"
										: "text-brand-black"
								}`}>
								Learning Path
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className={`w-full h-1/2 flex flex-row`}>
				<div
					className={`checklist w-1/2 h-full flex justify-center items-center `}>
					<div className={`inner-checklist w-10/12 h-5/6`}>
						<div
							className={`inner-checklist-title-wrapper w-full h-1/8 flex items-center pl-2`}>
							<h1
								className={`inner-checklist-title font-mt text-[2.5rem] font-semibold ${
									props.theme === "dark"
										? "text-brand-font"
										: "text-brand-black"
								}`}>
								Suggested Posts
							</h1>
						</div>
					</div>
				</div>

				<div
					className={`checklist w-1/2 h-full flex justify-center items-center `}>
					<div className={`inner-checklist w-full h-5/6`}>
						<div
							className={`inner-checklist-title-wrapper w-full h-1/8 flex items-center pl-2`}>
							<h1
								className={`inner-checklist-title font-mt text-[2.5rem] font-semibold ${
									props.theme === "dark"
										? "text-brand-font"
										: "text-brand-black"
								}`}>
								Quick Shortcuts
							</h1>
						</div>
						<div className={`w-full h-6/8 flex flex-col items-center`}>
							<div
								className={`w-full h-1/2 flex flex-row items-center space-x-4`}>
								<div className={`w-1/2 h-6/8 gradient-background shadow-sm ${props.theme === "dark" ? 'shadow-brand-font' : 'shadow-brand-black'} rounded-2xl flex justify-center items-center hover:cursor-pointer hover:-translate-y-4 transition-all ease-in-out duration-500`}>
									<h1 className="text-[2.75rem] text-white font-mt font-bold">
										Dashboard
									</h1>
								</div>
								<div className={`w-1/2 h-6/8 reverse-gradient-background shadow-sm ${props.theme === "dark" ? 'shadow-brand-font' : 'shadow-brand-black'} rounded-2xl flex justify-center items-center hover:cursor-pointer hover:-translate-y-4 transition-all ease-in-out duration-500`}>
									<h1 className="text-[2.75rem] text-white font-mt font-bold">
										Pages
									</h1>
								</div>
							</div>
							<div
								className={`w-full h-1/2 flex flex-row items-center space-x-4`}>
								<div className={`w-1/2 h-6/8 gradient-background shadow-sm ${props.theme === "dark" ? 'shadow-brand-font' : 'shadow-brand-black'} rounded-2xl flex justify-center items-center hover:cursor-pointer hover:-translate-y-4 transition-all ease-in-out duration-500`}>
									<h1 className="text-[2.75rem] text-white font-mt font-bold">
										Assets
									</h1>
								</div>
								<div className={`w-1/2 h-6/8 reverse-gradient-background shadow-sm ${props.theme === "dark" ? 'shadow-brand-font' : 'shadow-brand-black'} rounded-2xl flex justify-center items-center hover:cursor-pointer hover:-translate-y-4 transition-all ease-in-out duration-500`}>
									<h1 className="text-[2.75rem] text-white font-mt font-bold">
										Contracts
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrelaunchHome;
