import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IModalStageTracker {
	dark: boolean;
	stage: number;
	setStage: Dispatch<SetStateAction<number>>;
}

const ModalStageTracker = (props: IModalStageTracker) => {
	return (
		<div className="w-full h-24 flex space-x-4 justify-center items-center">
			<div className="w-4/5 flex flex-row space-x-8 justify-center items-center">
				<div className="flex flex-col space-y-2 justify-center items-center">
					<div className={`w-16 h-16 rounded-2xl flex justify-center items-center font-bold border ${props.stage === 1 ? `${props.dark ? 'border-brand-font bg-brand-font text-brand-black' : 'border-brand-black bg-brand-black text-brand-font'}` : `${props.dark ? 'border-brand-font shadow-sm-light-btn text-brand-font': 'border-brand-black shadow-sm-btn text-brand-black'}`}`}>
						<h1 className={`font-mt text-xl font-bold}`}>1</h1>
					</div>
					<div className={`font-mt text-xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Create</div>
				</div>

                <div className="flex flex-col space-y-2 justify-center items-center">
					<div className={`w-16 h-16 rounded-2xl flex justify-center items-center font-bold border ${props.stage === 2 ? `${props.dark ? 'border-brand-font bg-brand-font text-brand-black' : 'border-brand-black bg-brand-black text-brand-font'}` : `${props.dark ? 'border-brand-font shadow-sm-light-btn text-brand-font': 'border-brand-black shadow-sm-btn text-brand-black'}`}`}>
						<h1 className={`font-mt text-xl font-bold}`}>2</h1>
					</div>
					<div className={`font-mt text-xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Upload</div>
				</div>
			</div>
		</div>
	);
};

export default ModalStageTracker;
