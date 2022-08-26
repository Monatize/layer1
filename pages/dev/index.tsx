import { NextPage } from "next";
import Link from "next/link";

const Dev: NextPage = () => {
    return (
        <div className="w-screen h-screen p-2">
            <Link href='dev/inner/drag'>
                <span className="text-blue-600 font-mt font-semibold text-2xl underline">
                    drag & drop builder
                </span>
            </Link>
        </div>
    )
}

export default Dev;