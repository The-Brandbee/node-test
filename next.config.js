/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects () {
        return[
            {
                source: '/ai-readiness',
                destination: 'https://csp.global/ai-readiness',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
