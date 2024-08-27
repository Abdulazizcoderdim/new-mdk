import languageState from '@/atoms/languageAtom'
import Link from 'next/link'
import { useRecoilState } from 'recoil'

const LinkPage = ({ page, path }: { page: string; path: string }) => {
	const [selectedLanguage] = useRecoilState(languageState)
	return (
		<div className='bg-[#2A2A2A]'>
			<div className='container py-10 flex items-center justify-between'>
				<ul className='flex gap-2'>
					<li className='text-[#b3b3b3]'>
						<Link href={'/'}>
							{selectedLanguage == 'en' ? 'Home' : 'Главное'}
						</Link>
					</li>
					<li className='text-[#5c5c5c]'>
						<Link href={`/${path}`}>{page}</Link>
					</li>
				</ul>
				<h1 className='text-white font-bold text-[30px]'>{page}</h1>
			</div>
		</div>
	)
}

export default LinkPage
