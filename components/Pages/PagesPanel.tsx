import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewPageModal from "./NewPageModal";
import { BadgeCheckIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

interface IPagesPanel {
	dark: boolean;
}

const PagesPanel = (props: IPagesPanel) => {
	const [creatingPage, setCreatingPage] = useState<boolean>(false);
	const [liveCount, setLiveCount] = useState<number>(0);
	const [pages, setPages] = useState<{ pageID: string; pageName: string; pageDescription: string; pageType: string; live: boolean; icon: JSX.Element }[]>([]);

	useEffect(() => {
		setPages([
			{
				pageID: "B24CDA64-B1A4-4157-BA42-59018007B8D9",
				pageName: "Page One",
				pageDescription: "test",
				pageType: "Landing Page",
				live: true,
				icon: <EmojiHappyIcon className={`w-10 h-10 text-brand-black`} />,
			},
			{
				pageID: "B1E4BB53-4C51-47FA-8334-B1B958B98D13",
				pageName: "Page Two",
				pageDescription: "test",
				pageType: "Mint Page",
				live: false,
				icon: <BadgeCheckIcon className={`w-10 h-10 text-brand-black`} />,
			},
		]);
	}, []);

	useEffect(() => {
		pages.forEach((page) => {
			if (page.live) {
				setLiveCount(liveCount + 1);
			}
		});
	}, [pages]);

	return (
		<div className="w-full h-full flex flex-col p-6 overflow-y-scroll">
			<AnimatePresence>
				{creatingPage && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
						<NewPageModal dark={props.dark} setCC={setCreatingPage} setPages={setPages} setCreatingPage={setCreatingPage} />
					</motion.div>
				)}
			</AnimatePresence>

			<div className="w-full h-full flex flex-col space-y-4">
				<h1 className={`font-mt text-5xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Pages</h1>
				<div className="flex space-x-4">
					<h1 className={`font-mt text-xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>0 created</h1>
					<h1 className={`font-mt text-xl font-bold text-green-500`}>{liveCount} deployed</h1>
				</div>
				<motion.button onClick={() => setCreatingPage(true)} whileTap={{ scale: 1.1 }} className={`w-44 h-12 rounded-xl font-mt text-lg font-bold border ${props.dark ? "border-brand-font shadow-sm-light-btn text-brand-font" : "border-brand-black shadow-sm-btn text-brand-black"}`}>
					New Page
				</motion.button>

				<div className="flex flex-col space-y-8 pt-4">
					{pages.map((page) => (
						<Link key={page.pageID} href={`/home/pages/${page.pageID}/`}>
							<div className="w-96 h-24 flex bg-brand-soft-white border border-brand-black shadow-sm-btn rounded-xl hover:-translate-y-2 hover:cursor-pointer transition-all duration-300">
								<div className="w-4/5 flex flex-col">
									<div className="flex space-x-2 p-2 items-center">
										{page.icon}
										<h1 className="font-mt font-bold text-brand-black text-lg">{page.pageName}</h1>
									</div>
									<div className="flex space-x-2 pl-4 items-center">
										<h1 className="font-mt font-lg font-medium text-brand-black">{page.pageType} </h1>
										<h1 className="font-mt font-lg font-medium text-brand-black">|</h1>
										<h1 className={`font-mt font-lg font-medium ${page.live ? "text-green-500" : "text-brand-black"}`}>{page.live ? "Live" : "Not Live"}</h1>
									</div>
								</div>
								<div className="w-1/5 flex justify-center items-center">
									<div className="w-12 h-12 rounded-xl flex justify-center items-center hover:cursor-pointer">
										<ChevronRightIcon className="w-12 h-12 text-brand-black" />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default PagesPanel;
