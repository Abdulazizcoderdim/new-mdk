import languageState from '@/atoms/languageAtom'
import { Calendar, Mails } from 'lucide-react'
import Image from 'next/image'
import { useRecoilState } from 'recoil'

const BlogPlace = ({ srcA, srcB }: { srcA: string; srcB: string }) => {
	const [selectedLanguage] = useRecoilState(languageState)

	return (
		<div className='md:w-1/2 max-sm:flex-col flex'>
			<Image
				src={srcB}
				alt=''
				layout='responsive'
				width={300}
				height={200}
				className='object-cover'
			/>
			<div className='bg-[#191919] flex flex-col min-w-60 justify-between p-10'>
				<p className='text-redd flex items-center text-sm gap-1'>
					<Calendar width={13} height={13} />{' '}
					{selectedLanguage == 'en' ? 'August 9, 2019' : '9 августа 2019 г.'}
					<Mails width={13} height={13} /> 0
				</p>
				<h1 className='text-white font-bold text-2xl'>
					{selectedLanguage == 'en'
						? 'Every Single Way You Can Wear Pastel Makeup This Spring'
						: 'Все способы использования пастельного макияжа этой весной'}
				</h1>
				<p className='text-base text-[#b3b3b3]'>
					{selectedLanguage == 'en'
						? 'Never ever think of giving up. Winners never quit and'
						: 'Никогда не думай сдаваться. Победители никогда не сдаются и'}
				</p>
				<div className='flex gap-2 items-center'>
					<Image
						src={srcA}
						className='rounded-full'
						alt=''
						width={50}
						height={50}
					/>
					<div className='text-start'>
						<h2 className='text-white text-lg font-bold'>
							{selectedLanguage == 'en' ? 'Aaron Russell' : 'Аарон Рассел'}
						</h2>
						<span className='text-redd'>
							{selectedLanguage == 'en' ? 'DESIGNER' : 'ДИЗАЙНЕР'}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogPlace
