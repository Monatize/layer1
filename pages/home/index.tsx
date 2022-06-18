import { NextPage } from "next";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

const Home: NextPage = () => {
	const [dark, setDark] = useState(true);

	return (
		<div className={`w-screen h-screen ${dark ? 'bg-brand-black' : 'bg-brand-font'}`}>
			<div className="w-full h-full flex flex-row shrink-0">
				<div className={`w-[15rem] md:pt-8 md:pb-8 md:pl-12 md:pr-12`}>
					<Sidebar tab={"home"} dark={dark}/>
				</div>
				<div className={`w-[calc(100%-15rem)] ${dark ? 'bg-brand-black' : 'bg-brand-font'} flex justify-center items-center`}>
				</div>
			</div>
		</div>
	);
};

export default Home;
