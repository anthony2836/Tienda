# 🛍️ Mi Tienda de Ropa - E-Commerce Moderno

Una aplicación web moderna y profesional de e-commerce especializada en ropa, construida con tecnologías de punta y mejores prácticas de desarrollo web. Es una Single Page Application (SPA) completamente funcional con autenticación segura, gestión de carrito inteligente, catálogo dinámico y experiencia de usuario optimizada.

## 📋 Tabla de Contenidos

- [Stack Tecnológico](#-stack-tecnológico)
- [Características Principales](#-características-principales)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Cómo Ejecutar](#-cómo-ejecutar)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Componentes Principales](#-componentes-principales)
- [Contextos y Estado](#-contextos-y-estado)
- [API y Backend](#-api-y-backend)
- [Arquitectura](#-arquitectura)
- [Mejores Prácticas](#-mejores-prácticas)

---

## 🛠️ Stack Tecnológico

### Frontend Core

| Tecnología | Versión | Descripción |
|---|---|---|
| **React** | 19.2.5 | Framework JavaScript para construcción de interfaces de usuario reactivas con Server Components moderno |
| **Vite** | 5+ | Build tool ultrarrápido con HMR (Hot Module Replacement) que proporciona desarrollo seamless |
| **TypeScript (opcional)** | - | Tipado estático para mejor mantenibilidad |

**¿Por qué Vite?**
- Build x10 más rápido que Webpack
- HMR instantáneo para desarrollo fluido
- Optimización automática para producción
- Mejor experiencia de desarrollo

### Enrutamiento y Navegación

| Tecnología | Versión | Descripción |
|---|---|---|
| **React Router DOM** | 7.14.2 | Router declarativo para navegación SPA con soporte para rutas anidadas y dinámicas |

**Rutas Implementadas:**
```
/ → Página de Inicio
/destacados → Productos Destacados
/categoria/:slug → Categorías Dinámicas
/producto/:id → Detalle de Productos
/checkout → Proceso de Compra
```

### UI y Componentes

| Tecnología | Versión | Descripción |
|---|---|---|
| **Radix UI** | ^1.2+ | Sistema de componentes sin estilos, accesibles (WCAG) y libres de efectos secundarios |
| **Shadcn/ui** | - | Componentes composables de alta calidad basados en Radix UI y Tailwind CSS |
| **Lucide React** | 1.14.0 | Librería de 1000+ iconos SVG ligeros, customizables y optimizados |

**Componentes Radix UI Incluidos (30+):**
```
✓ Accordion          ✓ Alert Dialog      ✓ Aspect Ratio      ✓ Avatar
✓ Badge              ✓ Breadcrumb        ✓ Button            ✓ Calendar
✓ Card               ✓ Carousel          ✓ Checkbox          ✓ Collapsible
✓ Command            ✓ Context Menu      ✓ Dialog            ✓ Drawer
✓ Dropdown Menu      ✓ Hover Card        ✓ Input OTP         ✓ Label
✓ Menubar            ✓ Navigation Menu   ✓ Pagination        ✓ Popover
✓ Progress           ✓ Radio Group       ✓ Resizable         ✓ Scroll Area
✓ Select             ✓ Separator         ✓ Sheet              ✓ Sidebar
✓ Skeleton           ✓ Slider            ✓ Switch            ✓ Table
✓ Tabs               ✓ Textarea          ✓ Toast/Toaster     ✓ Toggle
✓ Tooltip
```

### Estilos y Diseño

| Tecnología | Versión | Descripción |
|---|---|---|
| **Tailwind CSS** | Latest | Framework CSS utility-first con configuración extensible y temas |
| **PostCSS** | - | Procesador CSS que permite usar características CSS modernas |
| **Class Variance Authority** | 0.7.1 | Utilidad para crear y gestionar variantes de componentes de forma limpia |
| **clsx** | 2.1.1 | Utilidad para concatenación condicional de clases CSS |
| **Tailwind Merge** | 3.5.0 | Resuelve conflictos de clases Tailwind para evitar especificidad innecesaria |

**Características de Tailwind:**
- ✓ Modo oscuro soportado (`darkMode: 'class'`)
- ✓ Variables CSS personalizadas para tema dinámico
- ✓ Tipografía optimizada (Inter font)
- ✓ Paleta de colores personalizada
- ✓ Sistema de espaciado consistente
- ✓ Responsive design mobile-first

### Animaciones y Motion

| Tecnología | Versión | Descripción |
|---|---|---|
| **Framer Motion** | 12.38.0 | Librería de animaciones profesionales para React con controles precisos |

**Casos de Uso:**
- Transiciones suaves del carrito (sidebar)
- Animaciones de entrada/salida
- Efectos hover en componentes
- Transiciones entre páginas
- Skeletons animados

### Gestión de Estado y Datos

| Tecnología | Versión | Descripción |
|---|---|---|
| **React Query (TanStack Query)** | 5.100.6 | Librería de gestión del estado del servidor con caching automático |
| **React Context API** | Built-in | API nativa de React para estado global sin dependencias externas |

**React Query Features:**
```
✓ Fetching automático de datos
✓ Caching inteligente
✓ Sincronización en background
✓ Retry automático
✓ Invalidación de queries
✓ Offsite queries
✓ Pagination y infinite scrolling ready
```

**Contextos Implementados:**
- **AuthContext** - Gestión centralizada de autenticación
- **CartContext** - Estado global del carrito de compras

### Autenticación y Backend

| Tecnología | Versión | Descripción |
|---|---|---|
| **Base44 SDK** | Custom | SDK personalizado para integración con backend Base44 |
| **Axios** | - | HTTP client integrado en Base44 SDK |

**Funcionalidades:**
- Autenticación con tokens
- Gestión de errores personalizados
- Interceptores automáticos
- Validación de estado de usuario

### Calidad de Código

| Tecnología | Versión | Descripción |
|---|---|---|
| **ESLint** | 10.0.1 | Analizador estático de código para detectar errores y mantener estándares |
| **@eslint/js** | 10.0.1 | Configuración de ESLint recomendada |

---

## ✨ Características Principales

### 🔐 Autenticación y Seguridad
```
✓ Sistema de autenticación con tokens
✓ Validación de usuarios registrados
✓ Manejo de errores específicos (usuario no registrado, autenticación requerida)
✓ Estados de carga durante verificación
✓ Redirección automática a login
✓ Gestión segura de credenciales
```

### 🛒 Carrito de Compras Avanzado
```
✓ Carrito flotante tipo sidebar con animaciones
✓ Agregar productos con selección de talla
✓ Quitar items del carrito
✓ Actualizar cantidades en tiempo real
✓ Cálculo automático de totales
✓ Contador de items visible
✓ Persistencia de estado global
✓ Overlay con backdrop blur
```

### 📦 Catálogo de Productos Dinámico
```
✓ Listado completo de productos
✓ Productos destacados especiales
✓ Filtrado por categorías
✓ Búsqueda de productos
✓ Detalle completo de cada producto
✓ Sistema de tallas personalizado
✓ Galería de imágenes por producto
✓ Información completa de precios y descripción
```

### 🎨 Experiencia de Usuario Premium
```
✓ Responsive design adaptable a todos los dispositivos
✓ Soporte para modo oscuro
✓ Animaciones suaves y transiciones
✓ Carga lazy de datos
✓ Skeletons de carga para mejor percepción
✓ Notificaciones con Sonner
✓ Transiciones entre páginas fluidas
✓ Interfaz intuitiva y moderna
```

### 📱 Diseño Responsivo
```
✓ Mobile-first approach
✓ Breakpoints optimizados (sm, md, lg, xl, 2xl)
✓ Navegación móvil adaptada
✓ Touch-friendly controls
✓ Optimización para tablets y desktop
```

### 📊 Performance Optimizado
```
✓ Code splitting automático con Vite
✓ Lazy loading de componentes
✓ CSS purificado (Tailwind)
✓ Optimización de imágenes
✓ Caché de datos con React Query
✓ Bundle size minimizado
✓ HMR para desarrollo rápido
```

### 🏪 Secciones de Tienda
```
✓ Hero Section - Banner principal atractivo
✓ Featured Section - Productos destacados
✓ Categories Grid - Grid de categorías
✓ Outfit Section - Sets/Combinaciones de ropa
✓ Header - Navegación superior
✓ Footer - Información y enlaces
✓ Product Cards - Tarjetas de producto reutilizables
✓ Product Detail - Página de detalles completa
```

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16.x o superior)
- **npm** (versión 8.x o superior) o **yarn/pnpm**
- **Git** (para clonar el repositorio)
- **Visual Studio Code** (recomendado) o editor de tu preferencia

```bash
# Verificar instalación
node --version  # v18.x o superior
npm --version   # 8.x o superior
```

---

## 🚀 Instalación

### Paso 1: Clonar el Repositorio
```bash
git clone <url-del-repositorio>
cd mi-tienda-de-ropa
```

### Paso 2: Instalar Dependencias
```bash
# Con npm
npm install

# Con yarn
yarn install

# Con pnpm (más rápido)
pnpm install
```

Este comando instalará todas las dependencias necesarias especificadas en `package.json`:
- React y ReactDOM
- React Router
- Tailwind CSS
- Radix UI
- React Query
- Framer Motion
- ESLint
- Y todas las demás librerías

**Tiempo estimado:** 2-3 minutos (depende de tu conexión)

### Paso 3: Verificar Instalación
```bash
# Verificar que todo está instalado correctamente
npm list

# Debería mostrar todas las dependencias correctamente instaladas
```

---

## ⚙️ Configuración

### Configurar Variables de Entorno

#### 1. Crear archivo `.env` en la raíz del proyecto
```bash
# En la raíz (mismo nivel que package.json)
cp .env.example .env  # Si existe un archivo de ejemplo
# O crear uno nuevo
touch .env
```

#### 2. Configurar parámetros en `src/lib/app-params.js`
```javascript
export const appParams = {
  appId: '69f1db04f57eb62d356e5108',  // ID único de tu aplicación
  token: '',                           // Token de autenticación (se obtiene en login)
  functionsVersion: '1.0',             // Versión de funciones del backend
  appBaseUrl: 'https://api.base44.com' // URL base del API
};
```

### Alias de Rutas (Ya Configurado)

El proyecto utiliza alias para importes más limpios:
```javascript
// En vite.config.js
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@base44/sdk': path.resolve(__dirname, './src/shims/@base44/sdk'),
  },
}
```

**Uso en imports:**
```javascript
// ✓ Recomendado (limpio y legible)
import Home from '@/pages/Home';
import { useCart } from '@/lib/CartContext';

// ✗ Evitar (difícil de mantener)
import Home from '../../../pages/Home';
```

### Configuración de Tailwind CSS

La configuración está en `tailwind.config.cjs`:
- **Temas CSS:** Variables personalizadas para colores
- **Modo oscuro:** Soportado (`darkMode: 'class'`)
- **Fuente:** Inter (personalizable)
- **Extensiones:** Radios y espaciados personalizados

---

## 🎯 Cómo Ejecutar

### Modo Desarrollo (Recomendado durante desarrollo)

```bash
npm run dev
```

**Qué hace:**
- Inicia servidor Vite en `http://localhost:5173`
- Activa HMR (Hot Module Replacement) - cambios en tiempo real
- Abre la consola del navegador para ver errors/warnings
- Monitorea cambios en archivos automáticamente

**Características en desarrollo:**
```
✓ Recarga automática al guardar cambios
✓ Source maps para debugging fácil
✓ Error overlay en navegador
✓ Fast refresh sin perder estado
```

### Build para Producción

```bash
npm run build
```

**Qué hace:**
- Compila todo el código a carpeta `dist/`
- Minimiza y optimiza assets
- Genera source maps
- Crea chunks optimizados
- Aplica tree-shaking para eliminar código no usado

**Resultado:**
```
dist/
├── assets/
│   ├── index-xxxxx.js     (JavaScript principal)
│   ├── index-xxxxx.css    (Estilos compilados)
│   └── vendor-xxxxx.js    (Dependencias)
└── index.html
```

### Previsualizar Build de Producción

```bash
npm run build && npm run preview
```

**Propósito:**
- Simula la aplicación en producción localmente
- Valida que todo funciona correctamente
- Útil para testing antes de deploy

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|---|---|---|
| **dev** | `npm run dev` | Inicia servidor desarrollo con HMR |
| **build** | `npm run build` | Compila a producción (carpeta dist/) |
| **preview** | `npm run preview` | Previsualiza build de producción localmente |
| **lint** | `npm run lint` | Valida código con ESLint y muestra errores |

### Ejemplos de Uso

```bash
# 1. Iniciar desarrollo
npm run dev
# → Abre http://localhost:5173 automáticamente

# 2. Verificar código antes de commit
npm run lint
# → Muestra problemas de código

# 3. Build final para producción
npm run build
# → Crea carpeta dist/ lista para deploy

# 4. Probar build localmente
npm run preview
# → Sirve dist/ en http://localhost:4173
```

---

## 📁 Estructura del Proyecto

```
mi-tienda-de-ropa/
│
├── 📄 package.json                 # Dependencias y scripts
├── 📄 vite.config.js              # Configuración de Vite
├── 📄 tailwind.config.cjs          # Configuración de Tailwind
├── 📄 tailwind.config.js           # Re-export de configuración
├── 📄 postcss.config.js            # Configuración de PostCSS
├── 📄 eslint.config.js             # Reglas de ESLint
├── 📄 index.html                   # HTML principal (Single Page)
├── 📄 README.md                    # Este archivo
│
├── 📁 public/                      # Archivos estáticos (imágenes, fuentes)
│   └── ...
│
├── 📁 src/                         # Código fuente
│   │
│   ├── 📄 main.jsx                 # Punto de entrada (mount React)
│   ├── 📄 App.jsx                  # Componente raíz + routing
│   ├── 📄 App.css                  # Estilos específicos de App
│   ├── 📄 index.css                # Estilos globales
│   │
│   ├── 📁 api/                     # Integración con backend
│   │   └── base44Client.js         # Cliente API personalizado
│   │
│   ├── 📁 assets/                  # Recursos (imágenes, fuentes, etc)
│   │   └── ...
│   │
│   ├── 📁 components/              # Componentes React
│   │   ├── 📁 store/               # Componentes específicos de tienda
│   │   │   ├── StoreLayout.jsx     # Layout principal (Header, Footer, Outlet)
│   │   │   ├── Header.jsx          # Navegación superior con logo
│   │   │   ├── Footer.jsx          # Pie de página con enlaces
│   │   │   ├── CartSidebar.jsx     # Sidebar flotante del carrito
│   │   │   ├── ProductCard.jsx     # Tarjeta de producto reutilizable
│   │   │   ├── CategoriesGrid.jsx  # Grid de categorías
│   │   │   ├── CategoryBanner.jsx  # Banner de categoría
│   │   │   ├── HeroSection.jsx     # Sección hero principal
│   │   │   ├── FeaturedSection.jsx # Productos destacados
│   │   │   └── OutfitSection.jsx   # Sección de outfits/sets
│   │   │
│   │   ├── 📁 ui/                  # Componentes UI reutilizables (40+)
│   │   │   ├── accordion.jsx       # Accordion de Radix UI
│   │   │   ├── alert-dialog.jsx    # Alert Dialog
│   │   │   ├── button.jsx          # Botón personalizado
│   │   │   ├── card.jsx            # Tarjeta base
│   │   │   ├── dialog.jsx          # Modal/Diálogo
│   │   │   ├── input.jsx           # Input de formulario
│   │   │   ├── select.jsx          # Select/Dropdown
│   │   │   ├── tabs.jsx            # Pestañas
│   │   │   ├── toast.jsx           # Notificaciones
│   │   │   ├── skeleton.jsx        # Skeleton loading
│   │   │   └── ... (30+ más)
│   │   │
│   │   ├── ProtectedRoute.jsx      # HOC para rutas protegidas
│   │   └── UserNotRegisteredError.jsx # Componente de error
│   │
│   ├── 📁 hooks/                   # Custom Hooks
│   │   └── use-mobile.jsx          # Hook para detectar dispositivos móviles
│   │
│   ├── 📁 lib/                     # Funciones y contextos utilitarios
│   │   ├── AuthContext.jsx         # Contexto global de autenticación
│   │   ├── CartContext.jsx         # Contexto global del carrito
│   │   ├── PageNotFound.jsx        # Componente página 404
│   │   ├── app-params.js           # Parámetros de configuración
│   │   ├── store-config.js         # Configuración específica de tienda
│   │   ├── utils.js                # Funciones utilidad (cn, etc)
│   │   └── query-client.js         # Instancia configurada de React Query
│   │
│   ├── 📁 pages/                   # Páginas (componentes de ruta)
│   │   ├── Home.jsx                # Página principal
│   │   ├── Featured.jsx            # Página de destacados
│   │   ├── Category.jsx            # Página de categoría (dinámica)
│   │   ├── ProductDetail.jsx       # Detalle de producto (dinámica)
│   │   └── Checkout.jsx            # Página de checkout
│   │
│   └── 📁 shims/                   # Shimming de módulos
│       └── @base44/sdk/
│           └── index.js            # Shim del SDK Base44
│
└── 📁 dist/                        # Build de producción (generado por Vite)
    └── (creado después de npm run build)
```

### Explicación de Carpetas Clave

**src/pages/** - Componentes de página
- Cada archivo es una página/ruta
- Se usan con React Router
- Pueden ser cargadas dinámicamente

**src/components/store/** - Componentes de negocio
- Lógica específica de tienda
- Composición de otros componentes UI

**src/components/ui/** - Componentes reutilizables
- Sin lógica de negocio
- Basados en Radix UI
- Altamente configurables

**src/lib/** - Lógica compartida
- Contextos de React
- Utilidades
- Configuraciones

---

## 🧩 Componentes Principales

### StoreLayout (Layout Principal)
```jsx
// Estructura principal de todas las páginas
<StoreLayout>
  <Header />           // Navegación
  <Outlet />          // Página actual
  <Footer />          // Pie
  <CartSidebar />     // Carrito flotante
</StoreLayout>
```

### ProductCard (Tarjeta de Producto)
```
Muestra:
- Imagen del producto
- Nombre y categoría
- Precio
- Botón "Ver detalles" o "Agregar al carrito"
- Efectos hover animados
```

### CartSidebar (Carrito Flotante)
```
Características:
- Sidebar animado (Framer Motion)
- Lista de items con cantidad
- Botones +/- para cantidad
- Botón de eliminar
- Total dinámico
- Botón de checkout
- Cierre con overlay
```

### ProductDetail (Página de Producto)
```
Elementos:
- Galería de imágenes (selectable)
- Información completa del producto
- Selector de talla
- Precio
- Descripción
- Botón "Agregar al carrito"
- Beneficios (envío, devolución, etc)
- Carrito flotante
```

### Header (Navegación)
```
Incluye:
- Logo de tienda
- Navegación principal
- Buscador (opcional)
- Icono del carrito con contador
- Menú usuario
- Responsive (hamburger en móvil)
```

---

## 🏗️ Contextos y Estado

### AuthContext
```javascript
// Gestión centralizada de autenticación
{
  user,                    // Datos del usuario autenticado
  isAuthenticated,         // ¿Está logueado?
  isLoadingAuth,          // ¿Cargando autenticación?
  authError,              // Error de autenticación
  appPublicSettings,      // Configuración pública de app
  checkAppState(),        // Verificar estado de app
  checkUserAuth()         // Verificar autenticación
}
```

**Uso:**
```javascript
import { useAuth } from '@/lib/AuthContext';

function MyComponent() {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Por favor inicia sesión</div>;
  }
  
  return <div>Bienvenido, {user.name}!</div>;
}
```

### CartContext
```javascript
// Gestión del carrito de compras
{
  items,                        // Array de items
  addItem(product, size),       // Agregar producto
  removeItem(productId, size),  // Quitar producto
  updateQuantity(id, size, qty),// Cambiar cantidad
  total,                        // Total en dinero
  itemCount,                    // Total de items
  clearCart(),                  // Vaciar carrito
  isOpen,                       // ¿Está abierto?
  setIsOpen()                   // Abrir/cerrar
}
```

**Uso:**
```javascript
import { useCart } from '@/lib/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem(product, 'M'); // Agregar en talla M
  };
  
  return <button onClick={handleAddToCart}>Agregar</button>;
}
```

---

## 🔌 API y Backend

### Base44 SDK

El proyecto usa un SDK personalizado para comunicarse con el backend Base44.

#### Configuración
```javascript
// src/api/base44Client.js
import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

export const base44 = createClient({
  appId: appParams.appId,           // ID de aplicación
  token: appParams.token,           // Token de autenticación
  functionsVersion: appParams.functionsVersion,
  serverUrl: '',
  requiresAuth: false,
  appBaseUrl: appParams.appBaseUrl
});
```

#### Uso en Componentes
```javascript
// Obtener productos
const { data: products } = useQuery({
  queryKey: ['products'],
  queryFn: () => base44.entities.Product.list()
});

// Filtrar productos
const { data: featured } = useQuery({
  queryKey: ['featured'],
  queryFn: () => base44.entities.Product.filter({ featured: true })
});

// Obtener categorías
const { data: categories } = useQuery({
  queryKey: ['categories'],
  queryFn: () => base44.entities.Category.list()
});
```

#### Entidades Disponibles
```
✓ Product - Productos
✓ Category - Categorías
✓ Order - Órdenes (checkout)
✓ User - Usuarios
✓ CustomProperties - Propiedades personalizadas
```

### Manejo de Errores
```javascript
// Los errores se capturan automáticamente
try {
  const data = await base44.entities.Product.get(id);
} catch (error) {
  console.error('Error:', error.message);
  // error.status, error.data, error.extra_data
}
```

---

## 🏛️ Arquitectura

### Flujo de Datos

```
┌─────────────────────────────────────────────────┐
│ Componentes (Pages & Components)                 │
└──────────────┬──────────────────────────────────┘
               │ useQuery, useContext
               ▼
┌─────────────────────────────────────────────────┐
│ React Query + Context API (Estado)               │
│ - AuthContext                                    │
│ - CartContext                                    │
│ - Query Cache                                    │
└──────────────┬──────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────┐
│ Base44 SDK (Capa API)                            │
│ - createClient                                   │
│ - Entidades (Product, Category, etc)             │
└──────────────┬──────────────────────────────────┘
               │ HTTP (Axios)
               ▼
┌─────────────────────────────────────────────────┐
│ Backend Base44                                   │
│ - Base de datos                                  │
│ - Autenticación                                  │
│ - Lógica de negocio                              │
└─────────────────────────────────────────────────┘
```

### Componentes Funcionales

El proyecto usa **componentes funcionales** con hooks (no clases):

```javascript
// ✓ Moderno (recomendado)
function ProductCard({ product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  
  return <div>...</div>;
}

// ✗ Antiguo (evitar)
class ProductCard extends React.Component {
  // ...
}
```

### Tree Shaking y Code Splitting

Vite automáticamente:
- Divide código en chunks
- Carga lazy de componentes
- Elimina código no usado (tree shaking)
- Optimiza dependencias

```javascript
// ✓ Import on demand
import { Button } from '@/components/ui/button';

// Vite carga solo lo necesario
```

---

## ✅ Mejores Prácticas Implementadas

### 1. Separación de Responsabilidades
```
✓ Pages - Lógica de páginas
✓ Components - Componentes visuales
✓ Lib - Utilidades y contextos
✓ API - Integración con backend
```

### 2. Reutilización de Componentes
```
✓ 40+ componentes UI reutilizables
✓ Props bien documentadas
✓ Variantes con CVA
✓ Composición flexible
```

### 3. Performance
```
✓ Lazy loading de datos
✓ React Query caching
✓ Code splitting automático
✓ CSS tree-shaking
✓ Image optimization
```

### 4. Accesibilidad (A11y)
```
✓ Componentes WCAG de Radix UI
✓ ARIA labels
✓ Keyboard navigation
✓ Color contrast
✓ Focus visible
```

### 5. Desarrollo
```
✓ HMR para desarrollo rápido
✓ ESLint para código limpio
✓ Alias de rutas (@ y @base44/sdk)
✓ Environment variables
```

### 6. Type Safety (Opcional)
```
✓ Pronto: Migración a TypeScript
✓ JSDoc para documentación
✓ Tipos de componentes claros
```

---

## 🚀 Despliegue (Deployment)

### Preparar para Producción

```bash
# 1. Verificar que no hay errores
npm run lint

# 2. Build optimizado
npm run build

# 3. Previsualizar localmente
npm run preview

# 4. Validar que se vea correcto
# Abre http://localhost:4173
```

### Opciones de Hosting

| Plataforma | Ventajas | Instalación |
|---|---|---|
| **Vercel** | CI/CD automático, CDN global | Conectar repo Git |
| **Netlify** | Deploy simple, preview automático | Conectar repo Git |
| **GitHub Pages** | Gratis, control total | `npm run build` + push |
| **Servidor propio** | Control total | Servir `/dist` con nginx/apache |

### Ejemplo - Vercel

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Seguir instrucciones interactivas
```

### Variables de Entorno en Producción

```bash
# En Vercel/Netlify configurar:
VITE_APP_ID=69f1db04f57eb62d356e5108
VITE_API_URL=https://api.base44.com
```

---

## 📚 Recursos Útiles

### Documentación Oficial
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [React Query](https://tanstack.com/query/latest)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)

### Librerías Clave
- [Lucide React](https://lucide.dev) - Iconos
- [Class Variance Authority](https://cva.style) - Variantes de componentes
- [clsx](https://github.com/lukeed/clsx) - Clases condicionales

---

## 🤝 Contribución

Para contribuir al proyecto:

1. **Fork** el repositorio
2. **Crea** una rama (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Estándares de Código
```
✓ Usa ESLint (npm run lint)
✓ Componentes funcionales con hooks
✓ Props destructurados
✓ Nombres descriptivos
✓ Comentarios cuando sea necesario
✓ Tests para nuevas funcionalidades
```

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👤 Autor

**Anthony**
- GitHub: [@anthony](https://github.com)
- Email: anthony@example.com

---

## 🎉 Agradecimientos

Agradecemos a todas las comunidades open-source que hacen posible este proyecto:

- **React Team** - Framework reactivo
- **Vite Team** - Build tool ultrarrápido
- **Radix UI Team** - Componentes accesibles
- **Tailwind Labs** - Framework de estilos
- **TanStack** - React Query

---

## ❓ Preguntas Frecuentes

### ¿Cómo agrego un nuevo componente UI?

1. Crear archivo en `src/components/ui/`
2. Basarse en componentes Radix UI
3. Añadir estilos con Tailwind
4. Exportar en index.js (si existe)

### ¿Cómo integro una nueva página?

1. Crear archivo en `src/pages/MyPage.jsx`
2. Importar en `App.jsx`
3. Añadir ruta en React Router

### ¿Cómo agrego una nueva query?

```javascript
const { data, isLoading } = useQuery({
  queryKey: ['key'],
  queryFn: () => base44.entities.Entity.list()
});
```

### ¿Cómo cambio los estilos?

Editar `tailwind.config.cjs` para cambios globales o usar clases Tailwind en JSX.

---

## 📞 Soporte

Para reportar bugs o solicitar features, abre un issue en el repositorio.

---

**Última actualización:** Mayo 2, 2026

Hecho con ❤️ usando React, Vite y Tailwind CSS
