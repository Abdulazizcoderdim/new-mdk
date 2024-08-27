'use client'

import languageState from '@/atoms/languageAtom'
import BlogPlace from '@/components/BlogPlace'
import LinkPage from '@/components/LinkPage'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Calendar, Mails } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const translations = {
	en: {
		ourBlog: 'Our Blog',
		date: 'August 9, 2019',
		comments: '0',
		title: 'Every Single Way You Can Wear Pastel Makeup This Spring',
		summary: 'Never ever think of giving up. Winners never quit',
		workWithUs: 'Work With US',
	},
	ru: {
		ourBlog: 'Наш Блог',
		date: '9 августа 2019',
		comments: '0',
		title: 'Каждый способ, как можно носить пастельный макияж этой весной',
		summary:
			'Никогда не думайте о том, чтобы сдаться. Победители никогда не сдаются',
		workWithUs: 'Работайте с нами',
	},
}

const BlogPage = () => {
	const [selectedLanguage] = useRecoilState(languageState)

	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
		})
	}, [])

	const currentTranslations = translations[selectedLanguage] || translations.en

	return (
		<div>
			<LinkPage path='blog' page={currentTranslations.ourBlog} />
			<div className='bg-[#222222]'>
				<div data-aos='fade-down' className='container py-24'>
					<div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
						<BlogPlace srcA='https://i.imgur.com/infxJYA.jpg' srcB='https://i.imgur.com/NC6bQom.jpg' />
						<BlogPlace srcA='https://i.imgur.com/9AttWYh.jpg' srcB='https://i.imgur.com/QB8OgTR.jpeg' />
						<div className='flex flex-col justify-between bg-redd h-full p-20 text-white'>
							<p className='text-white flex items-center gap-1'>
								<Calendar width={15} height={15} /> {currentTranslations.date}{' '}
								<Mails width={15} height={15} /> {currentTranslations.comments}
							</p>
							<h1 className='text-white font-bold text-2xl'>
								{currentTranslations.title}
							</h1>
							<p className='text-base text-[#b3b3b3]'>
								{currentTranslations.summary}
								<br /> <br />
							</p>
							<div className='flex gap-2 items-center'>
								<Image
									src='https://i.imgur.com/infxJYA.jpg'
									alt=''
									layout='intrinsic'
									width={50}
									height={50}
									className='rounded-full'
								/>
								<div className='text-start'>
									<h2 className='text-white text-lg font-bold'>
										Aaron Russell
									</h2>
									<span className='text-redd'>DESIGNER</span>
								</div>
							</div>
						</div>
						<BlogPlace srcA='https://i.imgur.com/9AttWYh.jpg' srcB='https://i.imgur.com/5nTBwd0.jpeg' />
					</div>
					<div className='flex justify-center mt-16'>
						<button className='border outline-none border-redd px-10 bg-transparent text-white py-3'>
							{currentTranslations.workWithUs}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogPage
