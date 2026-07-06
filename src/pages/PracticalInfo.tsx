import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, CreditCard, Smartphone, Shield, HeartPulse, ChevronDown } from 'lucide-react';

const sections = [
  {
    id: 'getting-there',
    icon: <Plane size={18} strokeWidth={1.5} />,
    title: 'Getting There',
    items: [
      { label: 'By Air', desc: 'Kunming Changshui International (KMG) is Yunnan\'s main hub with direct flights from Beijing, Shanghai, Guangzhou, Chengdu, and Hong Kong. International connections via Bangkok, Singapore, and Kuala Lumpur.' },
      { label: 'Getting Around', desc: 'High-speed rail network connects Kunming to Dali (2h), Lijiang (3h). Domestic flights to Shangri-La and Xishuangbanna. Private car with driver recommended for remote areas.' },
      { label: 'Best Season', desc: 'March–May for flowers and mild temperatures; September–November for autumn colours and clear skies. Avoid Chinese national holidays (Golden Week early October) for fewer crowds.' },
    ],
  },
  {
    id: 'visa',
    icon: <Shield size={18} strokeWidth={1.5} />,
    title: 'Visa & Entry',
    items: [
      { label: 'Visa Requirements', desc: 'Most nationalities require a tourist visa (L) for China. Available on arrival at major airports for 54 countries (verify current list). Transit visas available for 72-hour stays in Kunming.' },
      { label: 'Documents Needed', desc: 'Passport (6+ months validity), visa application form, passport photo, round-trip flight confirmation, hotel reservations for first night. Application takes 4–5 business days at Chinese embassies.' },
      { label: 'Registration', desc: 'All foreign visitors must register with local police within 24 hours of arrival if staying in hotels. Hotels handle this automatically. For private stays, your host must register on your behalf.' },
    ],
  },
  {
    id: 'money',
    icon: <CreditCard size={18} strokeWidth={1.5} />,
    title: 'Money & Payments',
    items: [
      { label: 'Cash', desc: 'Chinese Yuan (CNY / ¥). Cash is essential in rural Yunnan — ATMs are sparse outside cities. Exchange currency at KMG airport or Bank of China branches. Carry ¥200–500 in cash for small towns.' },
      { label: 'Cards', desc: 'WeChat Pay and Alipay dominate urban China. International cards (Visa/MasterCard) work at major hotels and upscale restaurants. Do not rely on cards in Shangri-La\'s mountain villages or Lijiang\'s old town markets.' },
      { label: 'Budget Guide', desc: 'Budget: ¥400–700/day (hostels, local food, public transport). Mid-range: ¥800–1,500/day (comfortable hotels, restaurant meals, entry fees). Luxury: ¥2,500+/day (boutique hotels, private guides).' },
    ],
  },
  {
    id: 'health',
    icon: <HeartPulse size={18} strokeWidth={1.5} />,
    title: 'Health & Safety',
    items: [
      { label: 'Altitude', desc: 'Shangri-La sits at 3,400m. Allow 2–3 days to acclimatise. Symptoms of altitude sickness (headache, nausea) are common — rest, hydrate, and descend if severe. Tiger Leaping Gorge involves steep descents to 1,800m.' },
      { label: 'Medical', desc: 'Kunming has modern hospitals with English-speaking staff. Travel insurance with medical evacuation coverage is strongly recommended. Bring personal medications as pharmacy selection in rural areas is limited.' },
      { label: 'Food & Water', desc: 'Tap water is not potable. Bottled water widely available. Yunnan cuisine is generally safe — watch for undercooked meat in remote villages. High-altitude spirits (baijiu) hit harder than at sea level.' },
    ],
  },
  {
    id: 'tips',
    icon: <Smartphone size={18} strokeWidth={1.5} />,
    title: 'Travel Tips',
    items: [
      { label: 'Language', desc: 'Mandarin is official; local languages (Naxi, Bai, Yi, Tibetan dialects) are spoken in ethnic areas. Download Pleco dictionary app for characters. Learn: nǐ hǎo (hello), xièxiè (thanks), duōshao qián (how much).' },
      { label: 'Connectivity', desc: 'SIM cards from China Mobile/China Unicom available at KMG airport (¥100 for 30GB data). WeChat is essential for everything — payments, communication, ride-hailing (Didi). Get a SIM, download WeChat before leaving the airport.' },
      { label: 'Packing', desc: 'Layers are essential — Yunnan\'s mountain climate swings 15°C between day and night. Bring: rain jacket, sun hat, sturdy walking shoes, hand sanitiser, wet wipes, and a power adapter (Type I / A).' },
    ],
  },
];

function AccordionSection({ section, defaultOpen = false }: { section: typeof sections[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-stone-10 overflow-hidden" style={{ background: 'rgba(252,250,247,0.95)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-stone-5 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <span className="text-gray-40">{section.icon}</span>
          <h2 className="font-heading italic text-lg text-stone-900">{section.title}</h2>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-stone-400"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 space-y-4">
          {section.items.map((item) => (
            <div key={item.label} className="border-l border-stone-15 pl-4">
              <h3 className="text-gray-70 font-body font-medium text-sm mb-1">{item.label}</h3>
              <p className="text-stone-500 font-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function PracticalInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20 px-6 md:px-12 lg:px-16 min-h-screen" style={{ background: '#fafaf8' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mb-16"
      >
        <p className="text-gray-40 text-xs tracking-[0.3em] uppercase mb-3 font-body">Travel Info</p>
        <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-5">
          Practical knowledge<br />
          <span className="text-gray-40">for the journey.</span>
        </h1>
        <p className="text-gray-40 text-base md:text-lg max-w-xl leading-relaxed font-body">
          Information gathered from years of on-the-ground travel in Yunnan. Updated seasonally. No generic China advice — only what works in these specific mountains and valleys.
        </p>
      </motion.div>

      {/* Sections accordion */}
      <div className="space-y-4 max-w-3xl">
        {sections.map((section, si) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * si }}
          >
            <AccordionSection section={section} defaultOpen={si === 0} />
          </motion.div>
        ))}
      </div>

      {/* Contact strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 rounded-2xl p-8 border border-stone-10 flex flex-col md:flex-row items-center gap-6 max-w-3xl"
        style={{ background: 'rgba(252,250,247,0.95)' }}
      >
        <div className="flex-1">
          <h3 className="font-heading italic text-xl text-stone-900 mb-1">Still have questions?</h3>
          <p className="text-stone-500 text-sm font-body">Our travel designers are based in Kunming and can answer anything — from visa logistics to which village has the best views.</p>
        </div>
        <button className="rounded-full px-8 py-3 text-sm font-semibold text-stone-900 border border-stone-25 backdrop-blur-sm hover:bg-stone-10 transition-all duration-200 whitespace-nowrap font-body">
          hello@yunshanlan.com
        </button>
      </motion.div>
    </main>
  );
}
