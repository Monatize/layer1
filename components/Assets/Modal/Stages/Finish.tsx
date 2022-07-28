import { motion } from 'framer-motion';

interface IFinish {
    dark: boolean;
    assetGroupName: string;
    assetGroupDescription: string;
    assetCount: number;
}

const Finish = (props: IFinish) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="w-full h-full flex flex-col space-y-4 justify-center items-center">
            <h1 className={`font-mt font-bold text-4xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Let&apos;s Review!</h1>
            <div className="flex space-x-2">
                <h1 className={`font-mt font-bold text-2xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Asset Group Name: </h1>
                <h1 className={`font-mt text-2xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>{props.assetGroupName}</h1>
            </div>
            <div className="flex space-x-2">
                <h1 className={`font-mt font-bold text-2xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Asset Group Description: </h1>
                <h1 className={`font-mt text-2xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>{props.assetGroupDescription}</h1>
            </div>
            <div className="flex space-x-2">
                <h1 className={`font-mt font-bold text-2xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Asset Count: </h1>
                <h1 className={`font-mt text-2xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>{props.assetCount}</h1>
            </div>
        </motion.div>
    )
}

export default Finish;