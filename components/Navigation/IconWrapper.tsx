import { motion } from 'framer-motion'

interface IWrapper {
    title: string
    tab: string
    setTab: (tab: string) => void
    children: (false | JSX.Element)
    disabled: boolean
}
const IconWrapper = (props: IWrapper) => {
    return (
        <motion.div
            whileTap={{ scale: 1.15 }}
            className={`p-3 ${
                props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={() => {
                if (!props.disabled) {
                    props.setTab(props.tab)
                }
            }}
        >
            <div
                className={`w-full h-full flex items-center space-x-2 ${
                    props.disabled ? '' : 'hover:-translate-y-2'
                } transition-all duration-300 `}
            >
                {props.children}
                <h1
                    className={`text-brand-black text-xl font-mt font-semibold`}
                >
                    {props.title}
                </h1>
            </div>
        </motion.div>
    )
}

export default IconWrapper
