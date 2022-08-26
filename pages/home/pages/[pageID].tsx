import { useRouter } from 'next/router'

const page = () => {
    const router = useRouter()
    const { pageID } = router.query

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <h1 className="text-5xl font-mt font-bold text-brand-black">
                {pageID}
            </h1>
        </div>
    )
}

export default page
