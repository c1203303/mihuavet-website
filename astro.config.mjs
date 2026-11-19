import { defineConfig } from 'astro/config';

// 正式上線（mihuavet.tw）時 BASE_PATH 是 /；預覽網址（github.io/mihuavet-website）時是 /mihuavet-website
export default defineConfig({
  site: process.env.SITE_URL || 'https://mihuavet.tw',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
