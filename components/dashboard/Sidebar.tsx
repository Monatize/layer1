interface ISidebarProps {
    // * Add setNewTab function to sidebar, in order to update tab state in main and reflect tab state
    setNewTab: (tab: string) => void;
}

const DashboardSideBar = (props: ISidebarProps) => {
    return (
        <div className="w-full h-full bg-white/30 gradient-border-r drop-shadow-2xl rounded-r-4xl">

        </div>
    )
}

export default DashboardSideBar;