import { GlobeAltIcon, CollectionIcon, TerminalIcon, AdjustmentsIcon, ChartBarIcon, PhotographIcon, CashIcon } from "@heroicons/react/solid";
import News from "./News";
import NewsWrapper from "./NewsWrapper";
import QuickActionsWrapper from "./QuickActionsWrapper";
import Tip from "./Tip";
import TipWrapper from "./TipWrapper";

interface IHomePanel {
	dark: boolean;
	setTab: (tab: string) => void;
}

const HomePanel = (props: IHomePanel) => {
	return (
		<div className="w-full h-full flex flex-col space-y-4 p-6 overflow-y-scroll">
			<h1 className={`font-mt text-5xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Welcome, {"creator name here"}</h1>
			<h1 className={`font-mt text-4xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Tips to get started</h1>

			<TipWrapper dark={props.dark} />

			<div className="w-full flex">
				<NewsWrapper dark={props.dark} />
				<QuickActionsWrapper setTab={props.setTab} dark={props.dark} />
			</div>
		</div>
	);
};

export default HomePanel;
