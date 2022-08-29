import { motion } from "framer-motion";
import { useState } from "react";

const Main = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <div className="w-full h-full bg-brand-soft-white flex justify-center items-center">
            <motion.button whileTap={{ scale: 1.1 }} className="w-56 h-14 border border-brand-black shadow-sm-btn rounded-xl font-mt font-bold text-lg">Open Modal</motion.button>
        </div>
    )
}

export default Main;