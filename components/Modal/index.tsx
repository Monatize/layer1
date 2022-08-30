import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ModalComp from "./Modal";

const Modal = () => {
    const [ modalOpen, setModalOpen ] = useState(false);
    return (
        <div className="w-full h-full bg-brand-soft-white">
            {modalOpen && (
                <AnimatePresence>
                    <ModalComp setModalState={setModalOpen} />
                </AnimatePresence>
            )}
            <div className="w-full h-full flex justify-center items-center">
                <motion.button onClick={() => setModalOpen(!modalOpen)} whileTap={{ scale: 1.1 }} className="w-56 h-14 bg-brand-font border border-brand-black rounded-xl shadow-sm-btn font-mt font-bold text-xl text-brand-black">
                    Open Modal
                </motion.button>
            </div>
        </div>
    )
}

export default Modal;