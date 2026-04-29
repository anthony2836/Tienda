import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/store/ProductCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function Featured() {
  const { data: featured = [], isLoading } = useQuery({
    queryKey: ['products-featured'],
    queryFn: () => base44.entities.Product.filter({ featured: true }),
  });

  const { data: allProducts = [] } = useQuery({
    queryKey: ['products-all-featured'],
    queryFn: () => base44.entities.Product.list('-created_date', 20),
  });

  const products = featured.length > 0 ? featured : allProducts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="mb-12">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Colección
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">Destacados</h1>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[4/5] rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}