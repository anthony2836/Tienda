import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import HeroSection from '@/components/store/HeroSection';
import FeaturedSection from '@/components/store/FeaturedSection';
import CategoriesGrid from '@/components/store/CategoriesGrid';
import { Skeleton } from '@/components/ui/skeleton';

const HERO_IMAGE = 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/62a6ca6cc_generated_89d919de.png';

const CATEGORY_IMAGES = {
  camisetas: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/e24c648ec_generated_2b664b04.png',
  pantalones: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/80653ced9_generated_6c0aeabb.png',
  sudaderas: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/d35cb0c70_generated_2d2af0b9.png',
  zapatillas: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/e2fe5ca27_generated_c04a1873.png',
  accesorios: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/2f821a4ce_generated_d99ec58c.png',
};

export default function Home() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products-featured'],
    queryFn: () => base44.entities.Product.filter({ featured: true }),
  });

  const { data: allProducts = [] } = useQuery({
    queryKey: ['products-all'],
    queryFn: () => base44.entities.Product.list('-created_date', 8),
  });

  const featured = products.length > 0 ? products : allProducts;

  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      {isLoading ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[4/5] rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <FeaturedSection products={featured} />
      )}
      <CategoriesGrid categoryImages={CATEGORY_IMAGES} />
    </div>
  );
}