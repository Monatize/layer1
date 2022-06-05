interface IStore {
    theme: string
}

const Store = (props: IStore) => {
    return (
        <div className={`w-full h-full transition-all ease-in-out duration-500 ${props.theme === "dark" ? 'bg-brand-black' : 'bg-brand-font'}`}>

        </div>
    )
}

export default Store;