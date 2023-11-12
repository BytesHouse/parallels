/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.stoneycreekhunting.co.nz', 'themoviedb.org', 'i.ibb.co'],
  },
  env: {
    ADMIN: 'VladKyr',
    PASSWORD: 'Vlad1234!'
  }
}

module.exports = nextConfig
