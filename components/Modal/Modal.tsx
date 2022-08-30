import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from 'framer-motion';
interface IModalComp {
    setModalState: Dispatch<SetStateAction<boolean>>;
}

const ModalComp = (props: IModalComp) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => props.setModalState(false)}
                className="w-screen h-screen absolute bg-brand-black/50 flex justify-center items-center"
            ></motion.div>
        </AnimatePresence>
    )
}

export default ModalComp;