interface IModalCore {
    children: JSX.Element | JSX.Element[]
}

const ModalCore = (props: IModalCore) => {
    return (
        <div className="w-screen h-screen absolute top-0 bottom-0 right-0 left-0 bg-black/70 flex justify-center items-center">
            {props.children}
        </div>
    )
}

export default ModalCore;