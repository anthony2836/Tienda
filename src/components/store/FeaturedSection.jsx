import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeaturedSection({ products }) {
  const visibleProducts = products.slice(0, 6);

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
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Selección corta de piezas con más potencial: zapatillas, sudadera top, básicos fuertes y look completo.
          </p>
        </motion.div>
        <Link
          to="/destacados"
          className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          Ver selección
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="sm:hidden mt-8 text-center">
        <Link
          to="/destacados"
          className="inline-flex items-center gap-2 text-sm font-medium"
        >
          Ver selección <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
