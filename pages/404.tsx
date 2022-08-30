import Link from "next/link"

const NotFound = () => {
    return (
        <div className="w-screen h-screen flex flex-col space-y-8 justify-center items-center text-center bg-brand-black">
            <img src="/m-white.png" className="w-36" />
            <h1 className="text-white font-mt font-bold text-6xl">
                This is awkward....
            </h1>
            <h1 className="text-white font-mt text-2xl">
                We didn&apos;t seem to find a page here
            </h1>
            <Link href="/">
                <button className=" w-44  pt-2 pb-2 rounded-2xl bg-brand-font shadow-lg shadow-brand-purple hover:-translate-y-4 hover:shadow-brand-green transition-all duration-500 text-black font-mt text-3xl font-semibold">
                    Go Home
                </button>
            </Link>
        </div>
    )
}

export default NotFound
