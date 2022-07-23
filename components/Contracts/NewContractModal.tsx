import { EmojiHappyIcon, BadgeCheckIcon, BanIcon, BeakerIcon, BookOpenIcon, BookmarkIcon, CakeIcon, CalculatorIcon, CashIcon, CalendarIcon, CloudUploadIcon, CodeIcon, ColorSwatchIcon, CubeTransparentIcon, DatabaseIcon, DocumentTextIcon, EyeIcon, GiftIcon, LightningBoltIcon, KeyIcon } from "@heroicons/react/outline";

import { EmojiHappyIcon as FilledEmojiHappyIcon, BadgeCheckIcon as FilledBadgeCheckIcon, BanIcon as FilledBanIcon, BeakerIcon as FilledBeakerIcon, BookOpenIcon as FilledBookOpenIcon, BookmarkIcon as FilledBookmarkIcon, CakeIcon as FilledCakeIcon, CalculatorIcon as FilledCalculatorIcon, CashIcon as FilledCashIcon, CalendarIcon as FilledCalendarIcon, CloudUploadIcon as FilledCloudUploadIcon, CodeIcon as FilledCodeIcon, ColorSwatchIcon as FilledColorSwatchIcon, CubeTransparentIcon as FilledCubeTransparentIcon, DatabaseIcon as FilledDatabaseIcon, DocumentTextIcon as FilledDocumentTextIcon, EyeIcon as FilledEyeIcon, GiftIcon as FilledGiftIcon, LightningBoltIcon as FilledLightningBoltIcon, KeyIcon as FilledKeyIcon } from "@heroicons/react/solid";
import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ModalStageTracker from "./ModalStageTracker";
import StageOne from "./Stages/StageOne";
import StageTwo from "./Stages/StageTwo";

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

	const [canMoveFromStageOne, setCMFSO] = useState(false);
	useEffect(() => {
		const onEscDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				props.setCC(false);
			}
		};

		document.addEventListener("keydown", onEscDown);

		return () => document.removeEventListener("keydown", onEscDown);
	}, []);

	useEffect(() => {
		if (contractName !== "" && contractDescription !== "" && contractType !== "") {
			setCMFSO(true);
		} else {
			setCMFSO(false);
		}
	});

	return (
		<div onClick={() => props.setCC(false)} className={`absolute w-full h-full min-h-[30rem] top-0 left-0 right-0 bottom-0 flex flex-col space-y-4 justify-center items-center ${props.dark ? "bg-brand-black/90" : "bg-brand-font/75"}`}>
			<div onClick={(e) => e.stopPropagation()} className="w-3/5 min-w-[35rem] h-20 flex">
				<div className="w-1/2 h-full flex items-center">
					<div onClick={() => props.setCC(false)} className={`w-24 h-16 font-mt font-bold text-4xl border ${props.dark ? "border-brand-font shadow-sm-light-btn text-brand-font bg-brand-black" : "border-brand-black shadow-sm-btn text-brand-black bg-brand-font"} hover:-translate-y-2 cursor-pointer transition-all duration-300 flex justify-center items-center`}>
						X
					</div>
				</div>
			</div>
			<div onClick={(e) => e.stopPropagation()} className={`w-3/5 min-w-[35rem] h-[700px] p-4 flex flex-col space-y-4 items-center border ${props.dark ? "bg-brand-black border-brand-font shadow-light-btn" : "bg-brand-font border-brand-black shadow-btn"} overflow-y-scroll`}>
				<ModalStageTracker stage={stage} setStage={setStage} dark={props.dark} />
				<AnimatePresence>{stage === 1 && <StageOne dark={props.dark} emojiID={emojiID} setEmojiID={setEmojiID} setContractName={setContractName} setContractDescription={setContractDescription} setContractType={setContractType} contractName={contractName} contractDescription={contractDescription} contractType={contractType} />}</AnimatePresence>
				<AnimatePresence>{stage === 2 && <StageTwo dark={props.dark} emojiID={emojiID} setEmojiID={setEmojiID} setContractName={setContractName} setContractDescription={setContractDescription} setContractType={setContractType} contractName={contractName} contractDescription={contractDescription} contractType={contractType} />}</AnimatePresence>
			</div>
			<div onClick={(e) => e.stopPropagation()} className="w-3/5 min-w-[35rem] h-20 flex">
				<div className="w-1/2 h-full flex items-center">
					{stage > 1 && (
						<div onClick={() => setStage(stage - 1)} className={`w-52 h-16 font-mt font-bold text-4xl border ${props.dark ? "border-brand-font shadow-sm-light-btn text-brand-font" : "border-brand-black shadow-sm-btn text-brand-black"} hover:-translate-y-2 cursor-pointer transition-all duration-300 flex justify-center items-center`}>
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
						className={`w-52 h-16 font-mt font-bold text-4xl border ${props.dark ? "border-brand-font shadow-sm-light-btn text-brand-font" : "border-brand-black shadow-sm-btn text-brand-black"} ${canMoveFromStageOne ? "hover:-translate-y-2 cursor-pointer" : "cursor-not-allowed"} transition-all duration-300 flex justify-center items-center`}>
						Next
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewContractModal;
