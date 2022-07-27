import { useEffect, useState } from "react";

interface INews {
	dark: boolean;
}
const News = (props: INews) => {
	const [news, setNews] = useState<{ id: number; title: string; description: string; img: string; source: string }[]>([]);

	useEffect(() => {
		setNews([
			{
				id: 0,
				title: "Blockfi goes insolvent as crypto bear market enters 69th day",
				description: "Crypto lending firm Blockfi announced earlier today that they would be pausing withdrawls as news comes out that they are in negotiations with crypto trading platform, FTX.",
				img: "https://masterthecrypto.com/wp-content/uploads/2019/10/BlockFi.jpg",
				source: "https://google.com",
			},
			{
				id: 1,
				title: "Robinhood set to close their doors in 2022",
				description: "A platform that pioneered the way for fractional investing, Robinhood, announced early Tuesday they would be closing their doors.",
				img: "https://d1e00ek4ebabms.cloudfront.net/production/b57e07db-82a4-43ef-be64-a15c45b31804.jpg",
				source: "https://google.com",
			},
			{
				id: 2,
				title: "Robinhood set to close their doors in 2022",
				description: "A platform that pioneered the way for fractional investing, Robinhood, announced early Tuesday they would be closing their doors.",
				img: "https://d1e00ek4ebabms.cloudfront.net/production/b57e07db-82a4-43ef-be64-a15c45b31804.jpg",
				source: "https://google.com",
			},
			{
				id: 3,
				title: "Robinhood set to close their doors in 2022",
				description: "A platform that pioneered the way for fractional investing, Robinhood, announced early Tuesday they would be closing their doors.",
				img: "https://d1e00ek4ebabms.cloudfront.net/production/b57e07db-82a4-43ef-be64-a15c45b31804.jpg",
				source: "https://google.com",
			},
			{
				id: 4,
				title: "Robinhood set to close their doors in 2022",
				description: "A platform that pioneered the way for fractional investing, Robinhood, announced early Tuesday they would be closing their doors.",
				img: "https://d1e00ek4ebabms.cloudfront.net/production/b57e07db-82a4-43ef-be64-a15c45b31804.jpg",
				source: "https://google.com",
			},
		]);
	}, []);

	return (
		<div className="w-full h-full flex flex-col space-y-4">
			{news.map((newsPost) => (
				<a key={newsPost.id} href={newsPost.source}>
					<div key={newsPost.id} className={`w-4/5 p-8 flex space-x-4 max-h-[20rem] relative ${props.dark ? "border border-brand-font shadow-light-btn" : "border border-brand-black shadow-btn"} hover:cursor-pointer hover:-translate-y-2 transition-all duration-300`}>
						<div className="flex flex-col space-y-2 overflow-scroll">
							<img src={newsPost.img} className="w-48 rounded-2xl" />
							<h1 className={`text-xl font-mt font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>{newsPost.title}</h1>
							<h1 className={`text-lg font-mt font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>{newsPost.description}</h1>
							<button className={`w-1/2 p-4 text-xl font-mt font-bold hover:-translate-y-2 transition-all duration-300 ${props.dark ? "border border-brand-font shadow-sm-light-btn text-brand-font" : "border border-brand-black shadow-sm-btn text-brand-black"}`}>Read More</button>
						</div>
					</div>
				</a>
			))}
		</div>
	);
};

export default News;
