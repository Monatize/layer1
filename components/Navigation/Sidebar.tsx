// * React/Next
// * React/Next

// * Icons
import {
    HomeIcon,
    ChartBarIcon,
    GlobeAltIcon,
    CommandLineIcon,
    PhotoIcon,
    AdjustmentsVerticalIcon,
} from '@heroicons/react/24/solid'
import {
    HomeIcon as OutlineHomeIcon,
    ChartBarIcon as OutlineChartBarIcon,
    GlobeAltIcon as OutlineGlobeAltIcon,
    CommandLineIcon as OutlineCommandLineIcon,
    PhotoIcon as OutlinePhotoIcon,
    AdjustmentsVerticalIcon as OutlineAdjustmentsVerticalIcon,
} from '@heroicons/react/24/outline'

import IconWrapper from './IconWrapper'
import { useEffect, useState } from 'react'

// * Interfaces
interface ISidebar {
    tab: string
    dark: boolean
    toggleTheme: () => void
    setTab: (tab: string) => void
}

const Sidebar = (props: ISidebar) => {
    const [sidebarTabs, setSidebarTabs] = useState<{title: string; href: string; activeIcon: JSX.Element; inactiveIcon: JSX.Element; disabled: boolean; }[]>([]);
    const iconClass: string = "w-10 h-10 text-brand-black";

    useEffect(() => {
        setSidebarTabs([
            {
                title: "Home",
                href: "home",
                activeIcon: <HomeIcon className={iconClass} />,
                inactiveIcon: <OutlineHomeIcon className={iconClass} />,
                disabled: false,
            },
            {
                title: "Stats",
                href: "stats",
                activeIcon: <ChartBarIcon className={iconClass} />,
                inactiveIcon: <OutlineChartBarIcon className={iconClass} />,
                disabled: false,
            },
            {
                title: "Assets",
                href: "assets",
                activeIcon: <PhotoIcon className={iconClass} />,
                inactiveIcon: <OutlinePhotoIcon className={iconClass} />,
                disabled: false,
            },
            {
                title: "Pages",
                href: "pages",
                activeIcon: <GlobeAltIcon className={iconClass} />,
                inactiveIcon: <OutlineGlobeAltIcon className={iconClass} />,
                disabled: false,
            },
            {
                title: "Contracts",
                href: "contracts",
                activeIcon: <CommandLineIcon className={iconClass} />,
                inactiveIcon: <OutlineCommandLineIcon className={iconClass} />,
                disabled: false,
            },
            {
                title: "Settings",
                href: "settings",
                activeIcon: <AdjustmentsVerticalIcon className={iconClass} />,
                inactiveIcon: <OutlineAdjustmentsVerticalIcon className={iconClass} />,
                disabled: false,
            }
        ])
    }, [])
    return (
        <div
            className={`w-full h-full border rounded-lg border-brand-black shadow-btn transition-all duration-500 overflow-y-scroll`}
        >
            <div className="w-full transition-all duration-500">
                <img src="/Light-M.png" />
            </div>

            {sidebarTabs.map((tab) => (
                <IconWrapper
                    key={tab.href}
                    title={tab.title}
                    tab={tab.href}
                    setTab={props.setTab}
                    disabled={tab.disabled}
                >
                    {props.tab === tab.href ? (
                        <div>{tab.activeIcon}</div>
                    ) : (
                        <div>{tab.inactiveIcon}</div>
                    )}
                </IconWrapper>
            ))}
        </div>
    )
}

export default Sidebar
