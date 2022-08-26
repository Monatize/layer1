import TipWrapper from "./TipWrapper";
import NewsWrapper from "./NewsWrapper";
import QuickActionsWrapper from "./QuickActionsWrapper";

interface IHomePanel {
	dark: boolean;
	setTab: (tab: string) => void;
}

const HomePanel = (props: IHomePanel) => {
	return (
		<div className="w-full h-full flex flex-col space-y-4 p-6 overflow-y-scroll">
			<h1 className={`font-mt text-5xl font-bold text-brand-black`}>Welcome, Landon</h1>
			<h1 className={`font-mt text-4xl font-bold text-brand-black`}>Tips to get started</h1>

			<TipWrapper dark={props.dark} setTab={props.setTab} />

			<div className="w-full flex">
				<NewsWrapper dark={props.dark} />
				<QuickActionsWrapper setTab={props.setTab} dark={props.dark} />
			</div>
		</div>
	);
};

export default HomePanel;
