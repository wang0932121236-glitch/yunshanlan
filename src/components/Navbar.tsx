import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoUrl from '/yunshanlan.png';

const navLinks = [
  { label: 'Destinations', path: '/destinations' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Routes', path: '/routes' },
  { label: 'Travel Info', path: '/info' },
];

const travelSubtitle = 'Yunnan — China\'s most desirable destination. Experience eternal spring, spiritual renewal, and the world\'s temperate and tropical natural landscapes. Immerse in diverse ethnic cultures and savor unique cuisine.';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6">
      <div
        className="glass-panel rounded-2xl px-6 py-3.5 flex items-center justify-between max-w-full"
        style={{ background: 'rgba(252, 250, 247, 0.82)' }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoUrl}
            alt="云山岚"
            className="h-14 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-col items-center gap-0.5">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm tracking-wide transition-all duration-200 font-body rounded-full ${
                  location.pathname === link.path
                    ? 'text-stone-900 bg-stone-200/50'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-stone-400/70 text-[9px] tracking-wide leading-relaxed text-center max-w-md font-body">
            {travelSubtitle}
          </p>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="rounded-full px-5 py-2 text-sm font-semibold text-stone-700 flex items-center gap-2 border border-b8956a/40 backdrop-blur-sm hover:bg-stone-100/60 transition-all duration-200">
            Plan Your Trip
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-600 hover:text-stone-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden mt-3 rounded-2xl px-5 py-4 flex flex-col gap-1 border border-stone-200/60 backdrop-blur-md max-h-[70vh] overflow-y-auto"
          style={{ background: 'rgba(252, 250, 247, 0.88)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-2.5 text-sm tracking-wide rounded-lg ${
                location.pathname === link.path
                  ? 'text-stone-900 bg-stone-200/50'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-stone-700 mt-2 w-full flex items-center justify-center gap-2 border border-b8956a/40 backdrop-blur-sm hover:bg-stone-100/60 transition-all duration-200">
            Plan Your Trip
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
}
