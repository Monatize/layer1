import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ModalStageTracker from "./ModalStageTracker";
import Create from "./Stages/Create";
interface INewPageModal {
	dark: boolean;
	setCC: Dispatch<SetStateAction<boolean>>;
	setPages: Dispatch<SetStateAction<{
		pageID: string;
		pageName: string;
		pageDescription: string;
		pageType: string;
		live: boolean;
		icon: JSX.Element;
	}[]>>;
	setCreatingPage: Dispatch<SetStateAction<boolean>>;
}

const NewPageModal = (props: INewPageModal) => {
	const [stage, setStage] = useState(1);
	const [emojiID, setEmojiID] = useState(0);
	const [emoji, setEmoji] = useState<JSX.Element>(<h1></h1>);

	const [pageName, setpageName] = useState("");
	const [pageDescription, setpageDescription] = useState("");
	const [pageType, setpageType] = useState("Auction");

	const [canMoveFromStageOne, setCanMoveOn] = useState(false);
	useEffect(() => {
		const onEscDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				props.setCC(false);
			}
		};

		document.addEventListener("keydown", onEscDown);

		return () => document.removeEventListener("keydown", onEscDown);
	}, []);

	const canGoOn = () => {
		if(pageName !== "" && pageDescription !== "") {
			setCanMoveOn(true);
		}
		else {
			setCanMoveOn(false)
		}
	}

	const createNewPage = () => {
		if(canMoveFromStageOne) {
			props.setPages(pages => [...pages, {
				pageID: "aaaa",
				pageName,
				pageDescription,
				pageType,
				live: false,
				icon: emoji,
			}])
	
			props.setCreatingPage(false);
		}

	}

	return (
		<div onClick={() => props.setCC(false)} className={`absolute w-full h-full min-h-[30rem] top-0 left-0 right-0 bottom-0 flex flex-col space-y-4 justify-center items-center bg-brand-font/75`}>
			<div onClick={(e) => e.stopPropagation()} className="w-3/4 min-w-[35rem] h-20 flex">
				<div className="w-1/2 h-full flex items-center">
					<div onClick={() => props.setCC(false)} className={`w-24 h-16 rounded-lg font-mt font-bold text-4xl border border-brand-black shadow-sm-btn text-brand-black bg-brand-font hover:-translate-y-2 cursor-pointer transition-all duration-300 flex justify-center items-center`}>
						X
					</div>
				</div>
			</div>
			<div onClick={(e) => e.stopPropagation()} className={`w-3/4 rounded-lg min-w-[35rem] h-[700px] p-4 flex flex-col space-y-4 items-center border bg-brand-font border-brand-black shadow-btn overflow-y-scroll`}>
				<ModalStageTracker stage={stage} setStage={setStage} dark={props.dark} />
				<AnimatePresence>{stage === 1 && <Create dark={props.dark} emojiID={emojiID} setEmojiID={setEmojiID} setEmoji={setEmoji} setPageName={setpageName} setPageDesciption={setpageDescription} setPageType={setpageType} pageName={pageName} pageDescription={pageDescription} pageType={pageType} canGoOn={canGoOn} />}</AnimatePresence>
			</div>
			<div onClick={(e) => e.stopPropagation()} className="w-3/4 min-w-[35rem] h-20 flex">
				<div className="w-1/2 h-full flex items-center">
				</div>
				<div className="w-1/2 h-full flex items-center justify-end">
					<div
						onClick={createNewPage}
						className={`w-52 h-16 rounded-lg font-mt font-bold text-4xl border border-brand-black shadow-sm-btn text-brand-black ${canMoveFromStageOne ? "hover:-translate-y-2 cursor-pointer" : "cursor-not-allowed"} transition-all duration-300 flex justify-center items-center`}>
						Create
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewPageModal;
