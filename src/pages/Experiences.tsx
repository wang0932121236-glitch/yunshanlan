import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/destinations';

const icons: Record<string, string> = {
  tea: '🍃',
  textile: '🧵',
  monastery: '🙏',
  market: '🛒',
  trek: '🥾',
  food: '🍜',
};

export default function Experiences() {
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
        <p className="text-gray-40 text-xs tracking-[0.3em] uppercase mb-3 font-body">Experiences</p>
        <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-5">
          Live it,<br />
          <span className="text-gray-50">don't just see it.</span>
        </h1>
        <p className="text-gray-40 text-base md:text-lg max-w-xl leading-relaxed font-body">
          Yunnan reveals itself through doing — pressing tea, weaving cloth, walking prayer trails. Every experience here is a doorway into a living culture.
        </p>
      </motion.div>

      {/* Experience cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
            className="group rounded-2xl p-7 border border-stone-10 hover:border-b8956a/35 transition-all duration-300"
            style={{ background: 'rgba(252,250,247,0.95)', backdropFilter: 'blur(4px)' }}
          >
            {/* Icon + duration */}
            <div className="flex items-start justify-between mb-5">
              <span className="text-3xl" role="img" aria-label={exp.title}>
                {icons[exp.id] ?? '✨'}
              </span>
              <span className="text-gray-40 text-[10px] tracking-wider uppercase border border-stone-15 px-2 py-0.5 rounded-full font-body">
                {exp.duration}
              </span>
            </div>

            <h3 className="text-stone-900 font-semibold text-lg mb-1 font-body">{exp.title}</h3>
            <p className="text-gray-40 text-sm italic mb-4 font-body">{exp.subtitle}</p>
            <p className="text-gray-40 text-sm leading-relaxed font-body">{exp.description}</p>

            {/* Decorative bottom line */}
            <div className="mt-6 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent group-hover:from-white/40 group-hover:via-white/10 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-40 text-sm mb-5 font-body">Custom experiences are our specialty — tell us what moves you.</p>
        <button className="rounded-full px-8 py-3.5 text-sm font-semibold text-stone-900 border border-stone-25 backdrop-blur-sm hover:bg-stone-10 transition-all duration-200">
          Request a Custom Journey
        </button>
      </motion.div>
    </main>
  );
}
