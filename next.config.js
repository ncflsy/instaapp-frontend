/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      '192.168.1.6', // Untuk host lokal Laravel Anda
      'picsum.photos', // Untuk gambar placeholder dari picsum.photos
    ],
  },
};

module.exports = nextConfig; 