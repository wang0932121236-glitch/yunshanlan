import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import { MapPin, Mountain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Destinations() {
  const [selected, setSelected] = useState(destinations[0]);

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
        <p className="text-gray-40 text-xs tracking-[0.3em] uppercase mb-3 font-body">Destinations</p>
        <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-5">
          Six landscapes.<br />
          <span className="text-gray-60">Twenty-five peoples.</span>
        </h1>
        <p className="text-gray-40 text-base md:text-lg max-w-xl leading-relaxed font-body">
          Yunnan sits at the crossroads of Southeast Asia and the Tibetan plateau — a province of extraordinary diversity where every valley tells a different story.
        </p>
      </motion.div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Destination list */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-2 space-y-3"
        >
          {destinations.map((d, i) => (
            <motion.button
              key={d.id}
              onClick={() => setSelected(d)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                selected.id === d.id
                  ? 'bg-stone-10 border-stone-25'
                  : 'bg-stone-5 border-stone-10 hover:bg-stone-10 hover:border-b8956a/30'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-stone-900 font-semibold text-lg font-body">{d.name}</h3>
                  <p className="text-gray-40 text-xs mt-0.5">{d.subtitle}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  selected.id === d.id ? 'border-stone-30 text-gray-70' : 'border-stone-10 text-gray-40'
                }`}>
                  {d.region}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Detail panel */}
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <div className="rounded-2xl overflow-hidden border border-stone-10" style={{ background: 'rgba(252,250,247,0.95)' }}>
            <div
              className="h-64 md:h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${selected.image})` }}
            />
            <div className="p-7">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="font-heading italic text-3xl font-bold text-stone-900">{selected.name}</h2>
                <span className="text-gray-40 italic text-sm font-body">{selected.subtitle}</span>
              </div>

              <p className="text-gray-50 leading-relaxed mb-6 font-body text-sm">{selected.description}</p>

              <div className="flex items-center gap-6 mb-6 text-gray-50 text-sm font-body">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  <span>{selected.region}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mountain size={13} />
                  <span>Altitude {selected.altitude}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full border border-stone-15 text-gray-60 font-body">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/experiences`}
                className="inline-flex items-center gap-2 text-sm text-gray-60 hover:text-stone-900 transition-colors duration-200 font-body"
              >
                Explore experiences in {selected.name}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
