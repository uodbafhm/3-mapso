
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface Props {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<Props> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.15)] transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
          {service.icon}
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3 group-hover:text-slate-600 transition-colors">
          {service.description}
        </p>
        
        <Link 
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-2 font-black text-blue-600 group/btn"
        >
          عرض التفاصيل
          <ArrowLeft size={18} className="transition-transform group-hover/btn:-translate-x-2 duration-300" />
        </Link>
      </div>
      
      {/* Interactive Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/5 rounded-[2.5rem] transition-colors pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
