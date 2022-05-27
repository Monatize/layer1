interface ISidebarProps {
    // * Add setNewTab function to sidebar, in order to update tab state in main and reflect the new tab
    setNewTab: (tab: string) => void;
}

const DashboardSideBar = (props: ISidebarProps) => {
    return (
        <div className="w-full h-full bg-brand-black gradient-border-r drop-shadow-2xl rounded-r-4xl">

        </div>
    )
}

export default DashboardSideBar;