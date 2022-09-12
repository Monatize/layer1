interface IModalBody {
    children: JSX.Element | JSX.Element[]
}

const ModalBody = (props: IModalBody) => {
    return (
        <div className="w-1/2 h-1/2 bg-brand-font drop-shadow-2xl rounded-xl">
            {props.children}
        </div>
    )
}

export default ModalBody;