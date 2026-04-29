import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ChevronLeft, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductDetail() {
  const path = window.location.pathname;
  const productId = path.split('/producto/')[1] || '';
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const products = await base44.entities.Product.filter({ id: productId });
      return products[0];
    },
    enabled: !!productId,
  });

  const handleAddToCart = () => {
    if (!product) return;
    const size = selectedSize || product.sizes?.[0] || 'M';
    addItem(product, size);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <Skeleton className="aspect-[4/5] rounded-2xl" />
          <div className="space-y-6">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-muted-foreground">Producto no encontrado</p>
        <Link to="/" className="text-sm font-medium mt-4 inline-block underline">Volver al inicio</Link>
      </div>
    );
  }

  const images = product.images || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ChevronLeft className="w-4 h-4" />
        Volver
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Images */}
        <div className="space-y-4">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden"
          >
            {images[selectedImage] && (
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-foreground' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="flex flex-col">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-2">
            {product.category}
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight">{product.name}</h1>
          <p className="text-xl lg:text-2xl font-semibold mt-3">{product.price.toFixed(2)} €</p>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Talla</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 border rounded-lg text-sm font-medium transition-all ${
                      (selectedSize || product.sizes[0]) === size
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border hover:border-foreground/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to cart */}
          <Button
            onClick={handleAddToCart}
            className="mt-8 h-14 text-sm font-semibold tracking-wide uppercase rounded-xl"
          >
            Comprar ahora
          </Button>

          {/* Description */}
          {product.description && (
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold mb-3">Descripción</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Shipping info */}
          <div className="mt-8 pt-8 border-t border-border space-y-4">
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Envío gratuito</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {product.shipping_info || 'Envío gratis en pedidos superiores a 50€. Entrega en 2-4 días laborables.'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Devoluciones</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {product.returns_info || '30 días para devoluciones gratuitas. Sin preguntas.'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Pago seguro</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Transacciones protegidas con encriptación SSL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}