/** @type {import('next').NextConfig} **/

const withPWA = require('next-pwa')


const isProduction = process.env.NODE_
const config = {
    //
}
const nextConfig = withPWA({
    dest: 'public',
    //disable: !isProduction,

})(config)

module.exports = nextConfig
