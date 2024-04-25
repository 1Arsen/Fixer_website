/** @type {import('next').NextConfig} **/

const withPWA = require('next-pwa')


const isProduction = process.env.NODE_
const config = {
    // output: 'export',
}
const nextConfig = withPWA({
    dest: 'public',


})(config)

module.exports = nextConfig
