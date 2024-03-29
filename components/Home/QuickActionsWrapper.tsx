import {
    ChartBarIcon,
    CollectionIcon,
    TerminalIcon,
    PhotographIcon,
    CashIcon,
    AdjustmentsIcon,
} from '@heroicons/react/solid'

interface IQuickActionsWrapper {
    dark: boolean
    setTab: (tab: string) => void
}

const QuickActionsWrapper = (props: IQuickActionsWrapper) => {
    return (
        <div className="w-1/2 flex flex-col space-y-4">
            <h1 className={`font-mt font-bold text-5xl text-brand-black`}>
                Shortcuts
            </h1>
            <div className="w-full p-2 flex space-x-4">
                <div
                    onClick={() => props.setTab('stats')}
                    className={`p-4 h-32 w-1/2 rounded-lg flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 hover:cursor-pointer transition-all duration-300 border border-brand-black shadow-sm-btn`}
                >
                    <ChartBarIcon className={`w-14 h-14 text-brand-black`} />
                    <h1
                        className={`font-mt font-bold text-3xl text-brand-black`}
                    >
                        Stats
                    </h1>
                </div>
                <div
                    onClick={() => props.setTab('pages')}
                    className={`p-4 h-32 w-1/2 rounded-lg flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 hover:cursor-pointer transition-all duration-300 border border-brand-black shadow-sm-btn`}
                >
                    <CollectionIcon className={`w-14 h-14 text-brand-black`} />
                    <h1
                        className={`font-mt font-bold text-3xl text-brand-black`}
                    >
                        Pages
                    </h1>
                </div>
            </div>
            <div className="w-full p-2 flex space-x-4">
                <div
                    onClick={() => props.setTab('contracts')}
                    className={`p-4 h-32 w-1/2 rounded-lg flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 hover:cursor-pointer transition-all duration-300 border border-brand-black shadow-sm-btn`}
                >
                    <TerminalIcon className={`w-14 h-14 text-brand-black`} />
                    <h1
                        className={`font-mt font-bold text-3xl text-brand-black`}
                    >
                        Contracts
                    </h1>
                </div>
                <div
                    onClick={() => props.setTab('assets')}
                    className={`p-4 h-32 w-1/2 rounded-lg flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 hover:cursor-pointer transition-all duration-300 border border-brand-black shadow-sm-btn`}
                >
                    <PhotographIcon className={`w-14 h-14 text-brand-black`} />
                    <h1
                        className={`font-mt font-bold text-3xl text-brand-black`}
                    >
                        Assets
                    </h1>
                </div>
            </div>
            <div className="w-full p-2 flex space-x-4">
                <div
                    onClick={() => props.setTab('cash')}
                    className={`p-4 h-32 w-1/2 rounded-lg flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 hover:cursor-pointer transition-all duration-300 border border-brand-black shadow-sm-btn`}
                >
                    <CashIcon className={`w-14 h-14 text-brand-black`} />
                    <h1
                        className={`font-mt font-bold text-3xl text-brand-black`}
                    >
                        Cash
                    </h1>
                </div>
                <div
                    onClick={() => props.setTab('settings')}
                    className={`p-4 h-32 w-1/2 rounded-lg flex flex-row justify-center items-center space-x-2 hover:-translate-y-4 hover:cursor-pointer transition-all duration-300 border border-brand-black shadow-sm-btn`}
                >
                    <AdjustmentsIcon className={`w-14 h-14 text-brand-black`} />
                    <h1
                        className={`font-mt font-bold text-3xl text-brand-black`}
                    >
                        Settings
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default QuickActionsWrapper
