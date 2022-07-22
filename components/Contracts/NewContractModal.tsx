import { Dispatch, SetStateAction } from "react";

interface INewContractModal {
    dark: boolean;
    setCC: () => void;
}

const NewContractModal = (props: INewContractModal) => {
    return (
        <div onClick={props.setCC} className={`absolute w-full h-full top-0 left-0 right-0 bottom-0 flex justify-center items-center ${props.dark ? 'bg-brand-black/75' : 'bg-brand-font/75'}`}>
            <div onClick={e => e.stopPropagation()} className={`w-1/2 h-1/2 border ${props.dark ? 'border-brand-font shadow-light-btn' : 'border-brand-black shadow-btn'}`}>

            </div>
        </div>
    )
}

export default NewContractModal;