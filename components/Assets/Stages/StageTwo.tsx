import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

interface IStageTwo {
	dark: boolean;
}

const StageTwo = (props: IStageTwo) => {
	const [hovering, setHovering] = useState(false);
	const inputFiles = useRef<HTMLInputElement | null>(null);
	const dragAndDrop = useRef<HTMLDivElement | null>(null);

	const browseFiles = async () => {
		inputFiles.current!.click();
	}

	const doTheThing = () => {
		Array.from(inputFiles.current!.files!).forEach(photo => {
			console.log(photo.name);
			console.log(photo.type);
			console.log(URL.createObjectURL(photo));
		});
	};

	useEffect(() => {
		const handleDragOver = (e: DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
		}

		const onDragEnter = () => {
			setHovering(true);
		}

		const onDragLeave = () => {
			setHovering(false);
		}
		const handleDrop = (e: DragEvent) => {
			e.preventDefault();
			e.stopPropagation();

			setHovering(false);
			const { files } = e.dataTransfer!;

			if(files && files.length) {
				console.log(files);
			}
		}
		
		dragAndDrop.current!.addEventListener('dragover', handleDragOver);
		dragAndDrop.current!.addEventListener('drop', handleDrop);
		dragAndDrop.current!.addEventListener('dragenter', onDragEnter)
		dragAndDrop.current!.addEventListener('dragleave', onDragLeave)

		return () => {
			if(dragAndDrop.current) {
				dragAndDrop.current.removeEventListener('dragover', handleDragOver);
				dragAndDrop.current.removeEventListener('drop', handleDrop);
				dragAndDrop.current.removeEventListener('dragenter', onDragEnter);
				dragAndDrop.current.removeEventListener('dragleave', onDragLeave);
			}

		}
	}, [])

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="w-full h-[calc(100%-6rem)] flex shrink-0 p-8">
			<div onClick={browseFiles} ref={dragAndDrop} className={`w-full h-full border flex flex-col space-y-2 justify-center items-center hover:cursor-pointer ${hovering ? 'bg-blue-500': ''} ${props.dark ? 'border-brand-font shadow-light-btn' : 'border-brand-black shadow-btn'}`}>
				<input type='file' accept="image/png, image/jpeg" ref={inputFiles} id="file" className="w-full h-full hidden" onChange={doTheThing} multiple />
				<h1 ref={dragAndDrop} className={`font-mt font-bold text-3xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Drag your asssets here</h1>
				<h1 ref={dragAndDrop} className={`font-mt font-bold text-xl ${props.dark ? 'text-brand-font' : 'text-brand-black'}`}>Or click to browse files</h1>
			</div>
		</motion.div>
	);
};

export default StageTwo;
