import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BsPencilFill } from "react-icons/bs";
import axios from 'axios';

interface IStore {
    theme: string
}

const Store = (props: IStore) => {
    const [editPFP, setEditPFP] = useState(false);
    const [file, setFile] = useState("");
    const inputFile = useRef<HTMLInputElement | null>(null);

    const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.files![0]);
        try {
            var imageFormData = new FormData();
            imageFormData.append('image', event.currentTarget.files![0]);
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=ad15bcfd64a3590c41a8fd43651a0bbd`, imageFormData);
            setFile(res.data.data.display_url.split('https://i.ibb.co/')[1]);
        }
        catch(e) {
            console.log(e);
        }
    }
    return (
        <div className={`w-full h-full transition-all ease-in-out duration-500 ${props.theme === "dark" ? 'bg-brand-black' : 'bg-brand-font'}`}>
            <div className="w-full h-1/2 flex flex-col justify-center items-center">
                <div onMouseEnter={() => setEditPFP(!editPFP)} onMouseLeave={() => setEditPFP(!editPFP)} className={`w-72 h-72 ${file === "" ? 'bg-gray-500' : `bg-[url('https://i.ibb.co/${file}')]`} shadow-md shadow-brand-green bg-contain rounded-full flex justify-center items-center`}>

                    <input type="file" id="file" accept="image/png, image/jpeg, image/webp" ref={inputFile} onChange={uploadFile} style={{display: 'none'}} />

                    <div onClick={() => inputFile.current!.click()} className={`${editPFP ? 'flex' : 'hidden'} absolute w-72 h-72 rounded-full justify-center items-center bg-black/70`}>
                        <IconContext.Provider value={{ className: "fill-white", size: "3rem"}}>
                            <BsPencilFill />
                        </IconContext.Provider>
                    </div>

                    <h1 className="text-5xl font-mt font-bold text-white">{file === "" ? 'Store PFP' : ''}</h1>
                </div>
                <h1 className={`${props.theme === "dark" ? 'text-white' : 'text-brand-black'} text-[2.5rem] font-mt font-bold`}>Store Name</h1>
                <h1 className={`${props.theme === "dark" ? 'text-white' : 'text-brand-black'} text-2xl font-mt font-normal`}>Created June 6, 2022</h1>
            </div>
        </div>
    )
}

export default Store;