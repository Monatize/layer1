import { useState } from "react";
import NewContractModal from "../Contracts/NewContractModal";
import { AnimatePresence, motion } from "framer-motion";

interface IPagesPanel {
	dark: boolean;
}

const PagesPanel = (props: IPagesPanel) => {
	const [creatingContract, setCreatingContract] = useState(false);

	const setCC = () => {
		setCreatingContract(!creatingContract);
	};
	return (
		<div className="w-full h-full flex flex-col p-6 overflow-y-scroll">
			<AnimatePresence>
				{creatingContract && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
						<NewContractModal dark={props.dark} setCC={setCreatingContract} />
					</motion.div>
				)}
			</AnimatePresence>

			<div className="w-full h-full flex flex-col space-y-4">
				<h1 className={`font-mt text-5xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Pages</h1>
				<div className="flex space-x-4">
					<h1 className={`font-mt text-xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>0 created</h1>
					<h1 className={`font-mt text-xl font-bold text-green-500`}>0 deployed</h1>
				</div>
				<motion.button onClick={() => setCreatingContract(true)} whileTap={{ scale: 1.1 }} className={`w-44 h-12 font-mt text-lg font-bold border ${props.dark ? "border-brand-font shadow-sm-light-btn text-brand-font" : "border-brand-black shadow-sm-btn text-brand-black"}`}>
					New Contract
				</motion.button>
			</div>
		</div>
	);
};

export default PagesPanel;
