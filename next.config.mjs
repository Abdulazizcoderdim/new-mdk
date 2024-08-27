/**
 * @type {import('next').NextConfig}
 */

export default {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'nztcdn.com',
				port: '',
				pathname: '/files/**',
			},
		],
		unoptimized: true,
	},
	output: 'export',
	distDir: 'dist',
}
