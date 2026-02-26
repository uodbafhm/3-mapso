
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, CheckCircle2, Award, Zap, Camera, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, REVIEWS, MAPS_URL, WHATSAPP_NUMBER } from '../constants';

const Home: React.FC = () => {
  const metrics = [
    { icon: <Award className="text-blue-600" />, label: 'سنوات خبرة', value: '+15' },
    { icon: <CheckCircle2 className="text-emerald-600" />, label: 'حالة ناجحة', value: '+5000' },
    { icon: <Zap className="text-amber-600" />, label: 'تقنية حديثة', value: '4K' },
  ];

  return (
    <div className="overflow-hidden bg-white">
      <Hero />

      {/* Metrics Section */}
      <section className="py-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-12 bg-slate-900 rounded-[3rem] shadow-2xl">
              {metrics.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4">
                   <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                     {React.cloneElement(m.icon as React.ReactElement, { size: 32 })}
                   </div>
                   <span className="text-5xl font-black text-white">{m.value}</span>
                   <span className="text-slate-400 font-bold tracking-widest uppercase text-xs">{m.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">تخصصاتنا</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8">عالم من الابتكار <br /> في رعاية الأسنان</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">من التجميل الرقمي إلى الجراحات المعقدة، نوفر لك كل ما تحتاجه في مكان واحد وبأعلى معايير الجودة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Smile Transformation Section (Visual Placeholder) */}
      <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(59,130,246,1)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs font-black mb-6">
                <Camera size={14} />
                تحويل الابتسامة
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">شاهد الفرق <br /> بنفسك</h2>
            </div>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              نستخدم محاكاة الابتسامة الرقمية (DSD) لنريك النتيجة النهائية قبل أن نبدأ العلاج. دقة لا تضاهى ورضا تام عن النتائج.
            </p>
            <div className="flex flex-col gap-6">
               {['تبييض ليزر فوري', 'قشور خزفية فائقة الدقة', 'زراعة بدون ألم'].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-xl font-black text-slate-900">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                       <CheckCircle2 size={18} />
                    </div>
                    {item}
                 </div>
               ))}
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white group"
            >
              <img 
                src="https://media.istockphoto.com/id/1037081016/photo/womans-teeth-before-and-after-whitening.jpg?b=1&s=612x612&w=0&k=20&c=Vq5NMtHAGEhMSi8qSlqyV-IFC3Acy7cYhNS4RJjjYqQ=" 
                className="w-full h-full object-cover" 
                alt="Smile Transformation" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                <span className="text-sm font-black uppercase tracking-widest mb-2 opacity-70">بعد الجلسة الأولى</span>
                <h4 className="text-3xl font-black">ابتسامة هوليود الرقمية</h4>
              </div>
            </motion.div>
            
            {/* Aesthetic Floatings */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-3xl shadow-2xl flex items-center justify-center rotate-12 p-6 text-center border border-slate-50">
               <div>
                  <Sparkles size={32} className="text-blue-500 mx-auto mb-2" />
                  <span className="block text-xs font-black uppercase tracking-widest text-slate-400">النتيجة</span>
                  <span className="text-xl font-black text-slate-900">طبيعية 100%</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews - Reused but Styled */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6">ثقة متبادلة</h2>
            <div className="flex items-center justify-center gap-2">
               {[...Array(5)].map((_, i) => <Star key={i} fill="#3b82f6" stroke="#3b82f6" size={24} />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-blue-600 hover:text-white transition-all duration-500 group"
              >
                <p className="text-xl italic font-medium mb-10 leading-relaxed group-hover:text-blue-50">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-black text-blue-600 group-hover:bg-white/20 group-hover:text-white">
                    {review.user[0]}
                  </div>
                  <div>
                    <span className="block font-black text-lg">{review.user}</span>
                    <span className="text-xs font-bold opacity-50">{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
