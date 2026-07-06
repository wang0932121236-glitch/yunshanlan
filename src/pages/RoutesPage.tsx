import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { routes } from '../data/destinations';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function RoutesPage() {
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
        <p className="text-gray-40 text-xs tracking-[0.3em] uppercase mb-3 font-body">Curated Routes</p>
        <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-5">
          Choose your<br />
          <span className="text-gray-50">depth of journey.</span>
        </h1>
        <p className="text-gray-40 text-base md:text-lg max-w-xl leading-relaxed font-body">
          Each route is designed by people who have walked these trails. Not itinerary checklists — carefully paced sequences of places and experiences.
        </p>
      </motion.div>

      {/* Route cards */}
      <div className="space-y-6">
        {routes.map((route, i) => (
          <motion.div
            key={route.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-stone-10 hover:border-b8956a/30 transition-all duration-300"
            style={{ background: 'rgba(252,250,247,0.95)' }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Left: info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="font-heading italic text-2xl md:text-3xl font-bold text-stone-900">{route.name}</h2>
                    <span className="flex items-center gap-1 text-gray-40 text-sm font-body">
                      <Calendar size={13} />
                      {route.days} days
                    </span>
                  </div>
                  <p className="text-gray-40 italic text-sm mb-4 font-body">{route.tagline}</p>
                  <p className="text-gray-40 text-sm leading-relaxed mb-6 max-w-lg font-body">{route.description}</p>

                  {/* Stops */}
                  <div className="mb-6">
                    <p className="text-stone-300 text-[10px] tracking-[0.2em] uppercase mb-3 font-body">Route</p>
                    <div className="flex flex-wrap gap-2">
                      {route.stops.map((stop) => (
                        <span key={stop} className="flex items-center gap-1 text-xs text-gray-50 bg-stone-5 px-3 py-1 rounded-full border border-stone-10 font-body">
                          <MapPin size={10} className="text-stone-400" />
                          {stop}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best for */}
                  <div>
                    <p className="text-stone-300 text-[10px] tracking-[0.2em] uppercase mb-2 font-body">Best for</p>
                    <div className="flex flex-wrap gap-2">
                      {route.bestFor.map((tag) => (
                        <span key={tag} className="text-xs text-gray-50 border border-stone-10 px-2 py-0.5 rounded font-body">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: price + CTA */}
                <div className="md:w-48 flex md:flex-col items-center md:items-end gap-4">
                  <p className="text-stone-400 text-xs tracking-wider font-body">{route.price} / person</p>
                  <button className="rounded-full px-6 py-2.5 text-sm font-semibold text-stone-900 border border-stone-25 backdrop-blur-sm hover:bg-stone-10 transition-all duration-200 flex items-center justify-center gap-2 font-body">
                    Enquire Now
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className={`h-0.5 w-full ${
              i === 0 ? 'bg-gradient-to-r from-blue-400/50 via-blue-400/20 to-transparent' :
              i === 1 ? 'bg-gradient-to-r from-white/30 via-white/10 to-transparent' :
              'bg-gradient-to-r from-white/30 via-white/10 to-transparent'
            }`} />
          </motion.div>
        ))}
      </div>

      {/* Private journey note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-16 p-8 rounded-2xl border border-dashed border-stone-20 text-center"
        style={{ background: 'rgba(252,250,247,0.6)' }}
      >
        <h3 className="font-heading italic text-xl text-stone-900 mb-2">Private &amp; Custom Itineraries</h3>
        <p className="text-gray-40 text-sm mb-5 max-w-md mx-auto font-body">
          Every journey here can be redesigned around your timeline, interests, and travel style. Our team crafts individual itineraries for solo travellers, couples, and small groups.
        </p>
        <button className="rounded-full px-8 py-3 text-sm font-semibold text-stone-900 border border-stone-25 backdrop-blur-sm hover:bg-stone-10 transition-all duration-200 font-body">
          Speak to a Travel Designer
        </button>
      </motion.div>
    </main>
  );
}
