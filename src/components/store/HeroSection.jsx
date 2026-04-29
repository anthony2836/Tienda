import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="UrbanStyle streetwear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <p className="text-white/60 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Nueva colección 2026
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[0.95]">
            Tu estilo,
            <br />
            tu identidad
          </h1>
          <p className="text-white/60 text-sm sm:text-base mt-6 max-w-sm leading-relaxed">
            Ropa urbana premium diseñada para quienes no siguen tendencias, las crean.
          </p>
          <Link
            to="/destacados"
            className="mt-8 inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-white/90 transition-colors rounded-lg group"
          >
            Comprar ahora
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}