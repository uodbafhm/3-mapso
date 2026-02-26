
import React from 'react';
import { CLINIC_NAME, DOCTOR_NAME, PHONE_NUMBER, ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-2xl font-black text-slate-900 block mb-2">{CLINIC_NAME}</span>
          <p className="text-slate-400 font-bold">{DOCTOR_NAME} - رعاية صحية متطورة</p>
          <p className="text-slate-400 text-sm mt-1">{ADDRESS}</p>
        </div>
        
        <div className="flex gap-8">
           <a href="#" className="text-sm font-black text-slate-500 hover:text-blue-600 transition-colors">سياسة الخصوصية</a>
           <a href="#" className="text-sm font-black text-slate-500 hover:text-blue-600 transition-colors">الشروط والأحكام</a>
        </div>

        <div className="text-center md:text-left">
           <p className="text-sm font-black text-slate-400">© {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
           <p className="text-xs font-bold text-slate-300 mt-1">صُمم بكل فخر في الدار البيضاء</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
