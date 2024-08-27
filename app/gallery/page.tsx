import dynamic from 'next/dynamic'

// Dynamically import the Gallery component with server-side rendering disabled
const Gallery = dynamic(() => import('../../components/Gallery'), {
	ssr: false,
})

export default function HomePage() {
	return <Gallery />
}
