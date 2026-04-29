import React from 'react';
import { motion } from 'framer-motion';
import CategoryBanner from './CategoryBanner';

export default function CategoriesGrid({ categoryImages }) {
  const categories = ['camisetas', 'pantalones', 'sudaderas', 'zapatillas', 'accesorios'];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Explora
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Categorías</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map(cat => (
          <CategoryBanner key={cat} categoryKey={cat} image={categoryImages[cat]} />
        ))}
      </div>
    </section>
  );
}