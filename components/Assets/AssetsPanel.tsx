import { useState } from "react";
import NewAssetGroupModal from "./Modal/NewAssetGroupModal";
import { AnimatePresence, motion } from "framer-motion";

interface IAssetsPanel {
	dark: boolean;
}

const AssetsPanel = (props: IAssetsPanel) => {
	const [creatingAG, setCreatingAG] = useState(false);

	const setCC = () => {
		setCreatingAG(!creatingAG);
	};
	return (
		<div className="w-full h-full flex flex-col p-6 overflow-y-scroll">
			<AnimatePresence>
				{creatingAG && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
						<NewAssetGroupModal dark={props.dark} setCAG={setCreatingAG} />
					</motion.div>
				)}
			</AnimatePresence>

			<div className="w-full h-full flex flex-col space-y-4">
				<h1 className={`font-mt text-5xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Assets</h1>
				<div className="flex space-x-4">
					<h1 className={`font-mt text-xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>0 groups</h1>
					<h1 className={`font-mt text-xl font-bold text-pink-500`}>0 live on <span className="text-pink-500">Pinata.Cloud</span></h1>

				</div>
				<motion.button onClick={() => setCreatingAG(true)} whileTap={{ scale: 1.1 }} className={`w-44 h-12 font-mt text-lg font-bold border ${props.dark ? "border-brand-font shadow-sm-light-btn text-brand-font" : "border-brand-black shadow-sm-btn text-brand-black"}`}>
					New Group
				</motion.button>
			</div>
		</div>
	);
};

export default AssetsPanel;
