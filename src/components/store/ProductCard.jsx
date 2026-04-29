import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '@/lib/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes?.[0] || 'M';
    addItem(product, defaultSize);
  };

  return (
    <Link to={`/producto/${product.id}`}>
      <motion.div
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        {/* Image */}
        <div className="relative aspect-[4/5] bg-muted rounded-xl overflow-hidden mb-4">
          {product.images?.[0] && (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-foreground text-background text-xs font-semibold tracking-widest uppercase rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Añadir al carrito
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="text-sm font-medium tracking-tight">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.price.toFixed(2)} €</p>
        </div>
      </motion.div>
    </Link>
  );
}