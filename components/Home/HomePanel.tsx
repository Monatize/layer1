import { GlobeAltIcon, CollectionIcon, TerminalIcon, AdjustmentsIcon } from "@heroicons/react/solid";
import Tip from "./Tip";

interface IHomePanel {
	dark: boolean;
}

const HomePanel = (props: IHomePanel) => {
	return (
		<div className="w-full h-full flex flex-col space-y-4 p-6 overflow-y-scroll">
			<h1 className={`font-mt text-5xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Welcome, User</h1>
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
		</div>
	);
};

export default HomePanel;
