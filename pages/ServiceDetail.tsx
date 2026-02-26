
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Pause, ArrowRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!service) return <Navigate to="/" />;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const features = [
    "استقرار طويل الأمد",
    "الوقاية من العدوى",
    "طرق ترميم حديثة",
    "الحفاظ على هيكل الفك"
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 bg-blue-600 text-white selection:bg-blue-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Back Link */}
        <Link to="/" className="mb-12 inline-flex items-center gap-2 text-blue-200 transition-colors hover:text-white group">
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          <span className="font-bold">العودة للرئيسية</span>
        </Link>

        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-300">خدماتنا التخصصية</span>
              <h1 className="text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
                {service.title}
              </h1>
            </div>

            <p className="max-w-xl text-xl text-blue-100/80 leading-relaxed font-medium">
              {service.description}
            </p>

            {/* Features Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-2xl border border-blue-400/30 bg-blue-900/20 p-5 backdrop-blur-sm group hover:bg-blue-900/40 transition-colors"
                >
                  <CheckCircle2 className="text-blue-300 flex-shrink-0" size={24} />
                  <span className="text-lg font-bold">{f}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="text-3xl font-black">جاهز للبدء؟</h3>
              <Link to="/contact" className="inline-block rounded-[2rem] bg-white px-10 py-5 text-xl font-black text-blue-600 shadow-2xl transition-all hover:scale-105 active:scale-95">
                احجز استشارة الآن
              </Link>
            </div>
          </motion.div>

          {/* Right Media Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex-1"
          >
            {service.videoUrl ? (
                <div 
                  className="relative aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl ring-8 ring-white/10 group cursor-pointer lg:aspect-[3/4]"
                  onClick={togglePlay}
                >
                  <video 
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    playsInline
                    loop
                    muted={!isPlaying}
                  >
                    <source src={service.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/30 backdrop-blur-2xl border border-white/40 group-hover:scale-110 transition-transform">
                      {isPlaying ? <Pause size={40} fill="white" /> : <Play size={40} fill="white" className="mr-1" />}
                    </div>
                  </div>

                  {/* Video UI Elements */}
                  <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none">
                     <div className="h-2 w-full bg-white/20 rounded-full mb-4 overflow-hidden">
                        <motion.div 
                          className="h-full bg-white" 
                          animate={{ width: isPlaying ? "100%" : "20%" }}
                          transition={{ duration: 16, repeat: Infinity }}
                        />
                     </div>
                     <div className="flex justify-between items-center text-xs font-black text-white/70 tracking-widest uppercase">
                       <span>عرض تقديمي</span>
                       <span>دقة عالية 4K</span>
                     </div>
                  </div>
                </div>
            ) : (
                <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl ring-8 ring-white/10">
                    <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
                </div>
            )}
            
            {/* Background Decorations */}
            <div className="absolute -z-10 -top-20 -right-20 h-80 w-80 rounded-full bg-blue-300 blur-[100px] opacity-20"></div>
            <div className="absolute -z-10 -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-400 blur-[100px] opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
