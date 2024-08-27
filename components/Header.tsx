'use client'

import languageState from '@/atoms/languageAtom'
import { navItemsEn, navItemsRu } from '@/constants'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const Header = () => {
	const [munBu, setMunBu] = useState(false)
	const [subMenu, setSubMenu] = useState(false)
	const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState)
	const pathname = usePathname()

	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
		})
	}, [])

	const handleLanguageChange = (e: any) => {
		setSelectedLanguage(e.target.value)
	}

	const navItems = selectedLanguage === 'ru' ? navItemsRu : navItemsEn

	return (
		<>
			<div className='bg-[#191919]'>
				<div
					data-aos='fade-down'
					className='flex py-7 container justify-between items-center '
				>
					<div className='flex items-center gap-8'>
						<h1>
							<Link href={'/'}>
								<Image src='https://i.imgur.com/UwkkQDI.png' alt='Logo' width={106} height={25} />
							</Link>
						</h1>
						{/* Language Selector */}
						<select
							value={selectedLanguage}
							onChange={handleLanguageChange}
							className='bg-[#191919] border-none text-white font-bold cursor-pointer p-2 rounded'
						>
							<option value='en'>English</option>
							<option value='ru'>Русский</option>
						</select>
					</div>
					<div className='flex items-center gap-8'>
						<ul className='md:flex hidden items-center gap-8 font-bold text-white'>
							{navItems.map((item, index) => {
								const isActive = item.href === pathname
								return (
									<FlyoutLink
										FlyoutContent={index === 3 && <PricingContent />}
										className={`hover:text-[#E32879] transition ${
											isActive && 'text-[#E32879]'
										}`}
										key={index}
									>
										<Link href={item.href}>{item.title}</Link>
									</FlyoutLink>
								)
							})}
						</ul>
						{/* Language Selector */}
						{/* <select
							value={selectedLanguage}
							onChange={handleLanguageChange}
							className='bg-[#191919] border-none text-white font-bold cursor-pointer p-2 rounded'
						>
							<option value='en'>English</option>
							<option value='ru'>Русский</option>
						</select> */}
					</div>
					{/* Mobile Menu */}
					<div
						onClick={() => setMunBu(prev => !prev)}
						className='md:hidden bg-[#606060] text-white font-bold gap-2 cursor-pointer flex items-center p-3 py-1'
					>
						MENU <Menu />
					</div>
				</div>
				{munBu && (
					<ul className='md:hidden mx-5 bg-[#666666] transition-all duration-300  text-base py-3 space-y-3 text-white'>
						{navItems.map((item, index) => (
							<li
								key={index}
								className='active:bg-redd px-7 py-2 cursor-pointer'
							>
								<Link href={item.href}>{item.title}</Link>
							</li>
						))}
					</ul>
				)}
			</div>

			{pathname === '/' && (
				<div
					data-aos='fade-down'
					className='flex items-center justify-center h-[100vh] bg-transparent text-white'
				>
					<div className=' bg-[#AB4F81]/40 backdrop-blur-sm text-center rounded-xl md:w-96 w-72 min-h-96 py-5'>
						<h1 className='font-semibold'>
							&quot;
							{selectedLanguage === 'ru'
								? 'МОУШЕН ДИЗАЙН ДЕРЖИТ ЛЮДЕЙ В ЗАГАДКЕ'
								: 'MOTION DESIGN KEEP PEOPLE WONDERING'}
							&quot;
						</h1>
						<h1 className='text-6xl pt-10 font-bold'>MDK.PW</h1>
						<p className='mt-4 text-base'>
							{selectedLanguage === 'ru'
								? 'Абсолютно любая работа для вашего проекта, которая подается с душой и уникальными ходовыми функциями.'
								: 'Absolutely any work for your project, which is served with soul and unique functional features.'}
						</p>
						<button className='mt-6 px-6 py-3 bg-pink-600 text-white font-semibold'>
							{selectedLanguage === 'ru' ? 'Заказать' : 'Order Now'}
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Header

interface FlyoutLinkProps {
	children: React.ReactNode
	FlyoutContent: React.ReactNode
	className?: string
}

const FlyoutLink = ({
	children,
	FlyoutContent,
	className,
}: FlyoutLinkProps) => {
	const [open, setOpen] = useState(false)

	const showFlyout = open && FlyoutContent
	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className='relative h-fit w-fit z-50'
		>
			<p className={className}>{children}</p>
			<AnimatePresence>
				{showFlyout && (
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 15 }}
						className='absolute rounded-lg left-0 top-12 bg-white text-black'
					>
						<div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
						{FlyoutContent}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

const PricingContent = () => {
	return (
		<ul className='w-48 min-h-24 bg-slate-50 text-black font-bold text-lg space-y-3 p-6 shadow hover:shadow-lg transition duration-200 '>
			<li className='hover:text-redd transition-all duration-200'>
				<Link href={'#'}>Naoh</Link>
			</li>
			<li className='hover:text-redd transition-all duration-200'>
				<Link href={'#'}>Padis</Link>
			</li>
			<li className='hover:text-redd transition-all duration-200'>
				<Link href={'#'}>Jacob</Link>
			</li>
			<li className='hover:text-redd transition-all duration-200'>
				<Link href={'#'}>Gomez</Link>
			</li>
		</ul>
	)
}
