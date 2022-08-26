import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ModalStageTracker from "./ModalStageTracker";
import Create from "./Stages/Create";
interface INewContractModal {
	dark: boolean;
	setCC: Dispatch<SetStateAction<boolean>>;
}

const NewContractModal = (props: INewContractModal) => {
	const [stage, setStage] = useState(1);
	const [emojiID, setEmojiID] = useState(0);

	const [contractName, setContractName] = useState("");
	const [contractDescription, setContractDescription] = useState("");
	const [contractType, setContractType] = useState("Auction");

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
		if(contractName !== "" && contractDescription !== "") {
			setCanMoveOn(true);
		}
		else {
			setCanMoveOn(false)
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
				<AnimatePresence>{stage === 1 && <Create dark={props.dark} emojiID={emojiID} setEmojiID={setEmojiID} setContractName={setContractName} setContractDescription={setContractDescription} setContractType={setContractType} contractName={contractName} contractDescription={contractDescription} contractType={contractType} canGoOn={canGoOn} />}</AnimatePresence>
			</div>
			<div onClick={(e) => e.stopPropagation()} className="w-3/4 min-w-[35rem] h-20 flex">
				<div className="w-1/2 h-full flex items-center">
					{stage > 1 && (
						<div onClick={() => setStage(stage - 1)} className={`w-52 h-16 rounded-lg font-mt font-bold text-4xl border "border-brand-black shadow-sm-btn text-brand-black"} hover:-translate-y-2 cursor-pointer transition-all duration-300 flex justify-center items-center`}>
							Back
						</div>
					)}
				</div>
				<div className="w-1/2 h-full flex items-center justify-end">
					<div
						onClick={() => {
							if (canMoveFromStageOne) {
								setStage(stage + 1);
							}
						}}
						className={`w-52 h-16 rounded-lg font-mt font-bold text-4xl border border-brand-black shadow-sm-btn text-brand-black ${canMoveFromStageOne ? "hover:-translate-y-2 cursor-pointer" : "cursor-not-allowed"} transition-all duration-300 flex justify-center items-center`}>
						Next
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewContractModal;
