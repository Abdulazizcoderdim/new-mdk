'use client'

import languageState from '@/atoms/languageAtom'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import { useRecoilState } from 'recoil'

const translations = {
	en: {
		address: 'Address: 60-49 Road 11378 New York',
		phone: 'Phone: +65 11.188.888',
		email: 'Email: hello.colorlib@gmail.com',
		usefulLinksTitle: 'Useful Links', // Add this line
		usefulLinks: ['About Us', 'Model', 'Contact', 'Services'],
		joinNewsletter: 'Join The Newsletter',
		newsletterText:
			'Get E-mail updates about our latest shop and special offers.',
		subscribe: 'Subscribe',
		instagram: 'Instagram',
		copyright:
			'Copyright ©{year} All rights reserved | This template is made with by Colorlib',
	},
	ru: {
		address: 'Адрес: 60-49 Улица 11378 Нью-Йорк',
		phone: 'Телефон: +65 11.188.888',
		email: 'Электронная почта: hello.colorlib@gmail.com',
		usefulLinksTitle: 'Полезные ссылки',
		usefulLinks: ['О нас', 'Модель', 'Контакт', 'Услуги'],
		joinNewsletter: 'Подпишитесь на новостную рассылку',
		newsletterText:
			'Получайте обновления по электронной почте о нашем последнем магазине и специальных предложениях.',
		subscribe: 'Подписаться',
		instagram: 'Инстаграм',
		copyright:
			'Авторское право ©{year} Все права защищены | Этот шаблон создан Colorlib',
	},
}

const Footer = () => {
	const [selectedLanguage] = useRecoilState(languageState)
	const currentTranslations = translations[selectedLanguage] || translations.en

	return (
		<div className='text-white z-50 bg-[#191919] py-10'>
			<div className='container'>
				<div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
					<div className='space-y-3 text-[#b3b3b3] text-base '>
						<Image src='https://i.imgur.com/UwkkQDI.png' alt='Logo' width={106} height={30} />
						<p>{currentTranslations.address}</p>
						<p>{currentTranslations.phone}</p>
						<p>{currentTranslations.email}</p>
						<div className='flex items-center gap-3'>
							<span className='p-3 hover:bg-redd cursor-pointer transition-all duration-300 rounded-full text-white bg-[#303030]'>
								<Facebook />
							</span>
							<span className='p-3 hover:bg-redd cursor-pointer transition-all duration-300 rounded-full text-white bg-[#303030]'>
								<Instagram />
							</span>
							<span className='p-3 hover:bg-redd cursor-pointer transition-all duration-300 rounded-full text-white bg-[#303030]'>
								<Twitter />
							</span>
							<span className='p-3 hover:bg-redd cursor-pointer transition-all duration-300 rounded-full text-white bg-[#303030]'>
								<Youtube />
							</span>
						</div>
					</div>
					<div className='space-y-3 text-[#b3b3b3]'>
						<h2 className='text-xl font-bold text-white'>
							{currentTranslations.usefulLinksTitle}
						</h2>
						{currentTranslations.usefulLinks.map((link, index) => (
							<p key={index}>{link}</p>
						))}
					</div>
					<div className='space-y-3 text-[#b3b3b3]'>
						<h2 className='text-xl font-bold text-white'>
							{currentTranslations.joinNewsletter}
						</h2>
						<p>{currentTranslations.newsletterText}</p>
						<form className='space-y-2'>
							<input
								type='text'
								className='p-3 bg-transparent outline-none w-full border border-gray-500 placeholder:text-gray-500'
								placeholder='Enter your email'
							/>
							<button className='bg-redd text-white w-full py-3'>
								{currentTranslations.subscribe}
							</button>
						</form>
					</div>
					<div className='space-y-3 text-[#b3b3b3]'>
						<h2 className='text-xl font-bold text-white'>
							{currentTranslations.instagram}
						</h2>
						<div className='grid grid-cols-3 gap-2'>
							<Image
								width={70}
								height={70}
								className='max-sm:w-52 max-sm:h-40 object-cover'
								src='https://i.imgur.com/vE0lzEM.jpeg'
								alt='Instagram'
							/>
							<Image
								width={70}
								height={70}
								className='max-sm:w-52 max-sm:h-40 object-cover'
								src='https://i.imgur.com/92jqgG0.jpeg'
								alt='Instagram'
							/>
							<Image
								width={70}
								height={70}
								className='max-sm:w-52 max-sm:h-40 object-cover'
								src='https://i.imgur.com/DDT1Yll.jpeg'
								alt='Instagram'
							/>
							<Image
								width={70}
								height={70}
								className='max-sm:w-52 max-sm:h-40 object-cover'
								src='https://i.imgur.com/mOKxlqu.jpeg'
								alt='Instagram'
							/>
							<Image
								width={70}
								height={70}
								className='max-sm:w-52 max-sm:h-40 object-cover'
								src='https://i.imgur.com/DbZyROI.jpeg'
								alt='Instagram'
							/>
							<Image
								width={70}
								height={70}
								className='max-sm:w-52 max-sm:h-40 object-cover'
								src='https://i.imgur.com/JDS4hn5.jpeg'
								alt='Instagram'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
