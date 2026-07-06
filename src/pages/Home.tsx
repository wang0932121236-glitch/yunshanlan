import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { partnerHotels, type Hotel } from '../data/partners';

const POSTER_BG = '/poster.gif';

const carouselImages = [
  {
    src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/7278d9d906664a029f5b54774f624a40.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260702171705C7FBD0324D81BCCC27B8&rrcfp=755f3169&x-expires=2098343855&x-signature=6W4%2B7zWlPs%2FqdBMoXAjgZW343UU%3D',
    label: 'Yunnan',
    sub: "China's Most Desirable Province",
    desc: "Home to 25 ethnic groups, from tropical rainforests to alpine snow-capped peaks — one of the world's most biodiverse regions",
    coord: '25.04° N, 102.71° E',
  },
  {
    src: 'https://p6-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/64fbd0a0d9024beebb92624b6dc8abba.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260702175516CAEC315571F4ACCFE679&rrcfp=755f3169&x-expires=2098346144&x-signature=xUMUGwAySJ9cQjU%2BPvCD878JPD0%3D',
    label: 'Kunming',
    sub: 'Spring City, Year-Round Bloom',
    desc: 'Dianchi Lake, Cuihu Park — perpetual spring with blooming flowers every season of the year',
    coord: '25.04° N, 102.71° E',
  },
  {
    src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/f1486df5673a46efa0e45b4c0489242e.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260702190345952FBEDB54F661FBD29F&rrcfp=755f3169&x-expires=2098350250&x-signature=BkWuFxjjqVg9LDI0qfH0a5RjwpY%3D',
    label: 'Dali',
    sub: 'Romance of Cangshan & Erhai',
    desc: 'Bai tie-dye, Jiacang woodblock prints — slow living in ancient alleyways of an eternal spring lakeside town',
    coord: '25.59° N, 100.27° E',
  },
  {
    src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/0ff1ed0f66af454a9fdce90a24c1a762.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070512522596A064C017608FFF568C&rrcfp=755f3169&x-expires=2098587173&x-signature=Yfsc34yCn9x6kM42FDOfyJbXKtU%3D',
    label: 'Xishuangbanna',
    sub: 'Tropical Rainforest Paradise',
    desc: 'Wild Asian elephants, Water Splashing Festival, tropical fruits and Dai cultural immersion',
    coord: '21.42° N, 101.25° E',
  },
  {
    src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/aa0502930f8a4130b0007f755e6610dd.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705130440A07CDAFF087EA5ABAE7C&rrcfp=755f3169&x-expires=2098587904&x-signature=XgVCSyIeV6vfVofyRvsUhWYWaaM%3D',
    label: 'Lijiang',
    sub: 'UNESCO Heritage Naxi Ancient City',
    desc: 'Ancient Naxi kingdom at the foot of Jade Dragon Snow Mountain — Tea Horse Road meets UNESCO World Heritage',
    coord: '26.87° N, 100.23° E',
  },
  {
    src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/cd6f7fff56c74cab87265b72665841f9.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705132755905FE155B62389F45BFC&rrcfp=755f3169&x-expires=2098589302&x-signature=aqCfCyEA6xc4LUbD2K9WEvyPDJU%3D',
    label: "Pu'er",
    sub: "Tea Horse Road & Pu'er Tea",
    desc: "One of the world's tea origins — Wa ethnic villages, ancient tea forests and the birthplace of Pu'er",
    coord: '22.79° N, 100.97° E',
  },
];

const navLinks = [
  { label: 'Destinations', path: '/destinations' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Routes', path: '/routes' },
  { label: 'Travel Info', path: '/info' },
];

const featuredDestinations = [
  {
    name: 'Kunming',
    desc: 'Spring City, Year-Round Bloom',
    image: '/kunming-cover.png',
    tag: 'Gateway to Yunnan',
    detail: {
      title: 'Kunming — Spring City',
      sub: "Yunnan's capital and gateway",
      desc: "Known as the Spring City for its mild climate year-round, Kunming sits at 1,890m elevation and serves as the cultural and economic heart of Yunnan — where ethnic minorities from across the province come together.",
      images: [
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/a6ae045c524b4036884550436d10faf4.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705135518CBF33C35D837909C32F3&rrcfp=755f3169&x-expires=2098590937&x-signature=64aDaXySXGZU380xxXrtanQzarI%3D',
          label: 'Cuihu Park',
          caption: 'An urban oasis in the city centre — four connected lakes bridged by traditional pavilions, a statue of Nie Er (composer of China\'s national anthem), and winter visitors: black-headed gulls migrating from Siberia.',
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/6d3407c661344174b4354cfd2feaef4b.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070514221403B57940EB6200B27059&rrcfp=755f3169&x-expires=2098592547&x-signature=IfaudU2dXRgq2Mf1n7nPa8HcUto%3D',
          label: 'Dianchi Lake',
          caption: "Yunnan's largest lake and the sixth largest freshwater lake in China — spanning 340 km² at 1,886m elevation, known since antiquity as the 'Pearl of the Plateau.'",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/85fd339bb8b349809c4cb00b727aea70.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705135518CBF33C35D837909C32F3&rrcfp=755f3169&x-expires=2098590934&x-signature=GUsTwBzWBKLjTSJA368a1t4WuBI%3D',
          label: 'Stone Forest',
          caption: 'A UNESCO World Heritage Site of limestone karst formations over 270 million years old, 90 km east of Kunming — where legend says the Yi girl Ashima was turned to stone.',
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/08b6d8116330470ead2d3059d9488db6.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705135518CBF33C35D837909C32F3&rrcfp=755f3169&x-expires=2098590938&x-signature=i8R6cS6zVa25fWP7HR2bi6tVGPE%3D',
          label: 'Jiaozi Snow Mountain',
          caption: "Kunming's highest point at 4,330m — the crown of the Eastern Yungui Plateau, rising 2,470m above the surrounding landscape with pristine alpine scenery.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/3d651545bea24f1a97eb0792420d35bb.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705140339CAF4F67210430DAF2198&rrcfp=755f3169&x-expires=2098591441&x-signature=q1ijgcp7zTquFwFxt6Ll%2Br3V5aY%3D',
          label: 'Jinma Biji Gate',
          caption: "Kunming's most iconic traditional archway gate at Jinma Biji Square — one of the three grand squares at the city's heart, a symbol of the old city that has watched Kunming transform for centuries.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/b036565c7fd0460090706f1b7100e1c6.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705140339CAF4F67210430DAF2198&rrcfp=755f3169&x-expires=2098591439&x-signature=zfMysPtcOXVfH1T03yIxeD54E5o%3D',
          label: 'Daguan Tower',
          caption: "Originally laid out by the Kangxi Emperor during the Qing dynasty on the southwestern shore of Dianchi Lake — a historic pavilion tower that has witnessed centuries of Kunming's history.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/c16400b5c603415ba28eb0b4a37fe93b.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705140339CAF4F67210430DAF2198&rrcfp=755f3169&x-expires=2098591438&x-signature=v7%2FDFGRFKWPgw5wtF2inBZ315RA%3D',
          label: 'Guandu Ancient Town',
          caption: 'A thousand-year-old waterfront town in Guandu District — one of Kunming\'s oldest settlements, famed for its traditional architecture, ancient temples, and the beloved local snack Guandu Baba.',
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/a43b0a4a2f64422395cdad2635bf509b.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705140339CAF4F67210430DAF2198&rrcfp=755f3169&x-expires=2098591440&x-signature=sy%2F%2Fxa2aS7eM1JtWmTzwYnDivaY%3D',
          label: 'World Horti-Expo Garden',
          caption: "Built for Expo '99 — a 538-acre site that hosted 69 countries under the theme 'Man and Nature, Marching into the 21st Century,' now a beloved public garden with China's largest greenhouse.",
        },
      ],
    },
  },
  {
    name: 'Dali',
    desc: 'Romance of Cangshan & Erhai',
    image: '/dali-cover.png',
    tag: 'Lake & Culture',
    detail: {
      title: 'Dali — Cangshan & Erhai',
      sub: 'Bai culture on the shores of a highland lake',
      desc: 'Dali sits at 1,972m between the Cangshan Mountains and Erhai Lake — home to the Bai people for over a thousand years, a kingdom twice built and twice lost, now one of Yunnan\'s most beloved cultural destinations.',
      images: [
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/73bfadeab0424fecad9ff8f5552dff8a.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705151329452ED2CE6A1E66AD280E&rrcfp=755f3169&x-expires=2098595630&x-signature=56hGv6hni6DQ%2BTNghzDD%2F9ZzwAg%3D',
          label: 'Three Pagodas of Chongsheng Temple',
          caption: "Three brick pagodas standing for over 1,200 years — the central Qianxun Pagoda soars 69.6m, built in 823–840 CE under the Kingdom of Nanzhao, once the royal temple of two successive kingdoms and a national treasure that survived massive earthquakes.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/a49a1e78b807444d97f310088cd405f4.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705151329452ED2CE6A1E66AD280E&rrcfp=755f3169&x-expires=2098595628&x-signature=0qKYJBVppAAEWZjbkUsb5Ftwgp8%3D',
          label: 'South Gate of Dali Ancient City',
          caption: "The ancient city's main southern entrance — a weathered stone archway where generations of travelers have passed, merchants called, and the frontier between central China and the remote southwest once began.",
        },
        {
          src: 'https://p6-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/f7111edcd4ed467b82bbccfebfcc2585.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705151329452ED2CE6A1E66AD280E&rrcfp=755f3169&x-expires=2098595629&x-signature=3Oyr%2F3lYRV%2Byz9WzlH5QCJf4xa0%3D',
          label: 'Xizhou Bai Houses',
          caption: "Traditional Bai courtyard residences in Xizhou town — known across Yunnan for their exquisite woodcarving and Dali marble, these centuries-old family compounds are living museums of Bai craftsmanship.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/4629aac9025c4931bc982ee5da98585c.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705151329452ED2CE6A1E66AD280E&rrcfp=755f3169&x-expires=2098595631&x-signature=PIoxtHIlOdD5lWnrhnrAwxYhJ%2FM%3D',
          label: 'Shuanglang Waterfront',
          caption: "A quiet lakeside village on Erhai's eastern shore — stone platforms extend over the water, traditional houses line the bank, and at dawn mist rises off the lake as fishing boats head out with cormorants perched on the prows.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/89c0d3ae53144f53aa9ef5a614fb0df7.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=202607051510352523B1FBB87CA3747DE7&rrcfp=755f3169&x-expires=2098595454&x-signature=8EJ5J%2BZbSQymDGJnmU8oZaTfzys%3D',
          label: 'Erhai Lake',
          caption: "Yunnan's second largest highland lake at 1,972m — 250 km² of crystal-clear water surrounded by the Cangshan Mountains, where local Bai fishermen still use trained cormorants to catch fish, a thousand-year-old tradition.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/00c8eb089bda4f5ab721670261605831.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=202607051510352523B1FBB87CA3747DE7&rrcfp=755f3169&x-expires=2098595457&x-signature=vfOq%2Fx1ZBmvsJI1bRiQCkfLfYok%3D',
          label: 'Dali Ancient City',
          caption: "One of Yunnan's most storied old towns — a perfectly preserved grid of cobblestone streets, traditional Bai architecture, and vibrant nightlife tucked between the Cangshan foothills and Erhai Lake.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/4163fc31a7d04397bc98e95db78fa82d.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=202607051510352523B1FBB87CA3747DE7&rrcfp=755f3169&x-expires=2098595455&x-signature=oNRX9xKn%2B1BXJBoCmLkvQg9jAAc%3D',
          label: 'Cangshan Mountain',
          caption: "A dramatic mountain range rising steeply west of the old city — home to stele marking Kublai Khan's historic conquest, mist-shrouded peaks, and trails that have drawn pilgrims and poets for centuries.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/3c89546bf5584c18be0b2643237ee543.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=202607051510352523B1FBB87CA3747DE7&rrcfp=755f3169&x-expires=2098595454&x-signature=SR%2FmfyAvHsAxNgKZQVGYOv6gAWw%3D',
          label: 'Xizhou Countryside',
          caption: "Golden rice terraces and farmland surrounding the historic town of Xizhou — where Bai families have lived for generations amid pomegranate orchards and rapeseed flower fields stretching to the foot of Cangshan.",
        },
      ],
    },
  },
  {
    name: 'Lijiang',
    desc: 'UNESCO Heritage Naxi Kingdom',
    image: '/lijiang-cover.png',
    tag: 'World Heritage',
    detail: {
      title: 'Lijiang — Naxi Kingdom',
      sub: 'Where the Naxi people wrote their own history',
      desc: 'Lijiang sits at 2,400m beneath the shadow of Jade Dragon Snow Mountain — an ancient Naxi kingdom that survived three dynasties of imperial China, now preserved as a UNESCO World Heritage Site and the only prefecture-level city in China with three separate World Heritage designations.',
      images: [
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/02ca43404ba24f75a3d664186cd63166.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705155837A4F87FA51CE4DE0A61D9&rrcfp=755f3169&x-expires=2098598335&x-signature=4Z3PPI6uA%2F9VaDmzt6IBIVZhjtg%3D',
          label: 'Dayan Ancient City',
          caption: "A UNESCO World Heritage Site — a labyrinth of cobblestone alleys, traditional Naxi courtyard houses, and an intricate ancient water-supply system that has sustained daily life in this mountain city for over 800 years.",
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/4bc8626c9832411199ec36fb73a512ba.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705155837A4F87FA51CE4DE0A61D9&rrcfp=755f3169&x-expires=2098598335&x-signature=q9Ts9eqUT6I2pOmreah9viJBaZk%3D',
          label: 'Mufu Palace',
          caption: "The former seat of the Mu family, who ruled the Naxi Kingdom under three successive Chinese dynasties — a sprawling palace complex of halls, gardens and ancestral halls that served as both fortress and throne room for six centuries.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/d5139e4fe76e4697befc664a6141d785.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705155837A4F87FA51CE4DE0A61D9&rrcfp=755f3169&x-expires=2098598336&x-signature=iQDPswzYVOEjCF7eIwxKt2GX4Bk%3D',
          label: 'Jade Dragon Snow Mountain — Blue Moon Valley',
          caption: "The 13 peaks of Yulong Snow Mountain at 5,596m — one of Yunnan's most sacred mountains, its glaciers descending to alpine meadows and the ethereal Blue Moon Valley, fed by meltwater cascades cascading through the landscape.",
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/854d9aa668b74ab68482b28e7d5b5314.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705155837A4F87FA51CE4DE0A61D9&rrcfp=755f3169&x-expires=2098598339&x-signature=hZOHspdHJERV2dqD5TijmYBvF7c%3D',
          label: 'Shuhe — Qinglong Bridge',
          caption: "An ancient Naxi trading town on the Tea Horse Road, older than Lijiang itself — a single stone arch bridge called Qinglong Bridge crosses the Baisha River with the silhouette of Jade Dragon Snow Mountain rising behind it.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/504beed1ed8849659fcca39e872b3a55.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705161448C06DE35C65ACF50B1586&rrcfp=755f3169&x-expires=2098599299&x-signature=ku925Kw0AmfuDjjJmOeQMUWyc8Q%3D',
          label: 'Jade Dragon Snow Mountain',
          caption: "Thirteen peaks of Yulong Snow Mountain at 5,596m — one of Yunnan's most sacred mountains, its glaciers descending to alpine meadows, a living altar of the Naxi people who have climbed its slopes for centuries as a test of devotion.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/4ccf6ce07c6e413fa5c2eafd38df7da6.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=202607051608450561FA9D2F9D02A9A01B&rrcfp=755f3169&x-expires=2098598943&x-signature=IcgnnUgr0O%2FvSLbAS6jmDcEOs7U%3D',
          label: 'Laojun Mountain',
          caption: "A vast geological park of red sandstone pillars and limestone cliffs in the Jinmo River watershed — part of the Hengduan Mountains range, where the land rises and falls in waves of forested ridges and deep ravines.",
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/dfeed681875d4a19b43d3229a1e707d2.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705161002BB628F35C16D4806B784&rrcfp=755f3169&x-expires=2098599020&x-signature=hU9GxMXVkeUBCumFpNniwrPxuXA%3D',
          label: 'Lugu Lake',
          caption: "Yunnan's highest lake at 2,685m, straddling the Yunnan-Sichuan border — sacred to the Mosuo people who call it their 'mother lake,' a matriarchal society where relationships are bonded through 'walking marriages' and ancient Buddhist monasteries line the shore.",
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/2a035b1b11a34e71a1a4dcec05643145.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705161216D28E4463D5ADDAA9FFD4&rrcfp=755f3169&x-expires=2098599159&x-signature=Oe2%2FcgyZfXo1I6EUYHS1apZ%2B%2Fa4%3D',
          label: 'Shuhe — Tea Horse Road',
          caption: "Ancient pack trails that connected Lijiang to Tibet and beyond — the Naxi people built their wealth and culture on this network of mountain paths, trading tea, horses and silk through some of the world's most dramatic high-altitude terrain.",
        },
      ],
    },
  },
  {
    name: "Xishuangbanna",
    desc: 'Tropical Rainforest Paradise',
    image: '/xishuangbanna-cover.png',
    tag: 'Tropical Escape',
    detail: {
      title: 'Xishuangbanna — Tropical Yunnan',
      sub: "China's southernmost frontier, where rainforest meets Dai culture",
      desc: "China's southernmost prefecture sits at the gateway to Southeast Asia — a land of monsoon forests, wild elephants, and the Dai people whose Water-Splashing Festival, ancient Buddhist temples, and stilt houses make this one of Yunnan's most vibrant cultural destinations.",
      images: [
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/37d8d384a96b4625a661990fad9464ac.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705162953D52777283A1DB7BA2E57&rrcfp=755f3169&x-expires=2098600209&x-signature=iNTwh%2B96xvK2iZAM5yFsEfEMpig%3D',
          label: 'Tropical Rainforest',
          caption: "One of China's most biodiverse ecosystems — a living cathedral of towering trees, dripping vines, and rare orchids where wild Asian elephants still roam and the forest canopy filters the monsoon light into a green haze.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/4c891ef649834e3ebe9f2f83ba7978fc.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705162953D52777283A1DB7BA2E57&rrcfp=755f3169&x-expires=2098600211&x-signature=N%2Fj5Etlcwg7VILlMCE8xNLn07PE%3D',
          label: 'Manting Park',
          caption: "The ancient royal garden of the Dai kings in the heart of Jinghong — a thousand-year-old oasis of tropical plants, ornate Dai pavilions and Buddhist shrines where傣族 nobility once came to rest, worship and celebrate the Water-Splashing Festival.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/80747e88a56f49df8bc87b6689d8337c.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705162953D52777283A1DB7BA2E57&rrcfp=755f3169&x-expires=2098600210&x-signature=QylGL36YCdFcEVSs%2BVpoNrQ82Z4%3D',
          label: 'Lancang River at Dusk',
          caption: "The upper Mekong — known as the Lancang in China — flowing wide and golden through Jinghong as the sun drops behind the palms, the river that has carried traders, monks and armies between China and Southeast Asia for two thousand years.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/6deb7a92afe046a5b5db773c0853650a.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705162953D52777283A1DB7BA2E57&rrcfp=755f3169&x-expires=2098600213&x-signature=Lj%2FeJ%2FaV0oIMZIx3RqSU%2FNC4pts%3D',
          label: 'Starlight Night Market',
          caption: "Jinghong's famous riverside night market after dark — hundreds of stalls glowing under lanterns and fairy lights, the air thick with the smell of grilled fish, sticky rice, and tropical fruits as Dai and汉族 vendors call out to the crowds.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/f63c05c8b16a4e5490e8ad381d349ad7.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705163105E49B132D56896E88C1F7&rrcfp=755f3169&x-expires=2098600283&x-signature=svHhq%2F%2F0m3lzmFh4zzcxKygy9lU%3D',
          label: 'Zongfo Temple',
          caption: "The spiritual heart of Dai Buddhism in Xishuangbanna — gilded Buddha statues, carved wooden Monasteries and monks in saffron robes at dawn prayers, where Theravada Buddhist traditions arrived from Sri Lanka over a thousand years ago.",
        },
        {
          src: 'https://p6-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/38fb053ce4c245f3aef017a016073532.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705163105E49B132D56896E88C1F7&rrcfp=755f3169&x-expires=2098600284&x-signature=Jgafkqu8AwccLuVNG3VrF47I29s%3D',
          label: 'Gaozhuang Xishuangbanna',
          caption: "The iconic twin golden pagodas of Gaozhuang — Xishuangbanna's most photographed landmark rising above the modern傣族-style architecture, the point where the old Dai trading town meets the new resort city at the edge of the rainforest.",
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/090548d829514186ab3f2a66b053bb7c.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705163105E49B132D56896E88C1F7&rrcfp=755f3169&x-expires=2098600284&x-signature=nGdaNqJ3SBrKwcL7EVLa%2Fzk0Tng%3D',
          label: 'Dai Village Bamboo House',
          caption: "A traditional Dai stilt house in a living village — raised on bamboo stilts above the flood plain, the ground floor used as a storehouse while family life unfolds above in rooms that have sheltered generations of傣族 families in southern Yunnan's tropical climate.",
        },
      ],
    },
  },
  {
    name: "Pu'er",
    desc: 'Tea Horse Road Origin',
    image: '/puer-cover.png',
    tag: 'Tea Journey',
    detail: {
      title: "Pu'er — Tea Horse Road",
      sub: "Where the world's most storied tea begins its journey",
      desc: "Pu'er sits at the birthplace of tea itself — ancient tea forests that supplied the Tea Horse Road for a thousand years, where Wa, Yi and Dai villages still tend forests planted by their ancestors and the leaves are still pressed into cakes the way they have been for centuries.",
      images: [
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/3dc19d9748954f7ea6683c32dfb2d943.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070516445933FBA1CA244463AF2678&rrcfp=755f3169&x-expires=2098601120&x-signature=WfyRkyVT%2FRB0BcZNTM6teTIjEC8%3D',
          label: 'Tea Temple',
          caption: "A sacred shrine in the tea country — where tea farmers and Wa villagers gather each spring to offer prayers and fermented leaves to the spirits of the forest, a living ritual that connects this land to its ancient tea-producing ancestors.",
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/78e3fe767e1c4f1db61375a310dbe497.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070516445933FBA1CA244463AF2678&rrcfp=755f3169&x-expires=2098601121&x-signature=LFC1ceHz5PDLs2gz9ui0wAFphF0%3D',
          label: 'Tea Mountain',
          caption: "Ancient tea forests blanketing the hillside in mist — tea bushes grown wild among primary forest, some over 500 years old, their roots reaching deep into the red earth of Pu'er's high valleys where the best leaves are still hand-picked at dawn.",
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/e7dbb033fff842e3a35aad99764457db.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070516445933FBA1CA244463AF2678&rrcfp=755f3169&x-expires=2098601120&x-signature=TCL74WGgz75zW806RRedpOLIauU%3D',
          label: 'Ecological Forest',
          caption: "A pristine forest of towering trees andUnderstory tea — where ancient tea cultivation methods survive, nature and agriculture intertwined so completely that the forest floor stays cool and damp even in the dry season.",
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/34a3b58fd22a4ae794b4a28127682b87.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070516475657088D7D7AF51EB17A55&rrcfp=755f3169&x-expires=2098601296&x-signature=IVtfma%2BRAnEXYf%2Fl9zYdA7xPeiA%3D',
          label: 'Jingmai Mountain Ancient Tea Garden',
          caption: "Jingmai — inscribed as a UNESCO World Heritage Site in 2023 for its 1,000-year-old tea culture landscape — terraced hillsides of ancient tea bushes tended by the Blang and Dai peoples, where the same leaf has been picked and pressed into cakes for over thirty generations.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/4f4a4992e2e34fedb26446ca18bcca2e.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070516475657088D7D7AF51EB17A55&rrcfp=755f3169&x-expires=2098601297&x-signature=mLZMic%2B9VSKC8W42kZD8xsfnIcI%3D',
          label: 'Sun River Tropical Rainforest',
          caption: "A hidden valley of tropical rainforest along the Sun River — thick canopy, calls of rare birds, and the river cutting through gorge walls covered in ferns and orchids, a reminder that Pu'er is the greenest and most biodiverse prefecture in Yunnan.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/a34ba0bee7ee4197a69ae696dbf3f391.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070516475657088D7D7AF51EB17A55&rrcfp=755f3169&x-expires=2098601294&x-signature=JzpKSoeujZyaY%2FXTlMZEoSuvIHE%3D',
          label: 'Meizi Lake Reservoir',
          caption: "A serene reservoir surrounded by tea gardens and forested hills — still water reflecting the sky at dawn, mist rising from the surface as villagers in traditional dress gather at the water's edge on festival days.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/7f1da4087a98440a8d20736783c3f83c.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070516475657088D7D7AF51EB17A55&rrcfp=755f3169&x-expires=2098601293&x-signature=lXxQrVjev8xm0UzaRwk3HGByXf4%3D',
          label: 'Border Valley Village',
          caption: "A remote village in the borderlands where Yunnan meets Myanmar and Laos — thatched roof houses perched on the hillside, Wa and Yi families growing tea and rice as they have for centuries in one of China's most remote and beautiful frontier regions.",
        },
      ],
    },
  },
  {
    name: 'Dehong',
    desc: 'Dai Culture & Tropical Frontier',
    image: '/dehong-cover.png',
    tag: 'Borderland',
    detail: {
      title: 'Dehong — Dai & Jingpo Borderland',
      sub: "Yunnan's southwestern gateway to Myanmar and the ancient Tea Horse Road",
      desc: "Dehong lies at Yunnan's southwestern edge where the land drops toward the Indian Ocean — a frontier of Dai and Jingpo villages, ancient Buddhist stupas, tropical river valleys, and the point where the Burma Road once carried the world's supply lines through these steep mountain passes.",
      images: [
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/74b46ff664584b22ae6fdda96b9be4d5.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=202607051719202BB0F5ED1687568F3495&rrcfp=755f3169&x-expires=2098603178&x-signature=9Lxqlng3GA1y0gbLzkte6XauuVY%3D',
          label: 'Golden Stupa',
          caption: "The iconic golden spire of Mangshi rising above the Dai city — a sacred Buddhist monument draped in gold leaf that has anchored the spiritual life of Dehong's Dai community for generations, its silhouette visible across the whole of the芒市 plain.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/13117e2691c5484c922396af8ecb8c10.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=202607051721333DC364B096C3A4B140D5&rrcfp=755f3169&x-expires=2098603308&x-signature=xA9Tml1zoGMdvBI3xAtz8UjAxuo%3D',
          label: 'Silver Stupa',
          caption: "The great silver stupa of Mangshi — a gleaming white and silver Buddhist monument surrounded by carved stone guardians, where monks in saffron robes gather at dawn and the sound of prayer bells carries across the river valley.",
        },
        {
          src: 'https://p11-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/0b2869687c5d4362b0c70a8eb3b185f3.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705172233F0A6D6034471A279891F&rrcfp=755f3169&x-expires=2098603367&x-signature=FtaLayHQGejPXQdPIPgYGP1LtyI%3D',
          label: 'Peacock Lake',
          caption: "A serene lake in the heart of Dehong — named for the peacock, the symbol of this land — where flocks of peacocks descend to drink at dusk and the setting sun turns the water the colour of a peacock's tail feathers.",
        },
        {
          src: 'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/d71491df07ea4581ba50a0ff74517dd5.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=2026070517245555E1C942441D1EB42948&rrcfp=755f3169&x-expires=2098603513&x-signature=aV9jCkjV0yFw48oLkJjxjifbh3M%3D',
          label: 'Tree-wrapped Pagoda',
          caption: "A Buddhist pagoda swallowed whole by a massive banyan tree — where roots and branches have grown around the ancient brick tower for so long that it is impossible to tell where the sacred structure ends and the living tree begins.",
        },
        {
          src: 'https://p26-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/263857781fe04829b7d33b10f9c2d106.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705173049D9280A4E774C46BC0F9F&rrcfp=755f3169&x-expires=2098603867&x-signature=UmT7PygYng1K%2F3McuxERlpIaJ2o%3D',
          label: 'Dai Royal Palace',
          caption: "A grand Dai-style palace complex with sweeping tiered rooftops — built in the tradition of Dai royal architecture with gilded doors, carved wooden beams and open pavilions that once housed the chiefs of the Dai kingdoms that ruled these river valleys.",
        },
        {
          src: 'https://p6-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/e79c09b352f946ae9337153f136b64ef.jpeg~tplv-a9rns2rl98-image_raw_b.png?lk3s=8e244e95&rcl=20260705173049D9280A4E774C46BC0F9F&rrcfp=755f3169&x-expires=2098603867&x-signature=5oVZ0mfi5nxI7Uj%2FWgr9ArxIm84%3D',
          label: 'Bamboo House Architecture',
          caption: "Traditional Dai bamboo houses raised on stilts — the ground floor open for livestock, the living quarters above with woven bamboo walls and leaf-thatched roofs, a building style perfected over centuries to suit Dehong's tropical monsoon climate.",
        },
      ],
    },
  },
];

const whyItems = [
  {
    label: '01',
    title: 'Luxury Niche Expertise',
    desc: "We specialize exclusively in high-end travel experiences across Yunnan — for 12 years running, we've curated journeys for discerning travelers who expect nothing less than exceptional.",
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
  },
  {
    label: '02',
    title: 'Fully Customized Service',
    desc: "Your Yunnan journey, your way. We craft bespoke itineraries tailored to your preferences — concierge-level service from planning to departure, handling every detail so you simply enjoy.",
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
  },
  {
    label: '03',
    title: 'Private & All-Inclusive',
    desc: "No group tours, no hidden fees. Pure privacy, pure experience — travel, dining, culture, luxury stays and private transfers, all seamlessly arranged from start to finish.",
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
  {
    label: '04',
    title: 'Trusted Partner Network',
    desc: "Through our established partnerships with leading travel agencies, hotels and restaurants, we offer you more choices, better rates and verified quality across every leg of your journey.",
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
  },
];

const stats = [
  { value: '12+', label: 'Years Operating' },
  { value: '3,200+', label: 'Happy Travelers' },
  { value: '48', label: 'Local Partners' },
  { value: '100%', label: 'On-ground Team' },
];

const routeImages = [
  { id: 'r1', src: '/2059ccc9d70b5bb61e345f48bbee7849.png', label: 'Kunming', days: '3 Days' },
  { id: 'r2', src: '/3bba932222e875f4cd7955adb1c388ef.png', label: 'Dali', days: '4 Days' },
  { id: 'r3', src: '/6342525698be28539637e789705e11aa.png', label: 'Lijiang', days: '4 Days' },
  { id: 'r4', src: '/a11f03a679bee3e0ce9ce89c9eed11f5.png', label: 'Shangri-La', days: '5 Days' },
  { id: 'r5', src: '/bc6d398f23fad9f207d99e426abbfc92.png', label: "Xishuangbanna", days: '4 Days' },
  { id: 'r6', src: '/c766b6fec4ae2c5396164644bb1ece68.png', label: "Pu'er", days: '4 Days' },
  { id: 'r7', src: '/da632dec72e27f2f4374420f720f4ddd.png', label: 'Dehong', days: '3 Days' },
];

// ── Hotel Partners Section ──
function HotelsSection() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [hotelImgIdx, setHotelImgIdx] = useState(0);

  const openHotel = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setHotelImgIdx(0);
  };

  const prevHotelImg = () =>
    setHotelImgIdx((i) => (i - 1 + 2) % 2);
  const nextHotelImg = () =>
    setHotelImgIdx((i) => (i + 1) % 2);

  return (
    <>
    <section className="py-20 px-6 md:px-12 lg:px-16 border-t border-stone-200/50" style={{ background: '#f7f4ef' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-b8956a/50" />
            <p className="text-b8956a/70 text-[10px] tracking-[0.35em] uppercase font-body font-medium">Partner Hotels</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-b8956a/50" />
          </div>
          <h2 className="font-heading italic text-3xl md:text-4xl text-stone-900">
            Stay at the Best
          </h2>
          <p className="text-stone-400 text-sm font-body mt-3 max-w-md mx-auto">
            We partner with Yunnan's finest hotels — from world-class luxury brands to intimate boutique properties.
          </p>
        </motion.div>

        {/* Hotels by destination */}
        <div className="space-y-14">
          {partnerHotels.map((group, gi) => (
            <motion.div
              key={group.destination}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.6 }}
            >
              {/* Destination label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-stone-200/60 to-transparent" />
                <div className="flex items-center gap-2">
                  <span className="font-heading italic text-lg text-stone-700">{group.destination}</span>
                  <span className="text-stone-400 text-xs font-body">· {group.destinationCn}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-stone-200/60 to-transparent" />
              </div>

              {/* Hotel grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {group.hotels.map((hotel, hi) => (
                  <motion.div
                    key={hotel.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + hi * 0.04, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="group relative rounded-xl px-4 py-3.5 cursor-pointer"
                    onClick={() => openHotel(hotel)}
                    style={{
                      background: 'rgba(252,250,247,0.92)',
                      border: '1px solid rgba(184,149,106,0.14)',
                      boxShadow: '0 1px 3px rgba(140,106,71,0.05), 0 2px 8px rgba(140,106,71,0.04)',
                    }}
                  >
                    {/* Tier badge */}
                    <div className="absolute top-2.5 right-2.5">
                      <span
                        className="text-[8px] tracking-wider uppercase font-body px-1.5 py-0.5 rounded-full"
                        style={{
                          background:
                            hotel.tier === 'Luxury'
                              ? 'rgba(184,149,106,0.18)'
                              : hotel.tier === 'Premium'
                              ? 'rgba(184,149,106,0.10)'
                              : 'rgba(184,149,106,0.06)',
                          color:
                            hotel.tier === 'Luxury'
                              ? '#8c6a47'
                              : hotel.tier === 'Premium'
                              ? '#a08060'
                              : '#b0a090',
                          border: `1px solid rgba(184,149,106,${hotel.tier === 'Luxury' ? 0.3 : hotel.tier === 'Premium' ? 0.2 : 0.12})`,
                        }}
                      >
                        {hotel.tier}
                      </span>
                    </div>

                    {/* Hotel name */}
                    <p className="font-heading italic text-stone-800 text-sm leading-snug pr-12">{hotel.name}</p>
                    <p className="text-stone-400 text-[11px] font-body mt-0.5 leading-relaxed">{hotel.nameCn}</p>

                    {/* Hover accent line */}
                    <div
                      className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(184,149,106,0.5), transparent)',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Hotel Detail Modal */}
    <AnimatePresence>
      {selectedHotel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(20,16,12,0.55)' }}
          onClick={() => setSelectedHotel(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-strong rounded-2xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Image carousel */}
            <div className="relative w-full md:w-1/2 h-56 md:min-h-72 flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hotelImgIdx}
                  src={selectedHotel.images[hotelImgIdx]}
                  alt={selectedHotel.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Carousel arrows */}
              <button
                onClick={prevHotelImg}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white/90 hover:text-white transition-colors"
                style={{ background: 'rgba(20,16,12,0.45)', backdropFilter: 'blur(8px)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button
                onClick={nextHotelImg}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white/90 hover:text-white transition-colors"
                style={{ background: 'rgba(20,16,12,0.45)', backdropFilter: 'blur(8px)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>

              {/* Image counter */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {selectedHotel.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHotelImgIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === hotelImgIdx ? 'w-5 bg-white/90' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Hotel info */}
            <div className="flex-1 flex flex-col p-7 overflow-y-auto">
              {/* Close button */}
              <button
                onClick={() => setSelectedHotel(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-stone-100/60 transition-all"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              {/* Tier badge */}
              <div className="mb-4">
                <span
                  className="text-[9px] tracking-widest uppercase font-body px-2.5 py-1 rounded-full"
                  style={{
                    background: selectedHotel.tier === 'Luxury' ? 'rgba(184,149,106,0.18)' : selectedHotel.tier === 'Premium' ? 'rgba(184,149,106,0.10)' : 'rgba(184,149,106,0.06)',
                    color: selectedHotel.tier === 'Luxury' ? '#8c6a47' : selectedHotel.tier === 'Premium' ? '#a08060' : '#b0a090',
                    border: `1px solid rgba(184,149,106,${selectedHotel.tier === 'Luxury' ? 0.3 : selectedHotel.tier === 'Premium' ? 0.2 : 0.12})`,
                  }}
                >
                  {selectedHotel.tier}
                </span>
              </div>

              {/* Names */}
              <h3 className="font-heading italic text-2xl text-stone-900 leading-tight mb-1">{selectedHotel.name}</h3>
              <p className="text-stone-400 text-sm font-body mb-5">{selectedHotel.nameCn}</p>

              {/* Divider */}
              <div className="h-px w-10 bg-gradient-to-r from-b8956a/50 to-transparent mb-5" />

              {/* Description */}
              <p className="text-stone-500 text-sm leading-relaxed font-body">{selectedHotel.desc}</p>

              <div className="flex-1" />

              {/* CTA */}
              <button className="mt-6 rounded-full px-5 py-2.5 text-xs font-semibold text-stone-700 border border-b8956a/40 hover:bg-b8956a/10 transition-all duration-200 font-body self-start">
                Book This Hotel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [selectedDest, setSelectedDest] = useState<typeof featuredDestinations[0] | null>(null);
  const [detailIdx, setDetailIdx] = useState(0);
  const [routesSpread, setRoutesSpread] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const openDetail = (dest: typeof featuredDestinations[0]) => {
    setSelectedDest(dest);
    setDetailIdx(0);
  };

  const closeDetail = () => setSelectedDest(null);

  const prevDetail = () => setDetailIdx((i) => (i - 1 + (selectedDest?.detail?.images.length ?? 1)) % (selectedDest?.detail?.images.length ?? 1));
  const nextDetail = () => setDetailIdx((i) => (i + 1) % (selectedDest?.detail?.images.length ?? 1));

  return (
    <div>
      {/* ── Top Banner ── */}
      {/* Desktop: full-screen overlay with buttons on top */}
      <div className="hidden md:block relative w-full overflow-hidden" style={{ height: '100svh' }}>
        <img
          src="/hero-banner.png"
          alt=""
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-4 pb-16">
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/routes" className="glass-panel rounded-full px-10 py-4 text-sm font-semibold text-stone-800 flex items-center gap-2 hover:bg-rgba(230,227,222,0.65)/40 transition-all duration-200">
              Explore Routes <ArrowRight size={14} />
            </Link>
            <Link to="/destinations" className="glass-panel rounded-full px-10 py-4 text-sm font-semibold text-stone-700 hover:bg-rgba(230,227,222,0.65)/40 transition-all duration-200">
              View Destinations
            </Link>
            <Link to="/experiences" className="glass-panel rounded-full px-10 py-4 text-sm font-semibold text-stone-700 hover:bg-rgba(230,227,222,0.65)/40 transition-all duration-200">
              Experiences
            </Link>
          </div>
          <p className="text-stone-400 text-xs font-body tracking-wider">Scroll down to discover more</p>
        </div>
      </div>

      {/* Mobile: image fills screen, buttons overlaid at bottom */}
      <div className="md:hidden relative w-full overflow-hidden" style={{ height: '100svh' }}>
        <img
          src="/hero-banner.png"
          alt=""
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block', objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2 pb-10 px-6">
          <div className="flex flex-col items-center gap-2">
            <Link to="/routes" className="rounded-full px-7 py-3 text-xs font-semibold text-stone-800 border-2 border-b8956a flex items-center gap-1.5 hover:bg-amber-50 transition-all duration-200 shadow-md" style={{ background: 'rgba(252,250,247,0.92)' }}>
              Explore Routes <ArrowRight size={11} />
            </Link>
            <Link to="/destinations" className="rounded-full px-7 py-3 text-xs font-semibold text-stone-700 border border-stone-300 hover:bg-amber-50 hover:text-stone-900 transition-all duration-200 shadow-sm" style={{ background: 'rgba(252,250,247,0.92)' }}>
              View Destinations
            </Link>
            <Link to="/experiences" className="rounded-full px-7 py-3 text-xs font-semibold text-stone-700 border border-stone-300 hover:bg-amber-50 hover:text-stone-900 transition-all duration-200 shadow-sm" style={{ background: 'rgba(252,250,247,0.92)' }}>
              Experiences
            </Link>
          </div>
          <p className="text-white/70 text-[9px] font-body tracking-wider mt-1 drop-shadow">Scroll down to discover more ↓</p>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: '100svh', background: '#fafaf8' }}>

        {/* Decorative background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ opacity: 0.03 }}>
          <span className="font-heading text-[22vw] text-stone-900 leading-none tracking-tighter">云</span>
        </div>

        {/* Left: GIF with refined frame */}
        <div className="flex-1 flex items-center justify-center h-full px-4 md:px-12 py-16 md:py-20">
          <div
            className="relative w-full"
            style={{
              padding: '10px',
              background: 'linear-gradient(135deg, rgba(201,164,88,0.4) 0%, rgba(201,164,88,0.1) 50%, rgba(201,164,88,0.4) 100%)',
              borderRadius: '24px',
              boxShadow: '0 20px 80px rgba(140,106,71,0.08), 0 4px 24px rgba(201,164,88,0.15), inset 0 1px 1px rgba(255,255,255,0.6)',
            }}
          >
            {/* Inner dark frame */}
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: '16px', background: '#0a0a0a' }}
            >
              <img
                src={POSTER_BG}
                alt=""
                className="block w-full h-48 md:h-auto md:max-w-full md:max-h-full object-contain"
                style={{ display: 'block', borderRadius: '16px' }}
              />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: 'rgba(201,164,88,0.5)' }} />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-2xl" style={{ borderColor: 'rgba(201,164,88,0.5)' }} />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-2xl" style={{ borderColor: 'rgba(201,164,88,0.5)' }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: 'rgba(201,164,88,0.5)' }} />
            </div>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden lg:flex flex-col items-center justify-center h-full px-4">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-amber-700/20 to-transparent" />
        </div>

        {/* Right: Refined text card */}
        <div className="flex-1 flex items-center justify-center h-full pr-6 md:pr-16 pl-4">
          <div className="max-w-md flex flex-col items-center md:items-start">
            {/* Label tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-gradient-to-r from-amber-700/60 to-amber-700/20" />
              <p className="text-amber-700/70 text-[10px] tracking-[0.3em] uppercase font-body font-medium">Yunnan · China</p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading italic text-5xl md:text-6xl text-stone-900 leading-tight mb-6"
            >
              Discover the<br />
              <span className="text-gradient-gold">Soul of Yunnan</span>
            </motion.h1>

            {/* Gold accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-amber-700/50 via-amber-700/20 to-transparent mb-6 origin-left"
              style={{ maxWidth: 180 }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-stone-400 text-sm leading-relaxed font-body mb-10"
            >
              From the snow-capped peaks of Shangri-La to the tropical forests of Xishuangbanna — 25 ethnic cultures, six climatic zones, one extraordinary journey.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/routes"
                className="rounded-full px-8 py-3.5 text-sm font-semibold text-stone-800 border border-b8956a/45 hover:bg-amber-50/80 transition-all duration-200 flex items-center gap-2 text-center justify-center font-body shadow-sm"
                style={{ boxShadow: '0 2px 12px rgba(201,164,88,0.15)' }}
              >
                Explore Routes
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/destinations"
                className="rounded-full px-8 py-3.5 text-sm font-semibold text-stone-400 hover:text-stone-800 transition-all duration-200 text-center font-body"
              >
                View Destinations
              </Link>
            </motion.div>

            {/* Social icons — inside card, below CTAs */}
            <div className="flex items-center justify-center md:justify-start gap-5 mt-8">
              <a href="#" aria-label="Facebook" className="text-stone-400 hover:text-amber-700 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="X" className="text-stone-400 hover:text-amber-700 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-stone-400 hover:text-amber-700 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-stone-400 hover:text-amber-700 transition-colors">
                <svg width="22" height="16" viewBox="0 0 24 17" fill="currentColor"><path d="M23.495 2.205a3.03 3.03 0 00-2.133-2.147C19.457.453 12 0 12 0S4.543.453 2.638 2.058A3.03 3.03 0 00.505 4.205 31.64 31.64 0 000 8.5c0 1.8.228 3.59.652 5.295a3.03 3.03 0 002.133 2.147C4.543 16.547 12 17 12 17s7.457-.453 9.362-2.058a3.03 3.03 0 002.133-2.147A31.64 31.64 0 0024 8.5a31.64 31.64 0 00-.505-6.295zM9.602 11.851V5.149l6.23 3.351-6.23 3.351z"/></svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="text-stone-400 hover:text-amber-700 transition-colors">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <section className="relative border-y border-stone-200/60 pt-8 pb-2 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-heading italic text-stone-900 mb-1">{s.value}</p>
                <p className="text-stone-400 text-xs tracking-wider uppercase font-body">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Carousel ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'auto', minHeight: 380 }}>
        <div className="relative w-full flex items-center justify-center" style={{ height: 'min(520px, 75vw)' }}>
          {carouselImages.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000 flex items-center justify-center"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              {/* Blurred overflow background */}
              <div
                className="absolute inset-0 transition-opacity duration-1000"
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(60px)',
                  transform: 'scale(1.2)',
                  opacity: i === current ? 0.6 : 0,
                }}
              />
              {/* Main image */}
              <img
                src={img.src}
                alt=""
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000"
                style={{ opacity: i === current ? 1 : 0 }}
              />
              {/* Text overlay */}
              <div className="absolute bottom-14 left-4 md:left-10 z-10">
                <p className="font-heading italic text-3xl md:text-5xl text-stone-100/90 mb-1">{img.label}</p>
                <p className="text-stone-400/50 text-xs md:text-sm font-body tracking-wider mb-2">{img.sub}</p>
                <p className="text-stone-400/40 text-[10px] md:text-xs font-body leading-relaxed mb-0.5 max-w-xs">{img.desc}</p>
              </div>
              {/* Coordinate */}
              <div className="absolute bottom-14 right-4 md:right-10 z-10 text-right">
                <p className="text-stone-400/30 text-xs font-body tracking-widest font-mono">{img.coord}</p>
              </div>
            </div>
          ))}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-stone-50 w-6' : 'bg-stone-50/40'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Destinations ── */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-rgba(240,237,232,0.55)">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-stone-400 text-xs tracking-[0.3em] uppercase font-body mb-3">Curated Journeys</p>
            <h2 className="font-heading italic text-3xl md:text-4xl text-stone-900">Featured Destinations</h2>
          </motion.div>

          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {featuredDestinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => dest.detail && openDetail(dest)}
                className={`group flex flex-row md:flex-col rounded-2xl overflow-hidden border border-stone-200/80 cursor-pointer ${dest.detail ? '' : 'opacity-50 pointer-events-none'}`}
                style={{ background: 'rgba(252,250,247,0.95)' }}
              >
                {/* Image — landscape on mobile, portrait on desktop */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ width: 140, height: 105 }}>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag */}
                  <div className="absolute top-2 left-2">
                    <span className="text-[8px] tracking-wider uppercase font-body text-stone-700 border border-stone-300/60 rounded-full px-2 py-0.5 backdrop-blur-sm bg-stone-50/80">
                      {dest.tag}
                    </span>
                  </div>
                </div>
                {/* Text beside image on mobile, below image on desktop */}
                <div className="flex-1 flex flex-col justify-center p-4">
                  <div>
                    <h3 className="font-heading italic text-base md:text-xl text-stone-900 mb-1">{dest.name}</h3>
                    <p className="text-stone-400 text-[11px] md:text-xs font-body leading-relaxed">{dest.desc}</p>
                  </div>
                  {dest.detail && (
                    <button className="inline-flex items-center gap-1 mt-2 md:mt-3 text-stone-400 hover:text-stone-700 text-[10px] md:text-xs font-body transition-colors">
                      Explore <ArrowRight size={9} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destination Detail Modal ── */}
      <AnimatePresence>
        {selectedDest && selectedDest.detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(28,25,23,0.80)', backdropFilter: 'blur(8px)' }}
            onClick={closeDetail}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel-strong rounded-3xl w-full max-w-4xl overflow-hidden relative"
              style={{ background: 'rgba(252,250,247,0.96)', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeDetail}
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-stone-50/20 backdrop-blur-sm hover:bg-stone-50/40 transition-colors"
              >
                <X size={16} className="text-stone-700" />
              </button>

              {/* Image carousel */}
              <div className="relative" style={{ height: 'min(420px, 55vw)' }}>
                {selectedDest.detail.images.map((img, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: i === detailIdx ? 1 : 0 }}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Nav arrows */}
                <button
                  onClick={prevDetail}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-50/20 backdrop-blur-sm flex items-center justify-center hover:bg-stone-50/40 transition-colors"
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
                <button
                  onClick={nextDetail}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-50/20 backdrop-blur-sm flex items-center justify-center hover:bg-stone-50/40 transition-colors"
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {selectedDest.detail.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setDetailIdx(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${i === detailIdx ? 'bg-stone-50 w-5' : 'bg-stone-50/50'}`}
                    />
                  ))}
                </div>
                {/* Label + caption overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-heading italic text-2xl text-white mb-1">{selectedDest.detail.images[detailIdx].label}</p>
                  <p className="text-stone-200/70 text-sm font-body leading-relaxed max-w-xl">{selectedDest.detail.images[detailIdx].caption}</p>
                </div>
              </div>

              {/* Description */}
              <div className="p-8">
                <p className="text-stone-600 text-sm font-body leading-relaxed">{selectedDest.detail.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Routes Fan Section ── */}
      <section className="py-20 px-6 md:px-12 lg:px-16 border-t border-stone-200/60" style={{ background: '#fafaf8' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-stone-400 text-xs tracking-[0.3em] uppercase font-body mb-3">Curated Itineraries</p>
            <h2 className="font-heading italic text-3xl md:text-4xl text-stone-900">
              Routes Unfold Like a Fan
            </h2>
          </motion.div>

          {/* Fan container */}
          {/* Mobile: always-show-all horizontal scroll | Desktop: fan with perspective */}
          <div className="relative overflow-x-auto pb-4">
            {/* Mobile scroll row (always visible, no fan) */}
            <div className="flex md:hidden items-end gap-2 px-1 overflow-x-auto snap-x snap-mandatory">
              {routeImages.map((img) => (
                <div
                  key={img.id}
                  className="flex-shrink-0 snap-start"
                  style={{ width: 110 }}
                >
                  <div
                    className="relative rounded-xl overflow-hidden shadow-md"
                    style={{ height: 160 }}
                  >
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="font-heading italic text-xs text-white text-center">{img.label}</p>
                      <p className="text-white/60 text-[9px] font-body text-center">{img.days}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop fan (hidden on mobile) */}
            <div
              className="hidden md:flex items-end justify-center gap-0 mx-auto"
              style={{
                height: routesSpread ? 520 : 340,
                transformStyle: 'preserve-3d',
                width: routesSpread ? 1100 : 900,
                perspective: '1200px',
              }}
            >
              {routeImages.map((img, i) => {
                const maxAngle = 68;
                const angleStep = maxAngle / ((routeImages.length - 1) / 2);
                const rawAngle = (i - (routeImages.length - 1) / 2) * angleStep;
                const rot = routesSpread ? rawAngle : 0;
                const ty = routesSpread ? Math.abs(rawAngle) * 1.6 : 0;

                return (
                  <motion.div
                    key={img.id}
                    className="relative cursor-pointer group"
                    initial={false}
                    animate={{
                      rotate: rot,
                      y: ty,
                      zIndex: routeImages.length - Math.abs(i - 3),
                    }}
                    transition={{
                      duration: 0.6,
                      delay: routesSpread ? i * 0.04 : (routeImages.length - 1 - i) * 0.04,
                      ease: [0.34, 1.2, 0.64, 1],
                    }}
                    style={{
                      transformOrigin: 'bottom center',
                      width: routesSpread ? 140 : 160,
                      height: routesSpread ? 420 : 320,
                      flexShrink: 0,
                    }}
                  >
                    {/* Image */}
                    <div
                      className="relative w-full h-full rounded-xl overflow-hidden shadow-lg transition-shadow duration-500 group-hover:shadow-2xl"
                      style={{
                        boxShadow: routesSpread
                          ? `0 20px 60px rgba(140,106,71,0.14), 0 8px 24px rgba(140,106,71,0.10)`
                          : `0 4px 20px rgba(140,106,71,0.08)`,
                      }}
                    >
                      <img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                      {/* Label — visible when spread */}
                      <div
                        className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-500"
                        style={{
                          opacity: routesSpread ? 1 : 0,
                          transform: routesSpread ? 'translateY(0)' : 'translateY(8px)',
                        }}
                      >
                        <p className="font-heading italic text-sm text-white text-center leading-tight">
                          {img.label}
                        </p>
                        <p className="text-white/60 text-[10px] font-body text-center mt-0.5 tracking-wider">
                          {img.days}
                        </p>
                      </div>
                    </div>

                    {/* Center connector line */}
                    {i === 3 && (
                      <div
                        className="absolute -bottom-6 left-1/2 w-0.5 bg-gradient-to-b from-amber-700/60 to-transparent transition-all duration-700"
                        style={{ height: routesSpread ? 40 : 0 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Fan ribs decorative lines (desktop only) */}
            <svg
              className="hidden md:block absolute inset-0 w-full pointer-events-none transition-opacity duration-700"
              style={{ opacity: routesSpread ? 0.15 : 0 }}
              viewBox="0 0 1000 520"
              preserveAspectRatio="xMidYMax slice"
            >
              {routeImages.map((_, i) => {
                const cx = 500;
                const cy = 520;
                const maxAngle = 68;
                const angleStep = maxAngle / ((routeImages.length - 1) / 2);
                const angle = -90 + (i - (routeImages.length - 1) / 2) * angleStep;
                const rad = (angle * Math.PI) / 180;
                const x2 = cx + Math.cos(rad) * 520;
                const y2 = cy + Math.sin(rad) * 520;
                return (
                  <line
                    key={i}
                    x1={cx} y1={cy} x2={x2} y2={y2}
                    stroke="#8B7355"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>

            {/* Bottom pivot disc (desktop only) */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 rounded-full border-2 border-amber-700/30 transition-all duration-700"
              style={{
                bottom: -12,
                width: routesSpread ? 40 : 20,
                height: routesSpread ? 40 : 20,
                background: 'radial-gradient(circle, rgba(201,164,88,0.3) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Toggle + label */}
          <div className="flex flex-col items-center mt-12 gap-4">
            <button
              onClick={() => setRoutesSpread(!routesSpread)}
              className="flex items-center gap-3 text-sm font-body text-stone-400 hover:text-stone-800 transition-colors duration-200 group"
            >
              <span className="text-xs tracking-wider uppercase">{routesSpread ? 'Close' : 'Open'} the fan</span>
              <div className="w-8 h-px bg-stone-300 group-hover:bg-rgba(240,237,232,0.55)0 transition-colors duration-200" />
              <div
                className="w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center transition-all duration-300 group-hover:border-rgba(240,237,232,0.55)0 group-hover:scale-110"
                style={{ transform: routesSpread ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <ArrowRight size={10} className="text-stone-400" />
              </div>
            </button>
            <p className="text-stone-400 text-xs font-body tracking-wide">
              {routesSpread ? '7 curated routes · click each to explore' : 'Click to reveal all routes'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Hotel Partners ── */}
      <HotelsSection />

      {/* ── Folk Culture ── */}
      <section className="py-20 px-6 md:px-12 lg:px-16 border-t border-stone-200/50" style={{ background: 'rgba(240,237,232,0.50)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-b8956a/40" />
              <p className="text-b8956a/70 text-[10px] tracking-[0.35em] uppercase font-body font-medium">Cultural Heritage</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-b8956a/40" />
            </div>
            <h2 className="font-heading italic text-3xl md:text-4xl text-stone-900">
              Living Traditions
            </h2>
            <p className="text-stone-400 text-sm font-body mt-3 max-w-lg mx-auto">
              Twenty-five ethnic groups share Yunnan. Each brings irreplaceable rituals, crafts, and festivals — a living cultural fabric woven across every valley.
            </p>
          </motion.div>

          {/* Culture grid — cards with images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                en: 'Naxi Dongba',
                cn: '纳西东巴',
                desc: 'The only living hieroglyphic script in the world — 1,000+ glyphs used by Dongba priests for sacred rituals and manuscripts.',
                img: 'https://images.unsplash.com/photo-1752161669985-b8b1124ee6e8?w=600&q=80',
                large: true,
              },
              {
                en: 'Bai Tie-Dye',
                cn: '白族扎染',
                desc: 'Hand-stitched wax-resist dyeing with geometric patterns — each piece takes weeks, each pattern carries meaning.',
                img: 'https://images.unsplash.com/photo-1778084356053-40103587d24f?w=600&q=80',
                large: false,
              },
              {
                en: 'Yi Fire Dance',
                cn: '彝族火把节',
                desc: 'An annual festival of torches, song and dance under the stars — the Yi people\'s most sacred celebration of harvest and unity.',
                img: 'https://images.unsplash.com/photo-1769430784590-de8888004ddc?w=600&q=80',
                large: false,
              },
              {
                en: 'Dai Water Splashing',
                cn: '傣族泼水节',
                desc: 'The Tai people\'s New Year celebration — water as blessing, temples filled with flowers, and streets alive with傣族 music.',
                img: 'https://images.unsplash.com/photo-1544509807-aabbcf9c5cba?w=600&q=80',
                large: true,
              },
              {
                en: 'Miao Silverwork',
                cn: '苗族银饰',
                desc: 'Hammered silver crowns and necklaces worn for festivals — each piece weighs up to 15kg and represents a clan\'s wealth and lineage.',
                img: 'https://images.unsplash.com/photo-1743384257004-5acb9ee8c50a?w=600&q=80',
                large: false,
              },
              {
                en: 'Tea Horse Road',
                cn: '茶马古道',
                desc: 'A 2,000-year-old trade network of mountain trails where Yunnan tea travelled west and Tibetan horses came east.',
                img: 'https://images.unsplash.com/photo-1741790974577-c9a5c52653c5?w=600&q=80',
                large: false,
              },
            ].map((item, i) => (
              <motion.div
                key={item.en}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{
                  background: 'rgba(252,250,247,0.95)',
                  border: '1px solid rgba(184,149,106,0.14)',
                  gridColumn: item.large ? 'span 2' : 'span 1',
                  boxShadow: '0 1px 3px rgba(140,106,71,0.05), 0 2px 8px rgba(140,106,71,0.04)',
                }}
              >
                {/* Image */}
                <div style={{ height: item.large ? 200 : 150 }} className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.en}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Content */}
                <div className="relative p-4">
                  <div className="mb-0.5">
                    <span className="font-heading italic text-stone-800 text-sm leading-snug">{item.en}</span>
                    <span className="ml-2 text-stone-400 text-[10px] font-body">{item.cn}</span>
                  </div>
                  <p className="text-stone-400 text-[10px] font-body leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(184,149,106,0.6), transparent)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local Cuisine ── */}
      <section className="py-20 px-6 md:px-12 lg:px-16 border-t border-stone-200/50" style={{ background: '#f7f4ef' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-b8956a/40" />
              <p className="text-b8956a/70 text-[10px] tracking-[0.35em] uppercase font-body font-medium">Local Cuisine</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-b8956a/40" />
            </div>
            <h2 className="font-heading italic text-3xl md:text-4xl text-stone-900">
              Taste of Yunnan
            </h2>
            <p className="text-stone-400 text-sm font-body mt-3 max-w-lg mx-auto">
              From forest fungi to fermented barrels, Yunnan cuisine is China's most adventurous — wild, fragrant, and unlike anything else on earth.
            </p>
          </motion.div>

          {/* Cuisine list — rows with images */}
          <div className="space-y-3 max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto px-2 sm:px-0">
            {[
              {
                en: 'Crossing-Bridge Noodles',
                cn: '过桥米线',
                desc: 'Kunming\'s iconic dish — scalding broth poured over raw ingredients at the table, cooking eggs, meat and noodles in an instant.',
                img: 'https://images.unsplash.com/photo-1631709497146-a239ef373cf1?w=200&q=80',
              },
              {
                en: 'Yunnan Ham',
                cn: '宣威火腿',
                desc: 'Cured for up to three years, ruby-red and fragrant — Yunnan ham is among China\'s three great hams, sliced paper-thin for banquets.',
                img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80',
              },
              {
                en: 'Wild Mushroom Hotpot',
                cn: '野生菌火锅',
                desc: 'Summer rains bring dozens of species from Yunnan\'s forests — matsutake, morel, chanterelle — served in a clear broth that tastes of the mountain floor.',
                img: 'https://images.unsplash.com/photo-1600995616615-52152934de1d?w=200&q=80',
              },
              {
                en: 'Bai Three-Course Tea',
                cn: '白族三道茶',
                desc: 'Dali\'s ceremonial tea — bitter first, sweet second, long-lasting third — symbolising the journey from hardship through sweetness to enduring peace.',
                img: 'https://images.unsplash.com/photo-1532136868905-8094ef8ef5f2?w=200&q=80',
              },
              {
                en: 'Pu\'er Tea',
                cn: '普洱茶',
                desc: 'Fermented for decades in Yunnan\'s subtropical climate — earthy, deep, and said to aid longevity. Pressed into cakes that improve with age like fine wine.',
                img: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=200&q=80',
              },
              {
                en: 'Ethnic Barbecue',
                cn: '民族烧烤',
                desc: 'Every minority group grills differently — Dai style with lemongrass and chilli, Yi skewers over charcoal pits, Miao with wild herb marinades.',
                img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=200&q=80',
              },
              {
                en: 'Flower Cuisine',
                cn: '花卉美食',
                desc: 'Yunnan eats what other provinces only admire — rose petal jam, chrysanthemum hotpot, jasmine fried rice, and magnolia stir-fried greens.',
                img: 'https://images.unsplash.com/photo-1774806266956-dda4457a9b91?w=200&q=80',
              },
              {
                en: 'Tropical Fruits',
                cn: '热带水果',
                desc: 'Xishuangbanna\'s orchards produce mango, durian, passion fruit and dragon eye — served ripe from the tree, a world away from supermarket versions.',
                img: 'https://images.unsplash.com/photo-1732472581875-89ff83f18439?w=200&q=80',
              },
            ].map((item, i) => (
              <motion.div
                key={item.en}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group flex items-start gap-4 rounded-xl px-4 py-3 cursor-default"
                style={{
                  background: 'rgba(252,250,247,0.92)',
                  border: '1px solid rgba(184,149,106,0.12)',
                }}
              >
                {/* Image thumbnail */}
                <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden">
                  <img src={item.img} alt={item.en} className="w-full h-full object-cover" />
                </div>
                {/* Number */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                  style={{
                    background: 'rgba(184,149,106,0.10)',
                    border: '1px solid rgba(184,149,106,0.18)',
                  }}
                >
                  <span className="text-b8956a/70 text-[9px] font-body font-medium">{String(i + 1).padStart(2, '0')}</span>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="mb-0.5">
                    <span className="font-heading italic text-stone-800 text-sm">{item.en}</span>
                    <span className="ml-2 text-stone-400 text-[11px] font-body">{item.cn}</span>
                  </div>
                  <p className="text-stone-400 text-[11px] font-body leading-relaxed">{item.desc}</p>
                </div>
                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center">
                  <ArrowRight size={12} className="text-b8956a/50" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-6 md:px-12 lg:px-16 border-t border-stone-200/60" style={{ background: 'rgba(240,237,232,0.55)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-stone-400 text-xs tracking-[0.3em] uppercase font-body mb-3">Why Choose Us</p>
            <h2 className="font-heading italic text-3xl md:text-4xl text-stone-900">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="flex flex-col gap-8">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 rounded-3xl overflow-hidden border border-stone-200/60 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ background: 'rgba(252,250,247,0.95)' }}
              >
                {/* Image */}
                <div className="w-full md:w-1/2" style={{ height: 320 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                  <p className="text-stone-300 text-6xl font-heading italic mb-3">{item.label}</p>
                  <h3 className="font-heading italic text-2xl text-stone-900 mb-4">{item.title}</h3>
                  <p className="text-stone-400 text-sm font-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-24 px-6 md:px-12 lg:px-16 text-center border-t border-stone-200/60"
        style={{ background: 'linear-gradient(135deg, #f5f1eb 0%, #e8e4dc 100%)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading italic text-3xl md:text-5xl text-stone-900 mb-4">
            Ready to explore Yunnan?
          </h2>
          <p className="text-stone-400 text-sm font-body mb-8 max-w-md mx-auto">
            Every journey starts with a single conversation. Tell us your travel style — we'll design the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/routes"
              className="rounded-full px-8 py-3.5 text-sm font-semibold text-stone-800 border border-stone-400/60 backdrop-blur-sm hover:bg-rgba(230,227,222,0.65)/60 transition-all duration-200 flex items-center gap-2"
            >
              View Routes
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/info"
              className="rounded-full px-8 py-3.5 text-sm font-semibold text-stone-400 hover:text-stone-800 transition-all duration-200"
            >
              Travel Guide
            </Link>
          </div>
        </motion.div>
      </section>


      {/* ── Footer ── */}
      <footer
        className="px-6 md:px-12 lg:px-16 py-10 border-t border-stone-200/60 bg-rgba(230,227,222,0.65)"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading italic text-stone-800 text-lg">云山岚</p>
            <p className="text-stone-400 text-xs font-body mt-1">Curated journeys since 2024 · hello@yunshanlan.com</p>
          </div>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-stone-400 hover:text-stone-700 text-xs font-body transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
