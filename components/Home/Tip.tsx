import { GlobeAltIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface ITip {
    title: string
    description: string
    href: string
    setTab: (tab: string) => void
    children: JSX.Element
    dark: boolean
}
const Tip = (props: ITip) => {
    return (
        <div
            className={`w-1/4 min-w-[25rem] max-h-56 p-4 shrink-0 flex flex-col space-y-2 rounded-lg border border-brand-black shadow-btn`}
        >
            <div className="flex space-x-2 items-center">
                <div className="p-1 flex justify-center items-center">
                    {props.children}
                </div>
                <h1 className={`font-mt font-bold text-3xl text-brand-black`}>
                    {props.title}
                </h1>
            </div>
            <p className={`font-mt text-lg text-brand-black `}>
                {props.description}
            </p>
            <div className="flex justify-end">
                <button
                    onClick={() => props.setTab(props.href)}
                    className={`p-2 w-1/4 rounded-xl border border-brand-black shadow-sm-btn text-brand-black font-mt font-bold text-xl hover:-translate-y-2 transition-all duration-300`}
                >
                    Go
                </button>
            </div>
        </div>
    )
}

export default Tip
