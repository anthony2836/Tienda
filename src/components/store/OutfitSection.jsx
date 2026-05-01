import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { CATEGORY_LABELS, STANDARD_SIZES, getOutfitProducts } from '@/lib/store-config';
import { cn } from '@/lib/utils';

export default function OutfitSection({ products = [] }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizeError, setShowSizeError] = useState(false);
  const { addItem } = useCart();

  const { bundle, pieces } = useMemo(() => getOutfitProducts(products), [products]);
  const heroProduct = bundle || pieces[0];
  const outfitPrice = pieces.reduce((sum, product) => sum + product.price, 0);

  if (!heroProduct || pieces.length < 3) return null;

  const handleAddOutfit = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }

    pieces.forEach((product) => addItem(product, selectedSize));
  };

  return (
    <section className="bg-neutral-950 py-16 text-white lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <Link to={`/producto/${heroProduct.id}`} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-white/10">
              {heroProduct.images?.[0] && (
                <img
                  src={heroProduct.images[0]}
                  alt={heroProduct.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-black">
                  <Layers className="h-3.5 w-3.5" />
                  Outfit completo
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col justify-center lg:col-span-7"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Compra por look
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Outfit urbano completo
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
            Una combinación lista para llevar: capa superior, base, pantalón y zapatillas con estética streetwear.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {pieces.map((product) => (
              <Link
                key={product.id}
                to={`/producto/${product.id}`}
                className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08]"
              >
                <div className="h-16 w-14 flex-shrink-0 overflow-hidden rounded-md bg-white/10">
                  {product.images?.[0] && (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs uppercase tracking-wide text-white/45">
                    {CATEGORY_LABELS[product.category] || product.category}
                  </p>
                  <p className="truncate text-sm font-semibold">{product.name}</p>
                  <p className="text-sm text-white/65">{product.price.toFixed(2)} €</p>
                </div>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-white/40 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">Talla del outfit</p>
                <div className="mt-3 grid w-full max-w-xs grid-cols-4 gap-2">
                  {STANDARD_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setSelectedSize(size);
                        setShowSizeError(false);
                      }}
                      className={cn(
                        'min-h-11 rounded-md border text-sm font-semibold transition-all',
                        selectedSize === size
                          ? 'border-white bg-white text-black'
                          : 'border-white/20 text-white hover:border-white/60'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className="mt-2 min-h-5">
                  {showSizeError && (
                    <p className="text-xs text-red-300">Selecciona una talla.</p>
                  )}
                </div>
              </div>

              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">Total look</p>
                <p className="mt-1 text-2xl font-bold">{outfitPrice.toFixed(2)} €</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddOutfit}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-black transition-all hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto"
            >
              <ShoppingBag className="h-4 w-4" />
              Añadir outfit al carrito
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
