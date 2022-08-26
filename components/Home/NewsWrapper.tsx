import News from './News'

interface INewsWrapper {
    dark: boolean
}
const NewsWrapper = (props: INewsWrapper) => {
    return (
        <div className="w-1/2 flex flex-col space-y-4">
            <h1 className={`font-mt font-bold text-5xl text-brand-black`}>
                NFT News
            </h1>
            <News dark={props.dark} />
        </div>
    )
}

export default NewsWrapper
