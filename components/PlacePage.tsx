'use client'

import languageState from '@/atoms/languageAtom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const PlacePage = () => {
	const [selectedLanguage] = useRecoilState(languageState)
	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
		})
	}, [])
	return (
		<div className='relative flex items-center justify-center bg-pink-500 text-white'>
			<Image
				width={200}
				height={500}
				src={'https://i.imgur.com/qj72hSU.jpeg'}
				alt='Background'
				className='absolute object-cover inset-0 z-0'
			/>
			<div className='relative right-0 left-0 w-full py-28 z-10 p-4 bg-pink-600 bg-opacity-85 text-center'>
				<h1 data-aos='fade-down' className='text-4xl font-bold mb-4'>
					{selectedLanguage === 'en'
						? 'We Create Trends For The World'
						: 'Мы Создаем Тренды Для Мира'}
				</h1>
				<p data-aos='fade-down' className='mb-4'>
					{selectedLanguage === 'en'
						? "Until then, the result is before. I need a computer, but it's not made out of the gate. Tomorrow, some turpis landus, quis laoreet lacus congue sed. But there is no one who has a vestibule at times. It's time for mass basketball."
						: 'До тех пор результат будет раньше. Мне нужен компьютер, но он не из ворот сделан. Завтра немного turpis Landus, quis laoreet lacus congue sed. Но нет никого, у кого есть тамбур порой. Пришло время массового баскетбола.'}
				</p>
				<button
					data-aos='fade-down'
					className='px-4 py-2 bg-white text-pink-600 font-bold cursor-pointer'
				>
					{selectedLanguage === 'en' ? 'Work With Us' : 'Работайте С Нами'}
				</button>
			</div>
		</div>
	)
}

export default PlacePage
