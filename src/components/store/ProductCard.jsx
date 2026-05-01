import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '@/lib/CartContext';
import { ShoppingBag } from 'lucide-react';
import { CATEGORY_LABELS, getProductSizes } from '@/lib/store-config';
import { cn } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizeError, setShowSizeError] = useState(false);
  const { addItem } = useCart();
  const sizes = getProductSizes(product);

  const handleSelectSize = (size) => {
    setSelectedSize(size);
    setShowSizeError(false);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }

    addItem(product, selectedSize);
  };

  return (
    <motion.article
      className="group flex h-full flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/producto/${product.id}`} className="block">
        <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden border border-border/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/10">
          {product.images?.[0] && (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground backdrop-blur">
            {CATEGORY_LABELS[product.category] || product.category}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-4">
        <Link to={`/producto/${product.id}`} className="block">
          <h3 className="text-sm font-semibold leading-snug tracking-tight transition-colors group-hover:text-foreground/70">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-semibold">{product.price.toFixed(2)} €</p>

        <div className="mt-4 grid grid-cols-4 gap-1.5" aria-label={`Tallas disponibles para ${product.name}`}>
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => handleSelectSize(size)}
              className={cn(
                'min-h-9 rounded-md border text-xs font-semibold transition-all',
                selectedSize === size
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border bg-background text-foreground hover:border-foreground/60'
              )}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="mt-2 min-h-5">
          {showSizeError && (
            <p className="text-[11px] leading-tight text-destructive">Selecciona una talla.</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-3 py-3 text-center text-[11px] font-semibold uppercase leading-tight tracking-wide text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
        >
          <ShoppingBag className="h-4 w-4 flex-shrink-0" />
          Añadir al carrito
        </button>
      </div>
    </motion.article>
  );
}
