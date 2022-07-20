import { GlobeAltIcon, CollectionIcon, TerminalIcon, AdjustmentsIcon, ChartBarIcon, PhotographIcon, CashIcon } from "@heroicons/react/solid";
import News from "./News";
import Tip from "./Tip";

interface IHomePanel {
	dark: boolean;
	setTab: (tab: string) => void;
}

const HomePanel = (props: IHomePanel) => {
	return (
		<div className="w-full h-full flex flex-col space-y-4 p-6 overflow-y-scroll">
			<h1 className={`font-mt text-5xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Welcome, {"creator name here"}</h1>
			<h1 className={`font-mt text-4xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Tips to get started</h1>
			<div className="w-full pt-4 pb-4 flex flex-shrink-0 space-x-6 overflow-x-scroll">
				<Tip title="Connect a domain" description="Connecting a domain is the best way to make your site stand out and to truly own your identity." dark={props.dark} href="/home">
					<GlobeAltIcon className={`w-8 h-8 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />
				</Tip>

				<Tip title="Create a page" description="Pages are what everyone sees. Go make and publish one with zero coding required." dark={props.dark} href="/home">
					<CollectionIcon className={`w-8 h-8 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />
				</Tip>

				<Tip title="Publish a contract" description="Smart contracts run the crypto world. Go deploy one with zero coding required." dark={props.dark} href="/home">
					<TerminalIcon className={`w-8 h-8 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />
				</Tip>

				<Tip title="Personalize your dashboard" description="Own your dashboard, make it fit your aesthetic. It is yours after all." dark={props.dark} href="/home">
					<AdjustmentsIcon className={`w-8 h-8 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />
				</Tip>

				<Tip title="Connect a domain" description="Connecting a domain is the best way to make your site stand out and to truly own your identity." dark={props.dark} href="/home">
					<GlobeAltIcon className={`w-8 h-8 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />
				</Tip>
			</div>
			<div className="w-full flex">
				<div className="w-1/2 flex flex-col space-y-4">
					<h1 className={`font-mt font-bold text-5xl ${props.dark ? 'text-brand-font' : 'text-brand-white'}`}>NFT News</h1>
					<News dark={props.dark} />
				</div>
				<div className="w-1/2 flex flex-col space-y-4">
					<h1 className={`font-mt font-bold text-5xl ${props.dark ? 'text-brand-font' : 'text-brand-white'}`}>Shortcuts</h1>
					<div className="w-full p-2 flex space-x-4">
						<div onClick={() => props.setTab("stats")} className={`p-4 h-32 w-1/2 flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 transition-all duration-300 ${props.dark ? 'border border-brand-font shadow-sm-light-btn' : 'border border-brand-black shadow-sm-btn'}`}>
							<ChartBarIcon className={`w-14 h-14 ${props.dark ? 'text-brand-font' : 'text-brand-black'}`} />
							<h1 className={`font-mt font-bold text-3xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Stats</h1>
						</div>
						<div onClick={() => props.setTab("pages")} className={`p-4 h-32 w-1/2 flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 transition-all duration-300 ${props.dark ? 'border border-brand-font shadow-sm-light-btn' : 'border border-brand-black shadow-sm-btn'}`}>
							<CollectionIcon className={`w-14 h-14 ${props.dark ? 'text-brand-font' : 'text-brand-black'}`} />
							<h1 className={`font-mt font-bold text-3xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Pages</h1>
						</div>
					</div>
					<div className="w-full p-2 flex space-x-4">
						<div onClick={() => props.setTab("contracts")} className={`p-4 h-32 w-1/2 flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 transition-all duration-300 ${props.dark ? 'border border-brand-font shadow-sm-light-btn' : 'border border-brand-black shadow-sm-btn'}`}>
							<TerminalIcon className={`w-14 h-14 ${props.dark ? 'text-brand-font' : 'text-brand-black'}`} />
							<h1 className={`font-mt font-bold text-3xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Contracts</h1>
						</div>
						<div onClick={() => props.setTab("creations")} className={`p-4 h-32 w-1/2 flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 transition-all duration-300 ${props.dark ? 'border border-brand-font shadow-sm-light-btn' : 'border border-brand-black shadow-sm-btn'}`}>
							<PhotographIcon className={`w-14 h-14 ${props.dark ? 'text-brand-font' : 'text-brand-black'}`} />
							<h1 className={`font-mt font-bold text-3xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Creations</h1>
						</div>
					</div>
					<div className="w-full p-2 flex space-x-4">
						<div onClick={() => props.setTab("assets")} className={`p-4 h-32 w-1/2 flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 transition-all duration-300 ${props.dark ? 'border border-brand-font shadow-sm-light-btn' : 'border border-brand-black shadow-sm-btn'}`}>
							<CashIcon className={`w-14 h-14 ${props.dark ? 'text-brand-font' : 'text-brand-black'}`} />
							<h1 className={`font-mt font-bold text-3xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Assets</h1>
						</div>
						<div onClick={() => props.setTab("settings")} className={`p-4 h-32 w-1/2 flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 transition-all duration-300 ${props.dark ? 'border border-brand-font shadow-sm-light-btn' : 'border border-brand-black shadow-sm-btn'}`}>
							<AdjustmentsIcon className={`w-14 h-14 ${props.dark ? 'text-brand-font' : 'text-brand-black'}`} />
							<h1 className={`font-mt font-bold text-3xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Settings</h1>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default HomePanel;
