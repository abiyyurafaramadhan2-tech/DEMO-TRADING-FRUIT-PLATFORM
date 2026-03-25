/** @type {import('next').NextConfig} */
module.exports = { reactStrictMode: true };
rm -rf node_modules package-lock.json .next
npm install
npm run build
