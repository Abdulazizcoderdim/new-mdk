'use client'

import BlogPlace from '@/components/BlogPlace'
import Modal from '@/components/Modal'
import PlacePage from '@/components/PlacePage'
import Slider from '@/components/Slider'
import { homeWork, ourTeam } from '@/constants'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
	Facebook,
	Instagram,
	Link,
	Search,
	Twitter,
	Youtube,
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useRecoilState } from 'recoil'
import languageState from '../atoms/languageAtom'

export default function Home() {
	const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)
	const [selectedLanguage] = useRecoilState(languageState)
	const [photoHover, setPhotoHover] = useState<
		'rasm1' | 'rasm2' | 'rasm3' | 'rasm4' | null
	>(null)
	const [modalSearch, setModalSearch] = useState<
		'rasm1' | 'rasm2' | 'rasm3' | 'rasm4' | null
	>(null)
	const [modal, setModal] = useState(false)
	const [team, setTeam] = useState<number | null>(null)
	// AOS
	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
		})
	}, [])

	return (
		<div>
			<div className='relative flex items-center justify-center bg-red-300 '>
				<Image
					title='finish'
					className='fixed inset-0 w-full h-full object-cover -z-10'
					src='https://i.imgur.com/nePCbzb.gif'
					alt='Finish'
					layout='fill'
				/>
			</div>

			<div className='bg-[#191919]'>
				<div className='container py-24'>
					<div>
						{/* 1-chi */}
						<div
							data-aos='fade-down'
							className='lg:flex flex-row justify-between lg:space-x-10 max-lg:space-y-10 items-center'
						>
							<video
								className='rounded-3xl'
								src='https://i.imgur.com/YwJKhRX.mp4'
								autoPlay
								loop
								muted
								id='bgVideo'
							>
								<source src='https://i.imgur.com/YwJKhRX.mp4' type='video/mp4' />
							</video>
							<div className='flex md:w-1/2 flex-col space-y-3'>
								<h1 className='text-sm font-bold uppercase text-[#e32879]'>
									FAQ
								</h1>
								<h1 className='md:text-[45px] text-[40px] text-white font-bold'>
									{selectedLanguage == 'en'
										? 'General information'
										: 'Общая информация'}
								</h1>
								<p className='text-[#b3b3b3] text-base font-normal leading-6'>
									{selectedLanguage === 'en' ? (
										<>
											In this section, you can familiarize yourself with the
											working conditions, general statistics, and the most
											frequently asked questions. <br /> <br /> The most common
											issue is the preparation of the technical specification
											(TS). I try to provide you with ready-made content even as
											part of your main project documentation. All work is
											completed to the client's full approval.
										</>
									) : (
										<>
											В этом разделе вы сможете ознакомиться с условиями работы,
											общей статистикой и самыми часто задаваемыми вопросами.{' '}
											<br /> <br /> Чаще всего главной проблемой является
											оформление ТЗ (Технического задания) я стараюсь подать для
											вас готовый контент даже в качестве вашего основного
											проектного оформления. Все работы выполняются до полного
											утверждения заказчика.
										</>
									)}
								</p>

								<button className='px-3 py-2 w-56 font-semibold bg-[#e32879] text-white '>
									{selectedLanguage == 'en' ? 'Read more' : 'Читать подробнее'}
								</button>
							</div>
						</div>
						{/* 2-chi */}
						<div data-aos='fade-down' className='mt-28'>
							<div className='text-center tracking-tighter'>
								<p className='text-[#e32879] text-sm font-bold uppercase'>
									{selectedLanguage == 'en'
										? 'ABSOLUTELY ANY KIND OF WORK'
										: 'АБСОЛЮТНО ЛЮБОЙ ВИД РАБОТЫ'}
								</p>
								<h1 className='text-[45px] max-md:text-[30px] text-white font-bold'>
									{selectedLanguage == 'en'
										? 'I learn with your ideas and suggestions.'
										: 'Я обучаюсь вместе с вашими идеями и предложениями'}
								</h1>
							</div>
							<ul className='grid lg:grid-cols-3 mt-10 md:grid-cols-2 grid-cols-1 gap-5'>
								{homeWork.map((item, index) => (
									<li
										key={index}
										className={`space-y-3 transition-all duration-200 
      ${hoveredIndex === index ? 'border-b-2' : ''}
      border-[#e32879] p-10 bg-[#222222] text-center text-white`}
										onMouseEnter={() => setHoveredIndex(index)}
										onMouseLeave={() => setHoveredIndex(null)}
									>
										<Image
											src={item.icon}
											alt=''
											className='mx-auto'
											width={50}
											height={50}
										/>
										<p className='text-[22px] font-bold'>
											{selectedLanguage === 'en'
												? item.title.en
												: item.title.ru}
										</p>
										<p className='text-sm text-[#b3b3b3] font-normal'>
											{selectedLanguage === 'en' ? item.desc.en : item.desc.ru}
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-[#222222] py-24 text-center'>
				<div data-aos='fade-down' className='tracking-tighter container pb-28'>
					<p className='text-[#e32879] text-sm uppercase font-bold'>
						{selectedLanguage === 'en' ? 'MY PORTFOLIO' : 'МОЁ ПОРТФОЛИО'}
					</p>
					<h1 className='md:text-[45px] text-[35px] font-bold text-white'>
						{selectedLanguage === 'en'
							? '3D and 2D designs/themes/banners/avatars/articles'
							: '3D и 2D оформления тем/баннеров/аватарок/статей'}
					</h1>
				</div>
			</div>

			<div className='bg-[#191919]'>
				<div className='container'>
					<div
						data-aos='fade-down'
						className='flex max-md:flex-col text-white -translate-y-36'
					>
						<div
							onMouseEnter={() => setPhotoHover('rasm1')}
							onMouseLeave={() => setPhotoHover(null)}
							className='w-1/2 max-md:w-full relative'
						>
							<Image
								src='https://nztcdn.com/files/bcea6246-9461-4d6c-b958-42a54a155f22.webp'
								alt=''
								width={800}
								height={600}
								className='object-cover'
							/>
							<div
								className={`absolute flex inset-0 transition-all duration-500 items-center justify-center ${
									photoHover === 'rasm1' ? 'opacity-100' : 'opacity-0'
								}`}
							>
								<div className='flex items-center gap-4'>
									<span
										className={`p-5 rounded-full bg-[#e32879] cursor-pointer`}
									>
										<Link />
									</span>
									<span
										onClick={() => {
											setModalSearch('rasm1'), setModal(true)
										}}
										className={`p-5 rounded-full bg-[#e32879] cursor-pointer`}
									>
										<Search />
									</span>
								</div>
							</div>
						</div>
						<div className='flex w-1/2 max-md:w-full flex-col h-full'>
							<div
								onMouseEnter={() => setPhotoHover('rasm2')}
								onMouseLeave={() => setPhotoHover(null)}
								className='md:h-1/2 relative'
							>
								<video
									className='rounded-3xl'
									src='https://i.imgur.com/kDOViAS.mp4'
									autoPlay
									loop
									muted
									id=''
								>
									<source src='https://i.imgur.com/kDOViAS.mp4' type='video/mp4' />
								</video>
								<div
									className={`absolute inset-0 flex transition-all duration-500 items-center justify-center ${
										photoHover === 'rasm2' ? 'flex' : 'opacity-0 flex'
									}`}
								>
									<div className='flex items-center gap-4'>
										<span className='p-5 rounded-full bg-[#e32879] cursor-pointer'>
											<Link />
										</span>
										<span
											onClick={() => {
												setModalSearch('rasm2'), setModal(true)
											}}
											className='p-5 rounded-full bg-[#e32879] cursor-pointer'
										>
											<Search />
										</span>
									</div>
								</div>
							</div>
							<div className='flex max-md:flex-col h-1/2'>
								<div
									onMouseEnter={() => setPhotoHover('rasm3')}
									onMouseLeave={() => setPhotoHover(null)}
									className='w-1/2 max-md:w-full relative'
								>
									<video
										className='rounded-3xl'
										src='https://i.imgur.com/iEhvKbd.mp4'
										autoPlay
										loop
										muted
										id=''
									>
										<source src='https://i.imgur.com/iEhvKbd.mp4' type='video/mp4' />
									</video>
									<div
										className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${
											photoHover === 'rasm3' ? 'flex' : 'opacity-0 flex'
										}`}
									>
										<div className='flex items-center gap-4'>
											<span className='p-5 rounded-full bg-[#e32879] cursor-pointer'>
												<Link />
											</span>
											<span
												onClick={() => {
													setModalSearch('rasm3'), setModal(true)
												}}
												className='p-5 rounded-full bg-[#e32879] cursor-pointer'
											>
												<Search />
											</span>
										</div>
									</div>
								</div>
								<div
									onMouseEnter={() => setPhotoHover('rasm4')}
									onMouseLeave={() => setPhotoHover(null)}
									className='w-1/2 max-md:w-full relative'
								>
									<Image
										src='https://i.imgur.com/IYT8ZY2.png'
										alt=''
										className='object-cover h-full w-full'
										layout='fill'
										objectFit='cover'
									/>
									<div
										className={`absolute inset-0 transition-all duration-500 items-center justify-center ${
											photoHover === 'rasm4' ? 'flex' : 'opacity-0 flex'
										}`}
									>
										<div className='flex items-center gap-4'>
											<span className='p-5 rounded-full bg-[#e32879] cursor-pointer'>
												<Link />
											</span>
											<span
												onClick={() => {
													setModalSearch('rasm4'), setModal(true)
												}}
												className='p-5 rounded-full bg-[#e32879] cursor-pointer'
											>
												<Search />
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					data-aos='fade-down'
					className='flex max-md:flex-col max-md:space-y-10 justify-between container'
				>
					<div className='md:w-1/2 text-white space-y-4'>
						<h3 className='text-redd text-sm font-bold uppercase'>
							{selectedLanguage === 'en' ? 'NUMBER SPEAKS' : 'ЦИФРЫ ГОВОРЯТ'}
						</h3>
						<h1 className='md:text-[45px] text-[35px] font-bold leading-tight'>
							{selectedLanguage === 'en'
								? 'We have a lot of experience'
								: 'У нас большой опыт'}
						</h1>
						<button
							style={{ marginTop: '50px' }}
							title={selectedLanguage === 'en' ? 'Read More' : 'Читать дальше'}
							className='font-semibold px-8 py-3 bg-redd'
						>
							{selectedLanguage === 'en' ? 'Read More' : 'Читать дальше'}
						</button>
					</div>
					<div className='md:w-1/2 space-y-5'>
						<div className='flex gap-10'>
							<CountUp
								className='text-redd md:text-5xl text-2xl font-bold'
								start={0}
								end={2034}
								duration={2.7}
								separator=''
							/>
							<div className='space-y-4'>
								<h2 className='text-white text-[22px] font-bold'>
									{selectedLanguage === 'en'
										? 'Successful projects'
										: 'Успешные проекты'}
								</h2>
								<p className='text-base text-[#b3b3b3] font-normal'>
									{selectedLanguage === 'en'
										? 'Since its establishment in 2005, Fashion has been focusing on project management & implementation through cooperation.'
										: 'С момента своего основания в 2005 году, Fashion сосредоточен на управлении проектами и реализации через сотрудничество.'}
								</p>
							</div>
						</div>
						<div className='flex gap-10'>
							<CountUp
								className='text-redd md:text-5xl text-2xl font-bold'
								start={0}
								end={1054}
								duration={2.7}
								separator=''
							/>
							<div className='space-y-4'>
								<h2 className='text-white text-[22px] font-bold'>
									{selectedLanguage === 'en' ? 'Events' : 'События'}
								</h2>
								<p className='text-base text-[#b3b3b3] font-normal'>
									{selectedLanguage === 'en'
										? 'Since its establishment in 2005, Fashion has been focusing on project management & implementation through cooperation.'
										: 'С момента своего основания в 2005 году, Fashion сосредоточен на управлении проектами и реализации через сотрудничество.'}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* slider */}
				<Slider />

				<PlacePage />

				{/* our team */}
				<div className='container text-center py-20'>
					<span
						data-aos='fade-down'
						className='text-[#e32879] text-sm font-bold'
					>
						{selectedLanguage == 'en' ? 'OUR TEAM' : 'НАША КОМАНДА'}
					</span>
					<p
						data-aos='fade-down'
						className='text-[45px] text-white font-bold mb-10'
					>
						{selectedLanguage == 'en' ? 'Top Designers' : 'Лучшие дизайнеры'}
					</p>
					<ul
						data-aos='fade-down'
						className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'
					>
						{ourTeam.map((item, index) => (
							<li
								onMouseEnter={() => setTeam(index)}
								onMouseLeave={() => setTeam(null)}
								className='text-white relative transition-all duration-300'
								key={index}
							>
								<Image
									src={item.img}
									alt=''
									layout='responsive'
									width={500}
									height={300}
								/>
								<div
									className={`md:space-y-8 space-y-2 text-center absolute top-5 left-5 bottom-5 right-5 ${
										team === index ? 'opacity-100' : 'opacity-0 scale-0'
									} transition-all duration-500 md:py-16 py-5 px-5 bg-[#191919]`}
								>
									<p className='text-[#b3b3b3] font-normal text-base'>
										{item.desc}
									</p>
									<h2 className='text-[22px] font-bold '>
										{selectedLanguage == 'en' ? item.nameEn : item.nameRu}
									</h2>
									<p className='text-redd text-xs'>
										{selectedLanguage == 'en'
											? item.positionEn
											: item.positionRu}
									</p>
									<div className='flex items-center gap-3 justify-center'>
										<span className='md:p-4 p-3 rounded-full bg-[#303030] cursor-pointer'>
											<Facebook />
										</span>
										<span className='md:p-4 p-3 rounded-full bg-[#303030] cursor-pointer'>
											<Twitter />
										</span>
										<span className='md:p-4 p-3 rounded-full bg-[#303030] cursor-pointer'>
											<Instagram />
										</span>
										<span className='md:p-4 p-3 rounded-full bg-[#303030] cursor-pointer'>
											<Youtube />
										</span>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* blog */}
			<div className='bg-[#222222] py-20 text-center'>
				<div data-aos='fade-down' className='mb-10'>
					<h3 className='text-[#e32879] text-sm font-bold uppercase'>
						{selectedLanguage == 'en' ? 'Latest Blog' : 'Последний блог'}
					</h3>
					<h1 className='text-white md:text-[45px] text-[40px] font-bold'>
						{selectedLanguage == 'en' ? 'From Our Blog' : 'Из нашего блогаs'}
					</h1>
				</div>
				<div
					data-aos='fade-down'
					className='container flex gap-5 max-lg:flex-col lg justify-between'
				>
					<BlogPlace srcA='https://i.imgur.com/infxJYA.jpg' srcB='https://i.imgur.com/NC6bQom.jpg' />
					<BlogPlace srcA='https://i.imgur.com/9AttWYh.jpg' srcB='https://i.imgur.com/QB8OgTR.jpeg' />
				</div>
			</div>

			{/* modal */}

			{modal && (
				<Modal
					modalSearch={modalSearch}
					setModal={setModal}
					setModalSearch={setModalSearch}
				/>
			)}
		</div>
	)
}