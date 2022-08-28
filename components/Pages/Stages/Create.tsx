import {
    FaceSmileIcon,
    CheckBadgeIcon,
    LifebuoyIcon,
    BeakerIcon,
    BookOpenIcon,
    BookmarkIcon,
    CakeIcon,
    CalculatorIcon,
    BanknotesIcon,
    CalendarIcon,
    CloudArrowUpIcon,
    CodeBracketIcon,
    CodeBracketIcon as FilledCodeBracketIcon,
    SwatchIcon,
    CubeIcon,
    CircleStackIcon,
    DocumentTextIcon,
    EyeIcon,
    GiftIcon,
    BoltIcon,
    KeyIcon,
} from '@heroicons/react/24/outline'

import {
    FaceSmileIcon as FilledFaceSmileIcon,
    CheckBadgeIcon as FilledCheckBadgeIcon,
    LifebuoyIcon as FilledLifebuoyIcon,
    BeakerIcon as FilledBeakerIcon,
    BookOpenIcon as FilledBookOpenIcon,
    BookmarkIcon as FilledBookmarkIcon,
    CakeIcon as FilledCakeIcon,
    CalculatorIcon as FilledCalculatorIcon,
    BanknotesIcon as FilledBanknotesIcon,
    CalendarIcon as FilledCalendarIcon,
    CloudArrowUpIcon as FilledCloudArrowUpIcon,
    SwatchIcon as FilledSwatchIcon,
    CubeIcon as FilledCubeIcon,
    CircleStackIcon as FilledCircleStackIcon,
    DocumentTextIcon as FilledDocumentTextIcon,
    EyeIcon as FilledEyeIcon,
    GiftIcon as FilledGiftIcon,
    BoltIcon as FilledBoltIcon,
    KeyIcon as FilledKeyIcon,
} from '@heroicons/react/24/solid'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ICreate {
    setEmojiID: Dispatch<SetStateAction<number>>
    setEmoji: Dispatch<SetStateAction<JSX.Element>>
    setPageName: Dispatch<SetStateAction<string>>
    setPageDesciption: Dispatch<SetStateAction<string>>
    setPageType: Dispatch<SetStateAction<string>>
    canGoOn: () => void
    pageName: string
    pageDescription: string
    pageType: string
    emojiID: number
    dark: boolean
}

const Create = (props: ICreate) => {
    const [emojis, setEmojis] = useState<
        {
            id: number
            iconName: string
            icon: JSX.Element
            selectedIcon: JSX.Element
        }[]
    >([])

    // useEffect(() => {
    //     setEmojis(
    //         {
    //             id: 0,
    //             iconName: 'FaceSmileIcon',
    //             icon: (
    //                 <FaceSmileIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //             selectedIcon: (
    //                 <FilledFaceSmileIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 1,
    //             iconName: 'CheckBadgeIcon',
    //             icon: (
    //                 <CheckBadgeIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //             selectedIcon: (
    //                 <FilledCheckBadgeIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 2,
    //             iconName: 'LifebuoyIcon',
    //             icon: <LifebuoyIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledLifebuoyIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //         },
    //         {
    //             id: 3,
    //             iconName: 'BeakerIcon',
    //             icon: <BeakerIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledBeakerIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 4,
    //             iconName: 'BookOpenIcon',
    //             icon: <BookOpenIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledBookOpenIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 5,
    //             iconName: 'BookmarkIcon',
    //             icon: <BookmarkIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledBookmarkIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 6,
    //             iconName: 'CakeIcon',
    //             icon: <CakeIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledCakeIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //         },
    //         {
    //             id: 7,
    //             iconName: 'CalculatorIcon',
    //             icon: (
    //                 <CalculatorIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //             selectedIcon: (
    //                 <FilledCalculatorIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 8,
    //             iconName: 'BanknotesIcon',
    //             icon: <BanknotesIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledBanknotesIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //         },
    //         {
    //             id: 9,
    //             iconName: 'CalendarIcon',
    //             icon: <CalendarIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledCalendarIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 10,
    //             iconName: 'CloudArrowUpIcon',
    //             icon: (
    //                 <CloudArrowUpIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //             selectedIcon: (
    //                 <FilledCloudArrowUpIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },  
    //         {
    //             id: 11,
    //             iconName: 'CodeBracketIcon',
    //             icon: <CodeBracketIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledCodeBracketIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //         },
    //         {
    //             id: 12,
    //             iconName: 'SwatchIcon',
    //             icon: (
    //                 <SwatchIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //             selectedIcon: (
    //                 <FilledSwatchIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 13,
    //             iconName: 'CubeIcon',
    //             icon: (
    //                 <CubeIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //             selectedIcon: (
    //                 <FilledCubeIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 14,
    //             iconName: 'CircleStackIcon',
    //             icon: <CircleStackIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledCircleStackIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 15,
    //             iconName: 'DocumentTextIcon',
    //             icon: (
    //                 <DocumentTextIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //             selectedIcon: (
    //                 <FilledDocumentTextIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 16,
    //             iconName: 'EyeIcon',
    //             icon: <EyeIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledEyeIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //         },
    //         {
    //             id: 17,
    //             iconName: 'GiftIcon',
    //             icon: <GiftIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledGiftIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //         },
    //         {
    //             id: 18,
    //             iconName: 'BoltIcon',
    //             icon: (
    //                 <BoltIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //             selectedIcon: (
    //                 <FilledBoltIcon
    //                     className={`w-10 h-10 text-brand-black`}
    //                 />
    //             ),
    //         },
    //         {
    //             id: 19,
    //             iconName: 'KeyIcon',
    //             icon: <KeyIcon className={`w-10 h-10 text-brand-black`} />,
    //             selectedIcon: (
    //                 <FilledKeyIcon className={`w-10 h-10 text-brand-black`} />
    //             ),
    //         },
    //     ])
    // }, [])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-[calc(100%-6rem)] flex shrink-0 p-8"
        >
            <div className="w-1/2 h-full flex flex-col space-y-4">
                <h1 className={`font-mt text-4xl font-bold text-brand-black`}>
                    Let&apos;s get some basic info.
                </h1>
                <h1 className={`font-mt text-xl text-brand-black`}>
                    This won&apos;t take very long
                </h1>

                <div className="form flex flex-col">
                    <h1 className={`font-mt text-lg text-brand-black`}>
                        Page Name
                    </h1>
                    <input
                        onInput={props.canGoOn}
                        value={props.pageName}
                        onChange={(e) =>
                            props.setPageName(e.currentTarget.value)
                        }
                        className={`h-14 w-56 rounded-xl pl-2 font-mt bg-transparent font-semibold text-xl border border-brand-black shadow-sm-btn text-brand-black`}
                    ></input>
                </div>

                <div className="form flex flex-col">
                    <h1 className={`font-mt text-lg text-brand-black`}>
                        Page Description
                    </h1>
                    <textarea
                        onInput={props.canGoOn}
                        value={props.pageDescription}
                        onChange={(e) =>
                            props.setPageDesciption(e.currentTarget.value)
                        }
                        className={`h-14 w-80 rounded-xl pl-2 font-mt bg-transparent font-semibold text-xl border border-brand-black shadow-sm-btn text-brand-black`}
                    ></textarea>
                </div>

                <div className="form flex flex-col">
                    <h1 className={`font-mt text-lg text-brand-black`}>
                        Page Type
                    </h1>
                    <select
                        value={props.pageType}
                        onChange={(e) =>
                            props.setPageType(e.currentTarget.value)
                        }
                        className={`h-14 w-80 rounded-xl pl-2 pr-2 font-mt bg-transparent font-semibold text-xl border border-brand-black shadow-sm-btn text-brand-black`}
                    >
                        <option value="auction">Landing Page</option>
                        <option value="dutch-auction">Mint Page</option>
                        <option value="standard-mint">About Page</option>
                    </select>
                </div>
            </div>

            <div className="w-1/2 flex flex-col space-y-4">
                <h1 className={`font-mt text-4xl font-bold text-brand-black`}>
                    Let&apos;s add some style
                </h1>
                <h1 className={`font-mt text-xl text-brand-black`}>
                    Choose an icon to represent this contract
                </h1>

                <div className="w-full flex flex-wrap items-center">
                    {emojis.map((emoji) => (
                        <div
                            key={emoji.id}
                            onClick={() => {
                                props.setEmoji(emoji.icon)
                                props.setEmojiID(emoji.id)
                            }}
                            className={`w-20 h-20 flex items-center hover:cursor-pointer`}
                        >
                            {props.emojiID !== emoji.id && (
                                <div
                                    className={`w-14 h-14 rounded-xl flex justify-center items-center hover:-translate-y-2 transition-all duration-300 border border-brand-black shadow-sm-btn`}
                                >
                                    {emoji.icon}
                                </div>
                            )}
                            {props.emojiID === emoji.id && (
                                <div
                                    className={`w-14 h-14 rounded-xl flex justify-center items-center hover:-translate-y-2 transition-all duration-300 border border-brand-black shadow-sm-btn`}
                                >
                                    {emoji.selectedIcon}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Create
