import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/store/ProductCard';
import { Skeleton } from '@/components/ui/skeleton';

const categoryTitles = {
  camisetas: 'Camisetas',
  pantalones: 'Pantalones',
  sudaderas: 'Sudaderas',
  zapatillas: 'Zapatillas',
  accesorios: 'Accesorios',
};

export default function Category() {
  const path = window.location.pathname;
  const categorySlug = path.split('/categoria/')[1] || '';

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products-category', categorySlug],
    queryFn: () => base44.entities.Product.filter({ category: categorySlug }),
    enabled: !!categorySlug,
  });

  const title = categoryTitles[categorySlug] || categorySlug;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="mb-12">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Categoría
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">{title}</h1>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[4/5] rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No hay productos disponibles en esta categoría.</p>
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