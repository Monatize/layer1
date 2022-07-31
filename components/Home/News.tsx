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
				title: "Epic Games CEO Tim Sweeney Refuses to Ban NFTs on Epic Games Store",
				description: "Tim Sweeney has made his position clear on the subject of banning NFTs on his Epic Games Store: “definitely not”.",
				img: "https://nftnewstoday.com/wp-content/uploads/2022/07/epic-games-696x392.jpg",
				source: "https://nftnewstoday.com/2022/07/24/epic-games-ceo-tim-sweeney-refuses-to-ban-nfts-on-epic-games-store/",
			},
			{
				id: 1,
				title: "NFT market to hit the $231B mark by 2030?",
				description: "According to a new research report published by Verified Market Research, a global analysis and consulting agency, the fast-growing NFT market is on its way to hit the $231 billion mark by 2030. According to the same report, the market currently stands at $11.3 billion.",
				img: "https://nftnewstoday.com/wp-content/uploads/2022/07/market-report-696x392.png",
				source: "https://nftnewstoday.com/2022/07/22/nft-market-to-hit-the-231b-mark-by-2030/",
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
							<img src={newsPost.img} className={`w-48 border ${props.dark ? 'shadow-sm-light-btn border-brand-font' : 'shadow-btn border-brand-black'}`} />
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
