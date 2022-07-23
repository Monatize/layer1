import { EmojiHappyIcon, BadgeCheckIcon, BanIcon, BeakerIcon, BookOpenIcon, BookmarkIcon, CakeIcon, CalculatorIcon, CashIcon, CalendarIcon, CloudUploadIcon, CodeIcon, ColorSwatchIcon, CubeTransparentIcon, DatabaseIcon, DocumentTextIcon, EyeIcon, GiftIcon, LightningBoltIcon, KeyIcon } from "@heroicons/react/outline";

import { EmojiHappyIcon as FilledEmojiHappyIcon, BadgeCheckIcon as FilledBadgeCheckIcon, BanIcon as FilledBanIcon, BeakerIcon as FilledBeakerIcon, BookOpenIcon as FilledBookOpenIcon, BookmarkIcon as FilledBookmarkIcon, CakeIcon as FilledCakeIcon, CalculatorIcon as FilledCalculatorIcon, CashIcon as FilledCashIcon, CalendarIcon as FilledCalendarIcon, CloudUploadIcon as FilledCloudUploadIcon, CodeIcon as FilledCodeIcon, ColorSwatchIcon as FilledColorSwatchIcon, CubeTransparentIcon as FilledCubeTransparentIcon, DatabaseIcon as FilledDatabaseIcon, DocumentTextIcon as FilledDocumentTextIcon, EyeIcon as FilledEyeIcon, GiftIcon as FilledGiftIcon, LightningBoltIcon as FilledLightningBoltIcon, KeyIcon as FilledKeyIcon } from "@heroicons/react/solid";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Code from "./Code";

interface IStageTwo {
    setEmojiID: Dispatch<SetStateAction<number>>;
    setContractName: Dispatch<SetStateAction<string>>;
    setContractDescription: Dispatch<SetStateAction<string>>;
    setContractType: Dispatch<SetStateAction<string>>;
    contractName: string;
    contractDescription: string;
    contractType: string;
    emojiID: number;
	dark: boolean;
}

const StageTwo = (props: IStageTwo) => {
	const [emojis, setEmojis] = useState<{ id: number; iconName: string; icon: JSX.Element; selectedIcon: JSX.Element }[]>([]);

	useEffect(() => {
		setEmojis([
			{
				id: 0,
				iconName: "EmojiHappyIcon",
				icon: <EmojiHappyIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledEmojiHappyIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 1,
				iconName: "BadgeCheckIcon",
				icon: <BadgeCheckIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledBadgeCheckIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 2,
				iconName: "BanIcon",
				icon: <BanIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledBanIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 3,
				iconName: "BeakerIcon",
				icon: <BeakerIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledBeakerIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 4,
				iconName: "BookOpenIcon",
				icon: <BookOpenIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledBookOpenIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 5,
				iconName: "BookmarkIcon",
				icon: <BookmarkIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledBookmarkIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 6,
				iconName: "CakeIcon",
				icon: <CakeIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledCakeIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 7,
				iconName: "CalculatorIcon",
				icon: <CalculatorIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledCalculatorIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 8,
				iconName: "CashIcon",
				icon: <CashIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledCashIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 9,
				iconName: "CalendarIcon",
				icon: <CalendarIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledCalendarIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 10,
				iconName: "CloudUploadIcon",
				icon: <CloudUploadIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledCloudUploadIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 11,
				iconName: "CodeIcon",
				icon: <CodeIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledCodeIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 12,
				iconName: "ColorSwatchIcon",
				icon: <ColorSwatchIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledColorSwatchIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 13,
				iconName: "CubeTransparentIcon",
				icon: <CubeTransparentIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledCubeTransparentIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 14,
				iconName: "DatabaseIcon",
				icon: <DatabaseIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledDatabaseIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 15,
				iconName: "DocumentTextIcon",
				icon: <DocumentTextIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledDocumentTextIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 16,
				iconName: "EyeIcon",
				icon: <EyeIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledEyeIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 17,
				iconName: "GiftIcon",
				icon: <GiftIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledGiftIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 18,
				iconName: "LightningBoltIcon",
				icon: <LightningBoltIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledLightningBoltIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
			{
				id: 19,
				iconName: "KeyIcon",
				icon: <KeyIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
				selectedIcon: <FilledKeyIcon className={`w-10 h-10 ${props.dark ? "text-brand-font" : "text-brand-black"}`} />,
			},
		]);
	}, []);
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="w-full h-[calc(100%-6rem)] flex shrink-0 p-8">
			<div className="w-1/3 h-full flex flex-col space-y-4">
				<h1 className={`font-mt text-4xl font-bold ${props.dark ? "text-brand-font" : "text-brand-black"}`}>Customize your contract.</h1>
				<h1 className={`font-mt text-xl ${props.dark ? "text-brand-font" : "text-brand-black"}`}>We&apos;ve done the hard work, just enter some numbers</h1>
			</div>

			<div className="w-2/3 flex flex-col space-y-4">
				<Code dark={props.dark} contractType={props.contractType} />
			</div>
		</motion.div>
	);
};

export default StageTwo;
