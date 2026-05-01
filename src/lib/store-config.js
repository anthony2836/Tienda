export const STANDARD_SIZES = ['S', 'M', 'L', 'XL'];

export const CATEGORY_LABELS = {
  camisetas: 'Camisetas',
  pantalones: 'Pantalones',
  sudaderas: 'Sudaderas',
  zapatillas: 'Zapatillas',
  futbol: 'Fútbol',
  accesorios: 'Accesorios',
  outfits: 'Outfits',
};

export const CATEGORY_ORDER = [
  'camisetas',
  'pantalones',
  'sudaderas',
  'zapatillas',
  'futbol',
  'accesorios',
];

export const CATEGORY_IMAGES = {
  camisetas: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/e24c648ec_generated_2b664b04.png',
  pantalones: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/80653ced9_generated_6c0aeabb.png',
  sudaderas: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/d35cb0c70_generated_2d2af0b9.png',
  zapatillas: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/e2fe5ca27_generated_c04a1873.png',
  futbol: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/e24c648ec_generated_2b664b04.png',
  accesorios: 'https://media.base44.com/images/public/69f1db04f57eb62d356e5108/2f821a4ce_generated_d99ec58c.png',
};

export const CATEGORY_DESCRIPTIONS = {
  futbol: 'Camisetas de fútbol modernas para llevar en clave streetwear: corte limpio, energía de grada y styling urbano.',
};

const featuredIntents = [
  {
    key: 'outfit',
    match: (product) =>
      product.category === 'outfits' ||
      /outfit|conjunto|look completo/i.test(product.name),
  },
  {
    key: 'zapatilla-1',
    match: (product) => product.category === 'zapatillas' && /urban|blanca|retro|runner/i.test(product.name),
  },
  {
    key: 'zapatilla-2',
    match: (product) => product.category === 'zapatillas',
  },
  {
    key: 'sudadera',
    match: (product) => product.category === 'sudaderas' && /oversize|capucha|hoodie/i.test(product.name),
  },
  {
    key: 'camiseta',
    match: (product) => product.category === 'camisetas' && /basic|básica|negra|blanca/i.test(product.name),
  },
  {
    key: 'pantalon',
    match: (product) => product.category === 'pantalones' && /cargo|baggy|wide/i.test(product.name),
  },
  {
    key: 'accesorio',
    match: (product) => product.category === 'accesorios',
  },
];

function uniqueProducts(products) {
  const seen = new Set();

  return products.filter((product) => {
    if (!product?.id || seen.has(product.id)) return false;
    seen.add(product.id);
    return true;
  });
}

export function getProductSizes() {
  return STANDARD_SIZES;
}

export function getStrategicFeatured(products = [], preferredProducts = []) {
  const candidates = uniqueProducts([...preferredProducts, ...products]);
  const selected = [];
  const selectedIds = new Set();

  featuredIntents.forEach(({ match }) => {
    const product = candidates.find((candidate) => !selectedIds.has(candidate.id) && match(candidate));

    if (product) {
      selected.push(product);
      selectedIds.add(product.id);
    }
  });

  const filler = candidates.filter((product) => !selectedIds.has(product.id));

  return [...selected, ...filler].slice(0, 8);
}

export function getOutfitProducts(products = []) {
  const findProduct = (category, preferredName) =>
    products.find((product) => product.category === category && preferredName.test(product.name)) ||
    products.find((product) => product.category === category);

  const bundle =
    products.find((product) => product.category === 'outfits') ||
    products.find((product) => /outfit|conjunto|look completo/i.test(product.name));

  const pieces = uniqueProducts([
    findProduct('sudaderas', /oversize|capucha|hoodie/i),
    findProduct('camisetas', /basic|básica|negra|blanca/i),
    findProduct('pantalones', /cargo|baggy|wide/i),
    findProduct('zapatillas', /urban|blanca|retro|runner/i),
  ].filter(Boolean)).slice(0, 4);

  return { bundle, pieces };
}
