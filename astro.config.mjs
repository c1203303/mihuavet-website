import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH || '/';
const to = (path) => `${base.replace(/\/$/, '')}${path}`;
const doctorSlugs = ['hsiehmingjuei', 'wanghsianghsin', 'suhsingyen', 'linsuyin', 'pinghsienchou', 'shihwenchiao'];
// 舊 WordPress 的科別頁
const oldSpecialtyPages = ['internal-medicine', 'dental', '貓科', '內分泌科', '一般外科', '皮膚科', '肝膽腸胃科', '泌尿腎臟科'];

// 正式上線（mihuavet.tw）時 BASE_PATH 是 /；預覽網址（github.io/mihuavet-website）時是 /mihuavet-website
export default defineConfig({
  site: process.env.SITE_URL || 'https://mihuavet.tw',
  base,
  trailingSlash: 'ignore',
  redirects: {
    ...Object.fromEntries(doctorSlugs.map((s) => [`/${s}`, to(`/about-mihua/our-team/${s}/`)])),
    ...Object.fromEntries(oldSpecialtyPages.map((s) => [`/${s}`, to('/about-mihua/our-services/')])),
  },
});
