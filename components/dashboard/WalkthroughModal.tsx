interface ModalProps {
    theme: string;
}

const WalkthroughModal = (props: ModalProps) => {
    return (
        <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-gray-800/75 flex justify-center items-center">
            <div className={`w-1/3 h-1/2 rounded-2xl animate-in slide-in-from-top duration-700 flex flex-col ${props.theme === "dark" ? 'bg-brand-black' : 'bg-brand-font'}`}>
                <div className="w-full h-1/5 flex justify-center items-center">
                    <img src="/m-grad.png" className="w-20" />
                </div>
                <div className="w-full h-1/5 flex justify-center items-center">
                    <h1 className="font-mt text-3xl font-semibold text-black">Welcome, let's take a look around</h1>
                </div>
            </div>
        </div>
    )
}

export default WalkthroughModal;