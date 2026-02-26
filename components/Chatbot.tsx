
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronLeft, Bot, Sparkles } from 'lucide-react';
import { CLINIC_NAME, PHONE_NUMBER, WHATSAPP_NUMBER, MAPS_URL, ADDRESS } from '../constants';

type Message = {
  role: 'bot' | 'user';
  text: string;
  type?: 'options' | 'action';
  options?: { label: string; id: string }[];
  action?: { label: string; link: string };
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      text: `السلام عليكم 👋 مرحبا بيك في عيادة ${CLINIC_NAME} لطب الأسنان 🦷 كيفاش نقدر نعاونك اليوم؟`,
      type: 'options',
      options: [
        { label: 'بغيت نحجز موعد', id: 'booking' },
        { label: 'بغيت نعرف الأثمنة', id: 'prices' },
        { label: 'فين جات العيادة؟', id: 'location' },
      ]
    }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleOptionClick = (option: { label: string; id: string }) => {
    const userMsg: Message = { role: 'user', text: option.label };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let botMsg: Message;
      switch (option.id) {
        case 'booking':
          botMsg = {
            role: 'bot',
            text: 'على الراس والعين! تقدر تختار الموعد اللي كيناسبك مباشرة بالضغط على هاد الزر:',
            type: 'action',
            action: { label: 'احجز دابا', link: '/contact' }
          };
          break;
        case 'prices':
          botMsg = {
            role: 'bot',
            text: 'باش تعرف الأثمنة بالتفصيل وتستاشر مع الطبيب، تواصل معانا مباشرة عبر الواتساب:',
            type: 'action',
            action: { label: 'تواصل مع الطبيب', link: `https://wa.me/${WHATSAPP_NUMBER}` }
          };
          break;
        case 'location':
          botMsg = {
            role: 'bot',
            text: `العيادة كاينة في ${ADDRESS}. مرحبا بيك، تقدر تبع الخريطة باش توصل لينا بسهولة:`,
            type: 'action',
            action: { label: 'موقع العيادة', link: MAPS_URL }
          };
          break;
        default:
          botMsg = { role: 'bot', text: 'كيفاش نقدر نعاونك؟' };
      }
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  const resetChat = () => {
    setMessages([
      { 
        role: 'bot', 
        text: `السلام عليكم 👋 مرحبا بيك في عيادة ${CLINIC_NAME} لطب الأسنان 🦷 كيفاش نقدر نعاونك اليوم؟`,
        type: 'options',
        options: [
          { label: 'بغيت نحجز موعد', id: 'booking' },
          { label: 'بغيت نعرف الأثمنة', id: 'prices' },
          { label: 'فين جات العيادة؟', id: 'location' },
        ]
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[380px] max-w-[90vw] h-[600px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="p-6 bg-[#0084ca] text-white flex items-center justify-between relative">
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                <X size={24} />
              </button>
              
              <div className="flex flex-col items-center flex-1">
                <span className="font-black text-lg">مساعد {CLINIC_NAME} الذكي</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold opacity-90">نشط الآن</span>
                </div>
              </div>

              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <Bot size={28} />
              </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className="space-y-4">
                  <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`max-w-[85%] p-5 rounded-[1.8rem] text-sm font-bold leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                        ? 'bg-[#0084ca] text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                      }`}
                    >
                      {msg.text}
                    </motion.div>
                  </div>

                  {/* Bot Options */}
                  {msg.role === 'bot' && msg.type === 'options' && (
                    <div className="space-y-3 pr-4">
                      {msg.options?.map((opt, idx) => (
                        <motion.button
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          onClick={() => handleOptionClick(opt)}
                          className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-[#0084ca] font-black text-sm flex items-center justify-between group hover:border-[#0084ca] hover:bg-blue-50 transition-all shadow-sm"
                        >
                          <ChevronLeft size={18} className="text-slate-300 group-hover:text-[#0084ca] transition-colors" />
                          <span>{opt.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Bot Action Button */}
                  {msg.role === 'bot' && msg.type === 'action' && msg.action && (
                    <div className="px-4">
                      <motion.a
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        href={msg.action.link}
                        target={msg.action.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-[#0084ca] text-white rounded-2xl font-black text-center text-sm shadow-lg shadow-blue-200 hover:bg-[#0073b0] transition-all active:scale-95"
                      >
                        {msg.action.label}
                      </motion.a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-slate-100 text-center">
              <button 
                onClick={resetChat}
                className="text-[11px] font-black text-slate-400 hover:text-[#0084ca] transition-colors uppercase tracking-wider"
              >
                العودة للقائمة
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-[#0084ca] text-white rotate-0' : 'bg-[#0084ca] text-white'
        }`}
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
