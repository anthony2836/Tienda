import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import HeroSection from '@/components/store/HeroSection';
import FeaturedSection from '@/components/store/FeaturedSection';
import OutfitSection from '@/components/store/OutfitSection';
import CategoriesGrid from '@/components/store/CategoriesGrid';
import { Skeleton } from '@/components/ui/skeleton';
import { CATEGORY_IMAGES, getStrategicFeatured } from '@/lib/store-config';

const HERO_IMAGE = 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/62a6ca6cc_generated_89d919de.png';

export default function Home() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products-featured'],
    queryFn: () => base44.entities.Product.filter({ featured: true }),
  });

  const { data: allProducts = [], isLoading: isLoadingAllProducts } = useQuery({
    queryKey: ['products-all'],
    queryFn: () => base44.entities.Product.list('-created_date', 24),
  });

  const featured = getStrategicFeatured(allProducts, products);
  const isFeaturedLoading = isLoading || isLoadingAllProducts;

  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      {isFeaturedLoading ? (
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
      <OutfitSection products={allProducts} />
      <CategoriesGrid categoryImages={CATEGORY_IMAGES} />
    </div>
  );
}
