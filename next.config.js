/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.stoneycreekhunting.co.nz', 'themoviedb.org', 'i.ibb.co', 'lh3.googleusercontent.com'],
  },
  env: {
    ADMIN: 'VladKyr',
    PASSWORD: 'Vlad1234!',
    GOOGLE_CLIENT_ID: "386300293874-epv0sc7hklgflj7mmcuusnrs59uc620a.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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"
  }
}

module.exports = nextConfig
