import { GlobeAltIcon } from "@heroicons/react/solid";
import Link from "next/link";

interface ITip {
	title: string;
	description: string;
	href: string;
	children: JSX.Element;
	dark: boolean;
}
const Tip = (props: ITip) => {
	return (
		<div className={`w-1/4 min-w-[25rem] max-h-56 p-4 shrink-0 flex flex-col space-y-2 rounded-lg ${props.dark ? "border border-brand-soft-white shadow-light-btn" : "border border-brand-black shadow-btn"}`}>
			<div className="flex space-x-2 items-center">
				<div className="p-1 flex justify-center items-center">{props.children}</div>
				<h1 className={`font-mt font-bold text-3xl ${props.dark ? "text-brand-font" : "text-brand-black"}`}>{props.title}</h1>
			</div>
			<p className={`font-mt text-lg ${props.dark ? "text-brand-font" : "text-brand-black"} `}>{props.description}</p>
			<div className="flex justify-end">
				<Link href={props.href}>
					<button className={`p-2 w-1/4 rounded-xl ${props.dark ? "border border-brand-font shadow-sm-light-btn text-brand-font" : "border border-brand-black shadow-sm-btn text-brand-black"} font-mt font-bold text-xl hover:-translate-y-2 transition-all duration-300`}>Go</button>
				</Link>
			</div>
		</div>
	);
};

export default Tip;
