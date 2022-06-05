// * Prelaunch vs Postlaunch Home Components

// * Prelaunch contains specific content like a to-do list before lauching, a countdown, and more.

interface IPrelaunchHome {
    theme: string
}
const PrelaunchHome = (props: IPrelaunchHome) => {
    return (
        <div className={`w-full h-full transition-all ease-in-out duration-500 ${props.theme === "dark" ? 'bg-brand-black' : 'bg-brand-font'}`}>

        </div>
    )
}

export default PrelaunchHome;