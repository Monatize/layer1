import { IconContext } from "react-icons";

interface IWrapper {
	dark: boolean;
	title: string;
	tab: string;
	setTab: (tab: string) => void;
	children: (false | JSX.Element)[];
	disabled: boolean;
}
const IconContextWrapper = (props: IWrapper) => {
	return (
		<div
			className={`p-4 ${props.disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
			onClick={() => {
				if (!props.disabled) {
					props.setTab(props.tab);
				}
			}}>
			<div className={`w-full h-full flex items-center space-x-2 ${props.disabled ? "" : "hover:-translate-y-2"} transition-all duration-300 `}>
				<IconContext.Provider
					value={{
						className: `${props.dark ? "fill-brand-soft-white" : "fill-brand-black"}`,
						size: "2.5rem",
					}}>
					{props.children}
				</IconContext.Provider>

				<h1 className={`${props.dark ? "text-brand-soft-white" : "text-brand-black"} text-xl font-mt font-semibold`}>{props.title}</h1>
			</div>
		</div>
	);
};

export default IconContextWrapper;
