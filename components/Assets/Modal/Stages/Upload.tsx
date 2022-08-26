import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface IStageTwo {
    dark: boolean
    setAssetCount: Dispatch<SetStateAction<number>>
}

const StageTwo = (props: IStageTwo) => {
    const [hovering, setHovering] = useState(false)
    const [assets, setAssets] = useState<
        { fileName: string; type: string; url: string }[]
    >([])
    const inputFiles = useRef<HTMLInputElement | null>(null)
    const dragAndDrop = useRef<HTMLDivElement | null>(null)
    const dragOverlay = useRef<HTMLDivElement | null>(null)

    const browseFiles = () => {
        inputFiles.current!.click()
    }

    const doTheThing = () => {
        Array.from(inputFiles.current!.files!).forEach((photo) => {
            setAssets((assets) => [
                ...assets,
                {
                    fileName: photo.name,
                    type: photo.type,
                    url: URL.createObjectURL(photo),
                },
            ])
        })
    }

    const printAssetList = () => {
        console.log(assets)
    }

    useEffect(() => {
        const handleDragOver = (e: DragEvent) => {
            e.preventDefault()
            e.stopPropagation()
        }

        const onDragEnter = (e: DragEvent) => {
            e.preventDefault()
            e.stopPropagation()

            if (e.target !== dragOverlay.current) {
                setHovering(true)
            }
        }

        const onDragLeave = (e: DragEvent) => {
            e.preventDefault()
            e.stopPropagation()

            if (e.target === dragOverlay.current) {
                setHovering(false)
            }
        }
        const handleDrop = (e: DragEvent) => {
            e.preventDefault()
            e.stopPropagation()

            setHovering(false)
            const { files } = e.dataTransfer!

            if (files && files.length) {
                const validFileTypes = [
                    'image/png',
                    'image/jpg',
                    'image/jpeg',
                    'video/mp4',
                    'video/quicktime',
                ]
                Array.from(files).forEach((photo, index) => {
                    console.log(photo.type)
                    if (validFileTypes.includes(photo.type)) {
                        setAssets((assets) => [
                            ...assets,
                            {
                                fileName: photo.name,
                                type: photo.type,
                                url: URL.createObjectURL(photo),
                            },
                        ])
                    } else {
                        console.log('illegal type')
                    }
                })
            }
        }
        dragAndDrop.current!.addEventListener('dragover', handleDragOver)
        dragAndDrop.current!.addEventListener('drop', handleDrop)
        dragAndDrop.current!.addEventListener('dragenter', onDragEnter)
        dragAndDrop.current!.addEventListener('dragleave', onDragLeave)

        return () => {
            if (dragAndDrop.current) {
                dragAndDrop.current.removeEventListener(
                    'dragover',
                    handleDragOver
                )
                dragAndDrop.current.removeEventListener('drop', handleDrop)
                dragAndDrop.current.removeEventListener(
                    'dragenter',
                    onDragEnter
                )
                dragAndDrop.current.removeEventListener(
                    'dragleave',
                    onDragLeave
                )
            }
        }
    }, [])

    useEffect(() => {
        props.setAssetCount(assets.length)
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-[calc(100%-6rem)] flex flex-col shrink-0 p-8"
        >
            <h1 className={`font-mt font-semibold text-lg text-brand-black`}>
                You'll be able to edit{' '}
                <span className="text-pink-500">metadata, odds, and more</span>{' '}
                after the group is created.
            </h1>
            <div
                onClick={browseFiles}
                ref={dragAndDrop}
                className={`w-full h-full rounded-2xl relative border flex flex-col ${
                    assets.length > 0 ? 'justify-start' : 'justify-center'
                } items-center hover:cursor-pointer border-brand-black shadow-btn`}
            >
                <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, .mp4, .mov, .mp3"
                    ref={inputFiles}
                    id="file"
                    className="w-full h-full hidden"
                    onChange={doTheThing}
                    multiple
                />
                {hovering && (
                    <div
                        ref={dragOverlay}
                        className="absolute w-full h-full bg-green-500/50"
                    ></div>
                )}
                {assets.length > 0 && (
                    <div className="w-full flex flex-wrap overflow-y-scroll">
                        {assets.map((asset) => (
                            <div
                                key={asset.fileName}
                                className="w-52 h-52 flex shrink-0 justify-center items-center"
                            >
                                {asset.type === 'image/jpeg' && (
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            backgroundImage: `url(${asset.url})`,
                                        }}
                                        className={`w-48 h-48 bg-contain border hover:cursor-default border-brand-black shadow-sm-btn `}
                                    >
                                        <div></div>
                                    </div>
                                )}
                                {asset.type === 'image/png' && (
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            backgroundImage: `url(${asset.url})`,
                                        }}
                                        className={`w-48 h-48 bg-contain border hover:cursor-default border-brand-black shadow-sm-btn `}
                                    >
                                        <div></div>
                                    </div>
                                )}
                                {asset.type === 'video/mp4' && (
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        className={`w-48 h-48 flex flex-col justify-center items-center border hover:cursor-default border-brand-black shadow-sm-btn `}
                                    >
                                        <video
                                            src={asset.url}
                                            controls
                                            itemType="video/mp4"
                                            className="w-full h-full"
                                        />
                                    </div>
                                )}
                                {asset.type === 'video/quicktime' && (
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                        className={`w-48 h-48 flex flex-col justify-center items-center border hover:cursor-default border-brand-black shadow-sm-btn `}
                                    >
                                        <video
                                            src={asset.url}
                                            controls
                                            itemType="video/quicktime"
                                            className="w-full h-full"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                {assets.length === 0 && (
                    <div>
                        <h1
                            className={`font-mt font-bold text-3xl text-brand-black`}
                        >
                            Drag your asssets here
                        </h1>
                        <h1
                            className={`font-mt font-bold text-xl text-brand-black`}
                        >
                            Or click to browse files
                        </h1>
                        <h1
                            className={`font-mt font-bold text-xl text-green-400`}
                        >
                            Accepted file types:
                        </h1>
                        <h1
                            className={`font-mt font-bold text-lg text-brand-black`}
                        >
                            PNG/JPG/JPEG
                        </h1>
                        <h1
                            className={`font-mt font-bold text-lg text-brand-black`}
                        >
                            MP4/MOV
                        </h1>
                        <h1
                            className={`font-mt font-bold text-lg text-brand-black`}
                        >
                            MP3
                        </h1>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default StageTwo
