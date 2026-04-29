// Minimal shim for @base44/sdk used by the app.
const products = [
  {
    id: 'camiseta-basic-negra',
    name: 'Camiseta Basic Negra',
    price: 24.99,
    category: 'camisetas',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/e24c648ec_generated_2b664b04.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Camiseta de algodón suave con corte regular para uso diario.',
    featured: true,
    created_date: '2026-04-29T10:00:00.000Z',
  },
  {
    id: 'camiseta-oversize-blanca',
    name: 'Camiseta Oversize Blanca',
    price: 29.99,
    category: 'camisetas',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/e24c648ec_generated_2b664b04.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Camiseta oversize blanca con tejido liviano y caída relajada.',
    featured: false,
    created_date: '2026-04-29T09:50:00.000Z',
  },
  {
    id: 'pantalon-cargo-arena',
    name: 'Pantalón Cargo Arena',
    price: 54.99,
    category: 'pantalones',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/80653ced9_generated_6c0aeabb.png'],
    sizes: ['38', '40', '42', '44'],
    description: 'Pantalón cargo resistente con bolsillos laterales y ajuste cómodo.',
    featured: true,
    created_date: '2026-04-29T09:40:00.000Z',
  },
  {
    id: 'jean-recto-azul',
    name: 'Jean Recto Azul',
    price: 49.99,
    category: 'pantalones',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/80653ced9_generated_6c0aeabb.png'],
    sizes: ['38', '40', '42', '44'],
    description: 'Jean de corte recto en denim azul clásico.',
    featured: false,
    created_date: '2026-04-29T09:30:00.000Z',
  },
  {
    id: 'sudadera-capucha-gris',
    name: 'Sudadera con Capucha Gris',
    price: 44.99,
    category: 'sudaderas',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/d35cb0c70_generated_2d2af0b9.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Sudadera de felpa con capucha ajustable y bolsillo frontal.',
    featured: true,
    created_date: '2026-04-29T09:20:00.000Z',
  },
  {
    id: 'sudadera-crewneck-verde',
    name: 'Sudadera Crewneck Verde',
    price: 39.99,
    category: 'sudaderas',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/d35cb0c70_generated_2d2af0b9.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Sudadera sin capucha con cuello redondo y terminaciones acanaladas.',
    featured: false,
    created_date: '2026-04-29T09:10:00.000Z',
  },
  {
    id: 'zapatillas-urbanas-blancas',
    name: 'Zapatillas Urbanas Blancas',
    price: 69.99,
    category: 'zapatillas',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/e2fe5ca27_generated_c04a1873.png'],
    sizes: ['39', '40', '41', '42', '43'],
    description: 'Zapatillas urbanas de diseño limpio para combinar con todo.',
    featured: true,
    created_date: '2026-04-29T09:00:00.000Z',
  },
  {
    id: 'zapatillas-running-negras',
    name: 'Zapatillas Running Negras',
    price: 74.99,
    category: 'zapatillas',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/e2fe5ca27_generated_c04a1873.png'],
    sizes: ['39', '40', '41', '42', '43'],
    description: 'Zapatillas livianas con suela cómoda para movimiento diario.',
    featured: false,
    created_date: '2026-04-29T08:50:00.000Z',
  },
  {
    id: 'gorra-logo-negra',
    name: 'Gorra Logo Negra',
    price: 19.99,
    category: 'accesorios',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/2f821a4ce_generated_d99ec58c.png'],
    sizes: ['Única'],
    description: 'Gorra ajustable con logo bordado y visera curva.',
    featured: true,
    created_date: '2026-04-29T08:40:00.000Z',
  },
  {
    id: 'mochila-compacta',
    name: 'Mochila Compacta',
    price: 34.99,
    category: 'accesorios',
    images: ['https://media.base44.com/images/public/69f1db04f57eb62d356e5108/2f821a4ce_generated_d99ec58c.png'],
    sizes: ['Única'],
    description: 'Mochila compacta con compartimento principal y bolsillo frontal.',
    featured: false,
    created_date: '2026-04-29T08:30:00.000Z',
  },
];

function matchesFilters(product, filters = {}) {
  return Object.entries(filters).every(([key, value]) => product[key] === value);
}

function sortProducts(items, sort) {
  if (sort === '-created_date') {
    return [...items].sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
  }

  return [...items];
}

export function createClient(opts = {}) {
  // Return an object shaped similarly to the real SDK used by the app.
  return {
    auth: {
      async me() { return null; },
      logout(redirect) { if (redirect) window.location.href = redirect; },
      redirectToLogin(redirect) { window.location.href = `/login?next=${encodeURIComponent(redirect||window.location.href)}`; }
    },
    entities: {
      Product: {
        async filter(filters = {}) { return products.filter(product => matchesFilters(product, filters)); },
        async list(sort, limit) { return sortProducts(products, sort).slice(0, limit); },
      }
    }
  }
}
