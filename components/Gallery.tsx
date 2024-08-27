'use client'

import languageState from '@/atoms/languageAtom'
import GaleryModal from '@/components/GaleryModal'
import { videos } from '@/constants'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'

const translations = {
	en: {
		allGallery: 'ALL GALLERY',
		fashion: 'FASHION',
		model: 'MODEL',
		event: 'EVENT',
		other: 'OTHER',
	},
	ru: {
		allGallery: 'ВСЯ ГАЛЕРЕЯ',
		fashion: 'МОДА',
		model: 'МОДЕЛЬ',
		event: 'СОБЫТИЕ',
		other: 'ДРУГОЕ',
	},
}

const GalleryPage = () => {
	const [modal, setModal] = useState(false)
	const [srcM, setSrcM] = useState<string | null>('')
	const [items, setItems] = useState(videos)
	const [selectedLanguage] = useRecoilState(languageState)

	const filterItem = (categoryItem: string) => {
		const updatedItems = videos.filter(curElem => {
			return curElem.category === categoryItem
		})
		setItems(updatedItems)
	}

	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
		})
	}, [])

	const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

	const handleMouseEnter = (index: number, src: string) => {
		const videoElement = videoRefs.current[index]
		if (videoElement) {
			videoElement.src = src
			videoElement.play()
		}
	}

	const handleMouseLeave = (index: number) => {
		const videoElement = videoRefs.current[index]
		if (videoElement) {
			videoElement.pause()
			videoElement.src = ''
		}
	}

	const currentTranslations = translations[selectedLanguage] || translations.en

	return (
		<div className='bg-[#222222] py-24'>
			<div className='container text-center w-full space-y-16'>
				<div
					data-aos='fade-down'
					className='flex items-center md:gap-10 gap-5 flex-wrap text-center justify-center text-white font-bold'
				>
					<span
						className='hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg'
						onClick={() => setItems(videos)}
					>
						{currentTranslations.allGallery}
					</span>
					<span
						className='hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg'
						onClick={() => filterItem('FASHION')}
					>
						{currentTranslations.fashion}
					</span>
					<span
						className='hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg'
						onClick={() => filterItem('MODEL')}
					>
						{currentTranslations.model}
					</span>
					<span
						className='hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg'
						onClick={() => filterItem('EVENT')}
					>
						{currentTranslations.event}
					</span>
					<span
						className='hover:text-redd focus:text-redd cursor-pointer transition-all duration-200 text-lg'
						onClick={() => filterItem('OTHER')}
					>
						{currentTranslations.other}
					</span>
				</div>

				<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
					{items.map((elem, index) => {
						const { src, img, category } = elem
						return (
							<div
								data-aos='fade-down'
								key={index}
								className='relative w-full pb-[100%]'
							>
								<video
									ref={el => {
										if (el) {
											videoRefs.current[index] = el
										}
									}}
									onMouseEnter={() => handleMouseEnter(index, src)}
									onMouseLeave={() => handleMouseLeave(index)}
									onClick={() => {
										setModal(true)
										setSrcM(src)
									}}
									className='absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-all duration-200'
									poster={img}
									loop
									muted
									preload='none'
								>
									<source src='' type='video/mp4' />
								</video>
							</div>
						)
					})}
				</div>
			</div>

			{modal && <GaleryModal src={srcM} setModal={setModal} />}
		</div>
	)
}

export default GalleryPage
