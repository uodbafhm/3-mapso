
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageSquare, MapPin, Check } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, MAPS_URL, ADDRESS } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">احجز موعداً</span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">ابدأ رحلتك نحو <br /> ابتسامة أجمل</h1>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* Form Section - Now Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-blue-100 border border-slate-50 space-y-8 relative">
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white/95 z-20 rounded-[3rem] flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl font-black mb-4">تم إرسال طلبك!</h3>
                  <p className="text-slate-500 font-bold">سيتواصل معك فريقنا في أقرب وقت ممكن لتأكيد الموعد.</p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 mr-2">الاسم الكامل</label>
                  <input required type="text" className="w-full px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-lg" placeholder="أحمد محمد" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 mr-2">رقم الهاتف</label>
                  <input required type="tel" className="w-full px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-lg" placeholder="9xxxxxxx" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-slate-900 mr-2">الخدمة المطلوبة</label>
                <select className="w-full px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-bold appearance-none text-lg">
                  <option>تبييض أسنان</option>
                  <option>زراعة أسنان</option>
                  <option>تقويم أسنان</option>
                  <option>تنظيف وجير</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-slate-900 mr-2">رسالة إضافية</label>
                <textarea rows={4} className="w-full px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-lg" placeholder="أخبرنا بالمزيد عن حالتك..."></textarea>
              </div>

              <button type="submit" className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 transition-all hover:bg-blue-700 active:scale-95 shadow-xl shadow-blue-200">
                إرسال الطلب
                <Send size={24} />
              </button>
            </form>
          </motion.div>

          {/* Info & Map Section - Now Full Width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <a href={`tel:${PHONE_NUMBER}`} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm group hover:border-blue-500 transition-all flex flex-col items-center text-center">
                <div className="p-5 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={32} />
                </div>
                <span className="block text-slate-400 font-black text-xs uppercase tracking-widest mb-2">اتصل بنا</span>
                <span className="text-2xl font-black text-slate-900">{PHONE_NUMBER}</span>
             </a>
             <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm group hover:border-emerald-500 transition-all flex flex-col items-center text-center">
                <div className="p-5 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageSquare size={32} />
                </div>
                <span className="block text-slate-400 font-black text-xs uppercase tracking-widest mb-2">واتساب</span>
                <span className="text-2xl font-black text-slate-900">{WHATSAPP_NUMBER}</span>
             </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative group"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 group-hover:scale-150 transition-transform duration-1000" />
             <div className="relative z-10 flex flex-col items-center text-center">
               <MapPin className="text-blue-400 mb-8" size={48} />
               <h3 className="text-3xl md:text-4xl font-black mb-4">تفضل بزيارتنا</h3>
               <p className="text-slate-400 text-xl font-medium mb-10">{ADDRESS}</p>
               
               <div className="w-full h-[400px] rounded-[2rem] overflow-hidden border-8 border-white/5 shadow-2xl mb-10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.560007388!2d-7.669394614616164!3d33.57226779124612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778a113a1%3A0x10cb5d653994cd!2sCasablanca!5e0!3m2!1sen!2sma!4v1740577500000!5m2!1sen!2sma"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
               
               <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-block py-5 px-12 bg-white text-slate-900 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform">
                 فتح في تطبيق الخرائط
               </a>
             </div>
          </motion.div>
        </div>

        {/* Wide CTA Box */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-10 md:p-16 bg-slate-900 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-[100px] opacity-10 group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative z-10 text-center lg:text-right">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">هل تحتاج إلى استشارة <br /> سريعة ومباشرة؟</h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl">فريقنا الطبي جاهز للرد على جميع استفساراتك عبر الواتساب في أي وقت. لا تتردد في التواصل معنا.</p>
          </div>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="relative z-10 px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl shadow-[0_20px_40px_rgba(59,130,246,0.3)] flex items-center gap-4 group/btn"
          >
            تواصل عبر الواتساب
            <MessageSquare size={24} className="group-hover/btn:rotate-12 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
