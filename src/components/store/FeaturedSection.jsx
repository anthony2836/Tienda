import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeaturedSection({ products }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="flex items-end justify-between mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Lo más vendido
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Destacados</h2>
        </motion.div>
        <Link
          to="/destacados"
          className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          Ver todo
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {products.slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="sm:hidden mt-8 text-center">
        <Link
          to="/destacados"
          className="inline-flex items-center gap-2 text-sm font-medium"
        >
          Ver todo <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}