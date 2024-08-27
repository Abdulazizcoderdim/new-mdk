'use client'

import languageState from '@/atoms/languageAtom'
import LinkPage from '@/components/LinkPage'
import PlacePage from '@/components/PlacePage'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { useEffect } from 'react'
import CountUp from 'react-countup'
import { useRecoilState } from 'recoil'

const translations = {
	en: {
		aboutUs: 'About Us',
		aboutStory: 'About Story',
		member: 'MEMBER',
		partner: 'PARTNER',
		branch: 'BRANCH',
		designs: 'DESIGNS',
		ourTeam: 'OUR TEAM',
		topDesigners: 'Top Designers',
	},
	ru: {
		aboutUs: 'О НАС',
		aboutStory: 'О НАС',
		member: 'ЧЛЕН',
		partner: 'ПАРТНЕР',
		branch: 'ФИЛИАЛ',
		designs: 'ДИЗАЙНЫ',
		ourTeam: 'НАША КОМАНДА',
		topDesigners: 'Лучшие дизайнеры',
	},
}

const AboutPage = () => {
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
			<LinkPage path='about' page={currentTranslations.aboutUs} />
			<div className='bg-[#191919]'>
				<div className='container py-24'>
					<div
						data-aos='fade-down'
						className='flex max-md:flex-col items-center gap-14 justify-between'
					>
						<Image
							src='https://i.imgur.com/s88y0XJ.jpeg'
							className='md:w-1/2'
							alt=''
							width={300}
							height={400}
						/>
						<div className='space-y-4 md:w-1/2 text-white'>
							<p className='text-redd text-sm font-bold'>ABOUT US</p>
							<h1 className='text-[45px] font-bold'>
								{currentTranslations.aboutStory}
							</h1>
							<p className='text-[#b3b3b3] font-normal text-base'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
								<br /> <br />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod.Tempor incididunt ut labore et dolore magna aliqua.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<div className='flex w-full justify-between'>
								<div className='space-y-3'>
									<CountUp
										className=' md:text-4xl text-2xl font-bold'
										start={0}
										end={8384}
										duration={2.7}
										separator=''
									/>
									<p className='text-base text-[#b3b3b3]'>
										{currentTranslations.member}
									</p>
								</div>
								<div className='w-[1px] h-16 bg-gray-700' />
								<div className='space-y-3'>
									<CountUp
										className=' md:text-4xl text-2xl font-bold'
										start={0}
										end={6880}
										duration={2.7}
										separator=''
									/>
									<p className='text-base text-[#b3b3b3]'>
										{currentTranslations.partner}
									</p>
								</div>
								<div className='w-[1px] h-16 bg-gray-700' />
								<div className='space-y-3'>
									<CountUp
										className=' md:text-4xl text-2xl font-bold'
										start={0}
										end={1546}
										duration={2.7}
										separator=''
									/>
									<p className='text-base text-[#b3b3b3]'>
										{currentTranslations.branch}
									</p>
								</div>
								<div className='w-[1px] h-16 bg-gray-700' />
								<div className='space-y-3'>
									<CountUp
										className=' md:text-4xl text-2xl font-bold'
										start={0}
										end={4677}
										duration={2.7}
										separator=''
									/>
									<p className='text-base text-[#b3b3b3]'>
										{currentTranslations.designs}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container text-center py-20'>
					<span
						data-aos='fade-down'
						className='text-[#e32879] text-sm font-bold'
					>
						{currentTranslations.ourTeam}
					</span>
					<p
						data-aos='fade-down'
						className='text-[45px] text-white font-bold mb-10'
					>
						{currentTranslations.topDesigners}
					</p>
					<div
						data-aos='fade-down'
						className='grid md:grid-cols-2 grid-cols-1 gap-5'
					>
						<div className='flex gap-5 flex-col'>
							<Image src='https://i.imgur.com/m7WgWcO.jpg' alt='' width={700} height={400} />
							<div className='flex max-md:flex-col gap-5 items-center'>
								<Image
									className='w-full'
									src='https://i.imgur.com/HtxcdxK.jpeg'
									alt=''
									width={400}
									height={400}
								/>
								<Image
									className='w-full'
									src='https://i.imgur.com/HtxcdxK.jpeg'
									alt=''
									width={400}
									height={400}
								/>
							</div>
						</div>
						<div className='flex flex-col gap-5'>
							<div className='grid grid-cols-2 gap-5'>
								<Image src='https://i.imgur.com/a19XtML.jpg' alt='' width={400} height={400} />
								<Image src='https://i.imgur.com/VulX1TP.jpeg' alt='' width={400} height={400} />
								<Image src='https://i.imgur.com/O87boHw.jpeg' alt='' width={400} height={400} />
								<Image src='https://i.imgur.com/a19XtML.jpg' alt='' width={400} height={400} />
							</div>
							<Image src='https://i.imgur.com/m7WgWcO.jpg' alt='' width={700} height={710} />
						</div>
					</div>
				</div>
			</div>

			<PlacePage />
		</div>
	)
}

export default AboutPage
