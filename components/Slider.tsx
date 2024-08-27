import languageState from '@/atoms/languageAtom'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Define translations
const testimonials = {
	en: [
		{
			image: 'https://i.imgur.com/vopo1Ov.jpg',
			name: 'Travis Crawford',
			role: 'DESIGNER',
			description:
				'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		},
		{
			image: 'https://i.imgur.com/kFw05En.jpg',
			name: 'Travis Crawford',
			role: 'DESIGNER',
			description:
				'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		},
		{
			image: 'https://i.imgur.com/lgqLWyt.jpg',
			name: 'Travis Crawford',
			role: 'DESIGNER',
			description:
				'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		},
		{
			image: 'https://i.imgur.com/MPedLAY.jpeg',
			name: 'Travis Crawford',
			role: 'DESIGNER',
			description:
				'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		},
	],
	ru: [
		{
			image: 'https://i.imgur.com/vopo1Ov.jpg',
			name: 'Трэвис Кроуфорд',
			role: 'ДИЗАЙНЕР',
			description:
				'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		},
		{
			image: 'https://i.imgur.com/kFw05En.jpg',
			name: 'Трэвис Кроуфорд',
			role: 'ДИЗАЙНЕР',
			description:
				'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		},
		{
			image: 'https://i.imgur.com/lgqLWyt.jpg',
			name: 'Трэвис Кроуфорд',
			role: 'ДИЗАЙНЕР',
			description:
				'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		},
		{
			image: 'https://i.imgur.com/MPedLAY.jpeg',
			name: 'Трэвис Кроуфорд',
			role: 'ДИЗАЙНЕР',
			description:
				'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		},
	],
}

const Slider = () => {
	const [selectedLanguage] = useRecoilState<'ru' | 'en'>(languageState)
	const slides = testimonials[selectedLanguage] || testimonials['en']

	return (
		<div className='container py-10'>
			<Swiper
				className='min-h-80'
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={35}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
				}}
				pagination={{ clickable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{slides.map((item, index) => (
					<SwiperSlide key={index}>
						<div className='bg-[#222222] md:pt-[60px] pt-[50px] pr-[20px] md:pb-[50px] pb-[40px] pl-[40px] flex max-md:flex-col w-full gap-5 items-center'>
							<Image
								width={80}
								height={80}
								src={item.image}
								className='rounded-full max-md:w-20'
								alt={item.name}
							/>
							<div className='space-y-2'>
								<h2 className='text-[22px] text-white font-bold'>
									{item.name}
								</h2>
								<span className='text-redd'>{item.role}</span>
								<p className='text-base text-[#b3b3b3] font-normal'>
									{item.description}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider
