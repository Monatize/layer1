import Tip from './Tip'

import {
    GlobeAltIcon,
    CollectionIcon,
    TerminalIcon,
    AdjustmentsIcon,
} from '@heroicons/react/solid'

interface ITipWrapper {
    setTab: (tab: string) => void
    dark: boolean
}
const TipWrapper = (props: ITipWrapper) => {
    return (
        <div className="w-full pt-4 pb-4 flex flex-shrink-0 space-x-6 overflow-x-scroll">
            <Tip
                title="Connect a domain"
                description="Connecting a domain is the best way to make your site stand out and to truly own your identity."
                dark={props.dark}
                href="settings"
                setTab={props.setTab}
            >
                <GlobeAltIcon className={`w-8 h-8 text-brand-black`} />
            </Tip>

            <Tip
                title="Create a page"
                description="Pages are what everyone sees. Go make and publish one with zero coding required."
                dark={props.dark}
                href="pages"
                setTab={props.setTab}
            >
                <CollectionIcon className={`w-8 h-8 text-brand-black`} />
            </Tip>

            <Tip
                title="Publish a contract"
                description="Smart contracts run the crypto world. Go deploy one with zero coding required."
                dark={props.dark}
                href="contracts"
                setTab={props.setTab}
            >
                <TerminalIcon className={`w-8 h-8 text-brand-black`} />
            </Tip>

            <Tip
                title="Personalize your dashboard"
                description="Own your dashboard, make it fit your aesthetic. It is yours after all."
                dark={props.dark}
                href="settings"
                setTab={props.setTab}
            >
                <AdjustmentsIcon className={`w-8 h-8 text-brand-black`} />
            </Tip>
        </div>
    )
}

export default TipWrapper
