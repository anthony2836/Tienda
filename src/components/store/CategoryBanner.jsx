import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CATEGORY_LABELS } from '@/lib/store-config';

export default function CategoryBanner({ categoryKey, image }) {
  return (
    <Link to={`/categoria/${categoryKey}`}>
      <motion.div
        className="relative h-48 sm:h-64 rounded-2xl overflow-hidden group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={image}
          alt={CATEGORY_LABELS[categoryKey]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              {CATEGORY_LABELS[categoryKey]}
            </h3>
            <div className="mt-2 flex items-center justify-center gap-1 text-white/80 text-xs font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explorar <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
