export const clinic = {
  name: '米花動物醫院',
  tagline: '竹北犬貓專業醫療',
  phone: '(03) 658-1042',
  tel: '+88636581042',
  bookingForm: 'https://forms.gle/yWCb4pjzZTCYHSDZ6',
  facebook: 'https://facebook.com/mihuavet',
  instagram: 'https://instagram.com/mihuavet',
  blog: 'https://blog.mihuavet.tw/',
  mapEmbed: 'https://maps.google.com/maps?q=%E7%B1%B3%E8%8A%B1%E5%8B%95%E7%89%A9%E9%86%AB%E9%99%A2&t=m&z=15&output=embed&iwloc=near',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=%E7%B1%B3%E8%8A%B1%E5%8B%95%E7%89%A9%E9%86%AB%E9%99%A2',
  hours: ['10:00–13:00', '14:00–18:00', '19:00–21:00'],
};

export const departments = {
  內科: '#e07b2e',
  外科: '#1d3f66',
  家醫科: '#1aa7c4',
  心臟科: '#1fa463',
};

export const doctors = [
  {
    slug: 'hsiehmingjuei',
    name: '謝明瑞',
    enName: 'MING-JUEI HSIEH, MS, DVM',
    dept: '內科',
    focus: '腎臟科、肝膽腸胃科',
    photo: 'images/team/hsiehmingjuei.webp',
    treats: [
      '泌尿系統疾病：急慢性腎臟疾病、蛋白尿、尿路結石、尿路感染',
      '內分泌疾病：糖尿病、庫欣氏症、甲狀腺功能低下或亢進',
      '腸胃疾病：慢性嘔吐、慢性下痢、慢性便秘',
      '肝膽疾病：肝指數上升、膽管肝炎、膽囊疾病',
      '減重門診',
      '家醫內科',
    ],
    career: [
      '國立中興大學 獸醫系 學士',
      '國立中興大學 獸醫學研究所臨床組 碩士',
      '國立臺灣大學獸醫教學醫院 學士後實習獸醫師',
      '國立臺灣大學獸醫教學醫院 內科住院獸醫師',
      '國立臺灣大學獸醫教學醫院 一般內科門診獸醫師',
      '國立臺灣大學獸醫教學醫院 內科急診獸醫師',
      '國立臺灣大學獸醫教學醫院 內科總獸醫師',
      '築心動物醫院 主治獸醫師',
      'Elsevier出版社獸醫中文書籍翻譯、編輯',
      '狗腳印出版社獸醫中文書籍翻譯、編輯',
      'STATE獸醫助理培訓課程 講師',
      '多場獸醫網路研討會 講師',
    ],
  },
  {
    slug: 'wanghsianghsin',
    name: '王翔昕',
    enName: 'HSIANG-HSIN WANG, DVM',
    dept: '內科',
    focus: '貓科、皮膚科、內分泌科',
    photo: 'images/team/wanghsianghsin.webp',
    treats: [
      '貓科疾病：貓口炎、下泌尿道症候群、脂肪肝',
      '內分泌疾病：糖尿病、庫欣氏症、甲狀腺功能低下或亢進',
      '皮膚疾病：慢性外耳炎、慢性搔癢、脫毛',
      '預防醫學及傳染病防治',
      '家醫內科',
    ],
    career: [
      '國立臺灣大學 獸醫系 學士',
      '國立臺灣大學獸醫教學醫院 學士後實習醫師',
      '國立臺灣大學獸醫教學醫院 急診暨傳染病門診醫師',
      '錫安動物醫院 主治獸醫師',
      '築心動物醫院 主治獸醫師',
    ],
  },
  {
    slug: 'suhsingyen',
    name: '蘇星彥',
    enName: 'HSING-YEN SU, DVM',
    dept: '外科',
    focus: '齒科、外科、神經科',
    photo: 'images/team/suhsingyen.webp',
    treats: [
      '一般及進階外傷處理',
      '一般軟組織外科：絕育、截肢、各式體壁疝氣修復',
      '進階軟組織外科：腎上腺腫瘤切除手術、進階會陰疝氣修補',
      '耳鼻喉外科：進階耳部手術、唾液腺切除、短吻犬上呼吸道整形',
      '口腔外科：顏面及口腔腫塊切除、牙周治療',
      '消化道外科：食道破裂修補、胃擴張扭轉手術、胃固定、腸胃道異物及腫塊切除手術、圍肛腫瘤切除',
      '泌尿道外科：尿道造口、腎臟摘除、其他進階泌尿道手術',
      '肝膽外科：肝膽胰進階手術、肝門脈分流手術',
      '骨關節外科：跛行檢查、關節脫臼整復、膝關節整形、韌帶斷裂手術',
      '神經疾病（例如共濟失調、顏面神經異常、癲癇、運動後無力、癱瘓、前庭症狀等）之治療及控制',
    ],
    career: [
      '國立臺灣大學 獸醫系學士',
      '國立臺灣大學獸醫教學醫院 學士後實習獸醫師',
      '國立臺灣大學獸醫教學醫院 外科住院獸醫師',
      '國立臺灣大學獸醫教學醫院 外科急診獸醫師',
      '國立臺灣大學獸醫教學醫院 一般外科門診獸醫師',
      '維康動物醫院 主治獸醫師',
    ],
  },
  {
    slug: 'linsuyin',
    name: '林素因',
    enName: 'SU-YIN LIN, DVM',
    dept: '家醫科',
    focus: '家醫科、一般內科',
    photo: 'images/team/linsuyin.webp',
    treats: [
      '家醫門診：疫苗注射、健康檢查、絕育門診',
      '一般內科：慢性腎病、急性消化症狀、上呼吸道感染、頻尿、血尿、皮膚搔癢等',
    ],
    career: [
      '國立臺灣大學 獸醫系 學士',
      '路米動物醫院 住院獸醫師',
      '國立臺灣大學獸醫教學醫院 學士後實習獸醫師',
      '基隆稚沅動物醫院 主治獸醫師',
    ],
  },
  {
    slug: 'pinghsienchou',
    name: '周秉賢',
    enName: 'PING-HSIEN CHOU, MS, DVM',
    dept: '心臟科',
    focus: '心臟科、一般內科',
    photo: 'images/team/pinghsienchou.webp',
    treats: [
      '心臟內科：心雜音、肺積水、肺高壓、瓣膜性疾病、貓心肌病等',
      '影像科：胸腔X光判讀、腹腔X光判讀、腹腔超音波檢查、心臟超音波檢查',
      '一般內科：急慢性咳嗽、呼吸症狀、急性消化症狀、頻尿、血尿',
    ],
    career: [
      '國立中興大學 獸醫系 學士',
      '國立中興大學 獸醫學研究所臨床組 碩士',
      '築心動物醫院 住院獸醫師',
      '以立動物醫院 主治獸醫師',
    ],
  },
  {
    slug: 'shihwenchiao',
    name: '石汶巧',
    enName: 'WEN-CHIAO SHIH, DVM',
    dept: '家醫科',
    focus: '家醫科、一般內科',
    photo: null,
    treats: [
      '家醫門診：疫苗注射、健康檢查、絕育門診',
      '一般內科：慢性腎病、急性消化症狀、上呼吸道感染、頻尿、血尿、皮膚搔癢等',
    ],
    career: [
      '國立屏東科技大學 獸醫系 學士',
      '慈愛動物醫院台北總院 住院獸醫師',
      '慈愛動物醫院台北總院 主治獸醫師',
    ],
  },
];

export const services = [
  {
    title: '一般家醫診療',
    items: ['飼養問題諮詢', '減重諮詢', '疫苗注射、驅蟲', '絕育手術', '新飼養寵物基礎檢查', '成年一般健康檢查', '老年高階健康檢查', '洗牙、全口健康評估治療'],
  },
  {
    title: '內科診療',
    items: ['精神食慾不振', '慢性嘔吐、下痢、便秘', '頻尿、血尿、尿不出來', '喝水及排尿量異常', '慢性腎病', '肝膽疾病', '皮膚搔癢、紅疹', '耳朵紅腫搔癢', '其他內科相關疾病'],
  },
  {
    title: '進階內科',
    items: ['糖尿病', '腎上腺功能亢進/不全', '甲狀腺功能亢進/不全', '不明原因發燒', '免疫性血液疾病', '慢性消瘦', '犬心臟內科', '貓心臟內科'],
  },
  {
    title: '外科診療',
    items: ['跛行、步態異常', '癲癇', '複雜傷口護理', '團塊切除', '腹腔軟組織手術', '腸道手術', '短吻犬整形手術', '外陰整形手術', '其他外科、神經科相關疾病'],
  },
];

export const specialties = [
  { title: '內科', items: ['一般內科', '進階內科', '心臟科', '腎臟泌尿科', '肝膽腸胃科', '皮膚科', '內分泌科', '貓科'] },
  { title: '外科', items: ['一般外科', '外傷科', '一般軟組織外科', '神經科', '齒科'] },
];

export const environment = [
  { title: '接待空間', text: '整潔明亮的接待空間，配合悠揚的輕音樂，減輕您與您的寶貝候診時的焦慮。' },
  { title: '診療空間', text: '情緒舒緩費洛蒙全天候施放，最低緊迫的醫療操作原則。您的寶貝，值得最溫柔的對待。' },
  { title: '狗狗住院區', text: '獨立不鏽鋼住院室，堅持不使用會卡腳的柵狀地板，讓狗狗舒適的住院是我們唯一的考量。' },
  { title: '貓咪住院區', text: '沒有金屬反射的溫暖隔間，供應各種口味的乾乾、罐罐、肉泥，讓喵皇住院就像住飯店。' },
  { title: '中央處理區', text: '通往所有診間的心臟地帶，提升空間利用和人員移動的效率。檢驗、包藥、治療都在這裡進行。' },
  { title: '手術室', text: '明亮寬敞的手術空間，齊全的麻醉藥品設備。在這裡，我們不只完成了手術，也完成了毛家長們的期待。' },
].map((x, i) => ({ ...x, photo: `images/environment/${i + 1}.webp` }));

export const equipment = [
  ['血液檢查設備', 'IDEXX ProCyte Dx 全血球分析儀'],
  ['血液檢查設備', 'IDEXX Catalyst One 生化分析儀'],
  ['血液檢查設備', 'InSight qLabs 凝血時間分析儀'],
  ['尿液檢查設備', 'IDEXX VetLab UA 尿液化學分析儀'],
  ['影像檢查設備', 'Siemens ACUSON Juniper 高解析度彩色超音波'],
  ['影像檢查設備', '動物用高頻X光機及數位顯影系統'],
  ['麻醉設備', '動物專用麻醉呼吸機'],
  ['麻醉設備', '動物用生理監視儀'],
  ['手術設備', '手術無影燈'],
  ['外科設備', '高頻電燒刀'],
  ['齒科設備', '牙科治療台'],
  ['齒科設備', '牙科X光機'],
  ['齒科設備', '牙科數位影像系統'],
  ['眼科設備', '眼壓測量儀'],
  ['內科設備', '六導程數位心電圖'],
  ['內科設備', '高倍率雙目顯微鏡'],
  ['內科設備', '都卜勒血壓測量儀'],
  ['內科設備', '超音波霧化器'],
  ['住院照護設備', '獸醫專用輸液幫浦'],
  ['住院照護設備', '微量輸液幫浦'],
].map(([category, name], i) => ({ category, name, photo: `images/equipment/${i + 1}.webp` }));

export const healthPackages = [
  {
    species: '狗狗',
    image: 'images/health/dog.webp',
    plans: [
      { name: '成犬', price: 4850, items: ['全血球計數', '蛋白質、血糖', '基本肝腎指數', '寄生蟲快篩4DX', '完整尿檢'] },
      { name: '老犬基礎', base: '成犬', price: 9550, items: ['早期腎病SDMA', '胸腔X光', '腹腔X光', '血壓'] },
      { name: '老犬高階', base: '老犬基礎', price: 14450, items: ['進階肝膽腎功能', '電解質', '全腹腔超音波'], note: '若需安排心臟相關檢查，需配合心臟科醫師門診時段' },
    ],
  },
  {
    species: '貓咪',
    image: 'images/health/cat.webp',
    plans: [
      { name: '成貓', price: 6050, items: ['全血球計數', '蛋白質、血糖', '基本肝腎指數', '早期腎病SDMA', '白血愛滋心絲蟲快篩', '完整尿檢（超音波導引抽尿）'] },
      { name: '老貓基礎', base: '成貓', price: 12800, items: ['電解質', '總甲狀腺素TT4', '心臟快篩', '胸腔X光', '腹腔X光', '血壓'] },
      { name: '老貓高階', base: '老貓基礎', price: 22500, items: ['進階肝膽腎功能', '全腹腔超音波', '心電圖', '心臟超音波'], note: '需配合心臟科醫師門診時段' },
    ],
  },
];

export const nav = [
  { label: '首頁', href: '' },
  {
    label: '關於米花',
    href: 'about-mihua/',
    children: [
      { label: '關於米花', href: 'about-mihua/' },
      { label: '米花環境', href: 'about-mihua/environment/' },
      { label: '米花設備', href: 'about-mihua/equipment/' },
    ],
  },
  {
    label: '米花團隊',
    href: 'about-mihua/our-team/',
    children: [
      { label: '米花團隊', href: 'about-mihua/our-team/' },
      ...doctors.map((d) => ({ label: `${d.name} 獸醫師`, href: `about-mihua/our-team/${d.slug}/` })),
    ],
  },
  { label: '診療項目', href: 'about-mihua/our-services/' },
  { label: '健檢套組', href: 'health-checkup/' },
  { label: '犬喵物語', href: 'https://blog.mihuavet.tw/', external: true },
];
