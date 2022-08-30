import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    )
}

export default MyApp
