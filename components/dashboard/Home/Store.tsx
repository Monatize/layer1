import { useState } from "react";
import { IconContext } from "react-icons";
import { BsPencilFill } from "react-icons/bs";

interface IStore {
    theme: string
}

const Store = (props: IStore) => {
    const [editPFP, setEditPFP] = useState(false);
    return (
        <div className={`w-full h-full transition-all ease-in-out duration-500 ${props.theme === "dark" ? 'bg-brand-black' : 'bg-brand-font'}`}>
            <div className="w-full h-1/2 flex flex-col justify-center items-center">
                <div onMouseEnter={() => setEditPFP(!editPFP)} onMouseLeave={() => setEditPFP(!editPFP)} className={`w-80 h-80 ${props.theme === "dark" ? 'bg-brand-font/30' : 'bg-brand-black/30'} rounded-full flex justify-center items-center`}>
                    <div className={`${editPFP ? 'flex' : 'hidden'} absolute w-80 h-80 rounded-full justify-center items-center bg-black/70`}>
                        <IconContext.Provider value={{ className: "fill-white", size: "3rem"}}>
                            <BsPencilFill />
                        </IconContext.Provider>
                    </div>
                    <h1 className="text-5xl font-mt font-bold text-white">Store PFP</h1>
                </div>
                <h1 className={`${props.theme === "dark" ? 'text-white' : 'text-brand-black'} text-[2.5rem] font-mt font-bold`}>Store Name</h1>
                <h1 className={`${props.theme === "dark" ? 'text-white' : 'text-brand-black'} text-2xl font-mt font-normal`}>Created June 6, 2022</h1>

            </div>
        </div>
    )
}

export default Store;