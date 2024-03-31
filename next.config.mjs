/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'inreal.studio',
				port: '',
				pathname: '/wp-content/**'
			}
		]
	}
}

export default nextConfig;
