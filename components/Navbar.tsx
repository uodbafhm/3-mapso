
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone } from 'lucide-react';
import StatusIndicator from './StatusIndicator';
import { CLINIC_NAME, PHONE_NUMBER } from '../constants';
import MagneticButton from './MagneticButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'احجز موعداً', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const showLightText = !isScrolled && isHomePage;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 p-4 md:p-8 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-6 py-4 rounded-[2rem] ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-white/50' 
          : isHomePage ? 'bg-transparent' : 'bg-white shadow-sm border border-slate-100'
      }`}>
        
        {/* Logo/Name Area */}
        <Link to="/" className="flex items-center gap-4 group">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${showLightText ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500`}
          >
            {CLINIC_NAME}
          </motion.span>
          <div className="hidden sm:block group-hover:scale-110 transition-transform duration-500">
            <StatusIndicator />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`relative text-sm font-bold transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'text-blue-500' 
                    : showLightText ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                } hover:-translate-y-0.5`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="underline-nav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          <div className={`w-px h-4 transition-colors duration-500 ${showLightText ? 'bg-white/20' : 'bg-slate-200'}`} />

          <MagneticButton>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-500 hover:scale-105 shadow-sm ${
                showLightText ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
              }`}
            >
              <Phone size={14} />
              اتصال سريع
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(true)}
          className={`md:hidden p-4 rounded-2xl transition-all duration-500 ${
            showLightText ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
          }`}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[110] p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
               <span className="text-2xl font-black">{CLINIC_NAME}</span>
               <button onClick={() => setIsOpen(false)} className="p-4 bg-slate-100 rounded-full"><X size={28} /></button>
            </div>
            
            <div className="flex flex-col gap-10 flex-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-black text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-10 border-t border-slate-100">
               <p className="text-slate-400 font-bold mb-4">تواصل معنا مباشرة</p>
               <a href={`tel:${PHONE_NUMBER}`} className="text-3xl font-black text-blue-600">{PHONE_NUMBER}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
