
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img 
          src="https://images.pexels.com/photos/3946835/pexels-photo-3946835.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          className="w-full h-full object-cover opacity-40 block"
          alt="Clinic Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/80 pointer-events-none" />
      </div>

      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-[5%] w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none z-0"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-40 left-[10%] w-[30rem] h-[30rem] bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest mb-10 shadow-2xl border border-white/20"
        >
          <Sparkles size={16} className="text-blue-400" />
          معايير عالمية في طب الأسنان
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-12 tracking-tighter"
        >
          ابتسامتك <br />
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            أثر لا يُنسى
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-3xl text-slate-200 max-w-3xl mx-auto mb-16 font-medium leading-relaxed"
        >
          نحن لا نعالج الأسنان فقط، بل نصمم الثقة والجمال بأحدث التقنيات الرقمية المتاحة عالمياً.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <MagneticButton>
            <Link 
              to="/contact" 
              className="px-14 py-7 bg-blue-600 text-white rounded-[2rem] font-black text-xl shadow-[0_20px_50px_rgba(59,130,246,0.4)] block transition-transform hover:scale-105 active:scale-95"
            >
              ابدأ رحلتك الآن
            </Link>
          </MagneticButton>
          
          <a 
            href="#services" 
            className="text-lg font-black text-white flex items-center gap-3 group"
          >
            اكتشف خدماتنا
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
               <ChevronDown size={20} />
            </div>
          </a>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">اسحب للأسفل</span>
        <div className="w-px h-16 bg-gradient-to-b from-slate-200 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
