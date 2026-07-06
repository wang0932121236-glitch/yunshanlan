export interface Hotel {
  name: string;
  nameCn: string;
  tier: 'Luxury' | 'Premium' | 'Boutique';
  desc: string;
  images: [string, string];
}

export interface HotelGroup {
  destination: string;
  destinationCn: string;
  hotels: Hotel[];
}

export const partnerHotels: HotelGroup[] = [
  {
    destination: 'Kunming',
    destinationCn: '昆明',
    hotels: [
      {
        name: 'InterContinental Kunming',
        nameCn: '洲际',
        tier: 'Luxury',
        desc: "A landmark of modern Kunming overlooking Dianchi Lake — spacious rooms with panoramic water views, a world-class spa, and three acclaimed restaurants serving Yunnan and international cuisine.",
        images: [
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
        ],
      },
      {
        name: 'Grand Hyatt Kunming',
        nameCn: '君悦',
        tier: 'Luxury',
        desc: "Rising above the city's commercial centre, Grand Hyatt Kunming blends contemporary elegance with Yunnan's ethnic heritage — rooftop bar with sunset views, award-winning dining, and seamless luxury service.",
        images: [
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
        ],
      },
      {
        name: 'Shangri-La Kunming',
        nameCn: '香格里拉',
        tier: 'Luxury',
        desc: "Inspired by the mythical utopia, this hotel embodies warmth and Tibetan-inspired grandeur — oversized rooms, signature Shangri-La hospitality, and unobstructed views of Kunming's skyline.",
        images: [
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
        ],
      },
      {
        name: 'Sofitel Kunming',
        nameCn: '索菲特',
        tier: 'Premium',
        desc: "French elegance meets Yunnan warmth at Sofitel — art-deco inspired interiors, a celebrated wine cellar, and the brand's signature blend of contemporary luxury with local cultural touches.",
        images: [
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
        ],
      },
      {
        name: 'Bailian Hotel',
        nameCn: '柏联',
        tier: 'Premium',
        desc: "A refined boutique hotel by the acclaimed Bai Lian group — minimalist Chinese aesthetics, lush garden setting, and some of the finest Yunnan tea experiences in the city.",
        images: [
          'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
          'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
        ],
      },
      {
        name: 'Songtsam Linka Kunming',
        nameCn: '松赞林卡',
        tier: 'Boutique',
        desc: "An intimate Tibetan-style retreat in the city — handcrafted wood interiors, Sherpa-inspired decor, and the same soulful hospitality that makes Songtsam's mountain properties legendary.",
        images: [
          'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        ],
      },
      {
        name: 'Anshen KCamili',
        nameCn: '安舍凯米里',
        tier: 'Boutique',
        desc: "A design-driven boutique hotel with a quiet cult following — Japanese-scandinavian interiors, a curated art collection, and an atmosphere of cultivated stillness rare in the city centre.",
        images: [
          'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&q=80',
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
        ],
      },
      {
        name: 'Crowne Plaza Kunming',
        nameCn: '皇冠假日',
        tier: 'Premium',
        desc: "A trusted international brand in Kunming's business core — comfortable rooms, efficient service, and a central location that puts the city's best dining and culture within easy reach.",
        images: [
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        ],
      },
      {
        name: 'Sheraton Kunming',
        nameCn: '喜来登',
        tier: 'Premium',
        desc: "Marriott's signature comfort in central Kunming — generous rooms, a well-regarded buffet, and the reliable Sheraton service that makes every traveller feel at home in China's southwest.",
        images: [
          'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
        ],
      },
      {
        name: 'R&F Wanda Vista Kunming',
        nameCn: '富力万达文华',
        tier: 'Premium',
        desc: "Chinese luxury at its most refined — artfully appointed rooms with Yunnan-inspired decor, multiple dining venues, and the kind of attentive, unhurried service that defines five-star Chinese hospitality.",
        images: [
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
        ],
      },
      {
        name: 'Dianchi Songpin',
        nameCn: '滇池宋品',
        tier: 'Boutique',
        desc: "A lakeside boutique property with genuine Yunnan character — traditional architecture, serene garden courtyards, and a sense of old Kunming charm preserved in the heart of the modern city.",
        images: [
          'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
          'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
        ],
      },
    ],
  },
  {
    destination: 'Dali',
    destinationCn: '大理',
    hotels: [
      {
        name: 'The EDITION Dali',
        nameCn: '艾迪逊',
        tier: 'Luxury',
        desc: "Marriott's most design-forward brand arrives in Dali with quiet confidence — a curated retreat where minimalist architecture meets Erhai's endless horizon, private cinema, and an intimate rooftop bar.",
        images: [
          'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        ],
      },
      {
        name: 'Pullman Dali Resort',
        nameCn: '铂尔曼',
        tier: 'Premium',
        desc: "A contemporary resort at the foot of Cangshan and facing Erhai — expansive gardens, family-friendly facilities, and the kind of open, airy spaces that make Yunnan feel made for leisure.",
        images: [
          'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
        ],
      },
      {
        name: 'Hotel Indigo Dali',
        nameCn: '英迪格',
        tier: 'Premium',
        desc: "IHG's boutique brand fully embracing Dali's Bai culture — handwoven textiles in every room, local art on the walls, and a design language that tells the story of this ancient lakeside town.",
        images: [
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
        ],
      },
      {
        name: 'Shili Hilton Dali',
        nameCn: '实力希尔顿',
        tier: 'Premium',
        desc: "Dali's tallest landmark with commanding views of both mountain and lake — modern comfort with a touch of local Bai craft, an excellent breakfast spread, and a convenient proximity to the ancient city.",
        images: [
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        ],
      },
      {
        name: 'Mingyue Songjian',
        nameCn: '明月松间',
        tier: 'Boutique',
        desc: "A poetic boutique hotel named after the moon over Erhai — twelve rooms only, each a meditation on stillness, with floor-to-ceiling lake views and a library of Yunnan literature curated by local scholars.",
        images: [
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
          'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
        ],
      },
      {
        name: 'Hilton Garden Inn Dali',
        nameCn: '希尔顿花园',
        tier: 'Premium',
        desc: "Reliable Hilton comfort in the shadow of the ancient city — clean contemporary rooms, a pleasant courtyard setting, and the practical luxury of an international brand with local knowledge.",
        images: [
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
        ],
      },
      {
        name: 'Sheraton Dali',
        nameCn: '喜来登',
        tier: 'Premium',
        desc: "Sheraton's Yunnan outpost near the ancient city walls — comfortable rooms with mountain views, a well-run business centre, and the consistency of a global brand in one of China's most romantic cities.",
        images: [
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
          'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
        ],
      },
      {
        name: 'Yuewan Seaview Villa',
        nameCn: '悦湾',
        tier: 'Boutique',
        desc: "An intimate villa property on Erhai's eastern shore — each suite opens to the lake, morning mists drift through the windows, and the pace of life slows to match the rhythm of the water.",
        images: [
          'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
          'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
        ],
      },
      {
        name: 'Villa Semi-Mountain Sea View',
        nameCn: 'VILLA半山海景',
        tier: 'Boutique',
        desc: "A boutique clifftop villa with the best panoramic view of Erhai in the region — romantic sunsets, stone terraces overlooking the lake, and the feeling of being suspended between mountain and sea.",
        images: [
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
          'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
        ],
      },
      {
        name: 'Songyun Cliff Resort',
        nameCn: '松云悬崖',
        tier: 'Luxury',
        desc: "Dali's most dramatic luxury address — built into the cliffs above Shuanglang village, each room a private pavilion with unobstructed Erhai views and a pool that seems to spill into the lake.",
        images: [
          'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        ],
      },
    ],
  },
  {
    destination: 'Lijiang',
    destinationCn: '丽江',
    hotels: [
      {
        name: 'Wuyulan Hotel',
        nameCn: '物与岚',
        tier: 'Boutique',
        desc: "A design-led boutique hotel where contemporary art meets Naxi heritage — each room is a gallery, the courtyard is a living sculpture garden, and the staff feel like old friends who happen to live in a masterpiece.",
        images: [
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
        ],
      },
      {
        name: 'Aman Dayan Lijiang',
        nameCn: '大研安缦',
        tier: 'Luxury',
        desc: "Aman at their most romantic — a 19th-century Naxi compound lovingly restored, where ancient courtyards, murmuring streams, and Jade Dragon Snow Mountain as backdrop create the world's most evocative luxury hotel.",
        images: [
          'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        ],
      },
      {
        name: 'Lishman Hotel',
        nameCn: '丽思漫',
        tier: 'Boutique',
        desc: "A boutique hideaway in the quiet lanes of the old town — traditional Naxi architecture with modern warmth, a peaceful garden, and the kind of personal attention that makes guests extend their stay indefinitely.",
        images: [
          'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
          'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
        ],
      },
      {
        name: 'Jijian Xiangwang',
        nameCn: '既见象罔',
        tier: 'Boutique',
        desc: "A poetic boutique in Lijiang's old town — the name means 'already seen, now forgotten' — twelve rooms with courtyard views, a roof terrace facing the mountain, and evenings that belong entirely to quiet.",
        images: [
          'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&q=80',
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        ],
      },
      {
        name: 'Banyan Tree Lijiang',
        nameCn: '悦榕庄',
        tier: 'Luxury',
        desc: "Banyan Tree's Yunnan masterpiece at the foot of Mt. Fanjing — private villas with garden or mountain views, a world-class spa drawing on Tibetan healing traditions, and impeccable service that anticipates every need.",
        images: [
          'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        ],
      },
      {
        name: 'InterContinental Lijiang',
        nameCn: '和府洲际',
        tier: 'Premium',
        desc: "A grand resort blending Chinese imperial grandeur with Naxi character — spacious grounds, multiple dining options, and the kind of polished, confident service that defines the InterContinental brand.",
        images: [
          'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
        ],
      },
      {
        name: 'Hotel Indigo Lijiang',
        nameCn: '英迪格',
        tier: 'Premium',
        desc: "IHG's boutique brand fully immersed in Naxi culture — handcrafted Naxi ornaments, local artwork in every room, and a design that tells the story of the ancient Tea Horse Road from within the old town walls.",
        images: [
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
        ],
      },
      {
        name: 'Jinmao Hyatt Lijiang',
        nameCn: '金茂凯悦',
        tier: 'Premium',
        desc: "Hyatt's elegant presence in the old town — refined rooms with mountain views, an award-winning spa, and a location that puts the ancient city's lantern-lit streets within easy walking distance.",
        images: [
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
        ],
      },
      {
        name: 'Club Med Lijiang',
        nameCn: 'Club Med 丽江度假村',
        tier: 'Premium',
        desc: "A family resort like no other in Yunnan's mountains — all-inclusive comfort, the famous Club Med GOs keeping children entertained, and the natural grandeur of Jade Dragon Snow Mountain as daily backdrop.",
        images: [
          'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        ],
      },
      {
        name: 'Jinmao Puxiu Lijiang',
        nameCn: '金茂璞修',
        tier: 'Luxury',
        desc: "The premier luxury address at Jade Dragon Snow Mountain's base — private observation decks for star-gazing, Tibetan-inspired spa, and a sense of being held by the mountain in complete silence.",
        images: [
          'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        ],
      },
      {
        name: 'Jinlin Wyndham Villa',
        nameCn: '金林温德姆别墅',
        tier: 'Premium',
        desc: "Private villa living in Lijiang's northern suburbs — spacious family suites with garden views, the quiet of a residential neighbourhood, and the reliability of an international brand in comfortable surroundings.",
        images: [
          'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
        ],
      },
      {
        name: 'Jingxi Hilton Lijiang',
        nameCn: '晶玺希尔顿',
        tier: 'Premium',
        desc: "Hilton's refined address near the ancient city — contemporary rooms with mountain panoramas, an excellent breakfast showcasing Yunnan's diversity, and the quiet confidence of a world-class brand in a magical setting.",
        images: [
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        ],
      },
    ],
  },
  {
    destination: 'Shangri-La',
    destinationCn: '香格里拉',
    hotels: [
      {
        name: 'Banyan Tree Shangri-La',
        nameCn: '悦榕庄',
        tier: 'Luxury',
        desc: "Banyan Tree at the edge of the Tibetan plateau — private villas with Himalayan views, a spa drawing on ancient Tibetan healing rituals, and the rare feeling of being genuinely at the roof of the world.",
        images: [
          'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        ],
      },
      {
        name: 'Shangri-La Grand Hotel',
        nameCn: '香格里拉大酒店',
        tier: 'Premium',
        desc: "The landmark hotel of the region — Tibetan-inspired architecture, a central location near the ancient town, and the comfortable confidence of a property that understands this extraordinary landscape.",
        images: [
          'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
        ],
      },
      {
        name: 'Moonlight City Hotel Indigo',
        nameCn: '月光城英迪格',
        tier: 'Premium',
        desc: "Hotel Indigo in the ancient Tibetan town — each room a portrait of local culture, a rooftop terrace overlooking the old city, and the brand's signature ability to make every guest feel they've arrived somewhere truly special.",
        images: [
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
        ],
      },
      {
        name: 'Songtsam Linka Shangri-La',
        nameCn: '松赞林卡',
        tier: 'Boutique',
        desc: "The crown jewel of Yunnan's boutique hotel scene — a Tibetan monastery-inspired property where monks bless each new guest, hand-carved woodwork fills every corner, and the surrounding meadows feel sacred.",
        images: [
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
          'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80',
        ],
      },
    ],
  },
];
