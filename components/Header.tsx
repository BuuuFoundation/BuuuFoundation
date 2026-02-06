
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NGO_NAME, LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Initiatives', path: '/activities' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                <img 
                  src={LOGO_URL} 
                  alt={NGO_NAME} 
                  className="h-full w-full object-contain p-1" 
                  onError={(e) => {
                    // Fallback to a styled text or hidden if image really missing
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-slate-800 leading-none">{NGO_NAME}</span>
                <span className="text-[10px] text-rose-600 font-bold tracking-widest uppercase">For a Good Change</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-rose-600 ${
                  isActive(link.path) ? 'text-rose-600' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-rose-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-rose-700 transition-all shadow-md active:scale-95"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-xl text-base font-bold uppercase tracking-wider ${
                  isActive(link.path) ? 'bg-rose-50 text-rose-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-6 bg-rose-600 text-white px-3 py-4 rounded-xl text-base font-bold uppercase tracking-widest"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
