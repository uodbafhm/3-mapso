
import React from 'react';
import { motion } from 'framer-motion';
import { DOCTOR_NAME, CLINIC_NAME, WORKING_HOURS } from '../constants';
import { ShieldCheck, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
          >
            {/* Dr Picture Decoration */}
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-[40px] opacity-50 -z-10 animate-pulse" />
            <div className="w-full h-full rounded-full border-[12px] border-white shadow-2xl overflow-hidden ring-1 ring-slate-100">
               <img 
                 src="https://images.pexels.com/photos/6812559/pexels-photo-6812559.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt={DOCTOR_NAME}
                 className="w-full h-full object-cover object-[25%_center]"
               />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <span className="block text-3xl font-black text-blue-600 mb-1">+15</span>
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">سنة خبرة</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8"
          >
            <div>
              <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">تعرف على طبيبك</span>
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">
                {DOCTOR_NAME}
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
              نحن نؤمن بأن العناية بالأسنان يجب أن تكون تجربة مريحة وإيجابية. في {CLINIC_NAME}، نجمع بين الخبرة الطبية الطويلة وأحدث التكنولوجيا لنقدم لك أفضل النتائج.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
               <div className="flex items-start gap-4">
                 <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><ShieldCheck /></div>
                 <div>
                   <h4 className="font-black text-slate-900">أحدث التقنيات</h4>
                   <p className="text-sm text-slate-500 font-medium">نستخدم أجهزة التصوير ثلاثي الأبعاد والليزر.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl"><Users /></div>
                 <div>
                   <h4 className="font-black text-slate-900">رعاية شخصية</h4>
                   <p className="text-sm text-slate-500 font-medium">خطة علاج مفصلة لكل مريض حسب حالته.</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Working Hours Section */}
        <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-50">
          <h2 className="text-3xl font-black mb-12 text-center">أوقات العمل</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Object.values(WORKING_HOURS).map((h, i) => (
              <div key={i} className={`p-6 rounded-3xl border ${h.isClosed ? 'bg-slate-50 border-slate-100 opacity-50' : 'bg-white border-blue-50 shadow-sm shadow-blue-50/50'}`}>
                <span className="block text-slate-400 font-black text-xs uppercase tracking-widest mb-2">{h.day}</span>
                <span className={`text-xl font-black ${h.isClosed ? 'text-rose-500' : 'text-slate-900'}`}>
                  {h.isClosed ? 'مغلق' : `${h.open} - ${h.close}`}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
