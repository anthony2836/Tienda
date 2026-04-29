import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-black tracking-[-0.04em] uppercase mb-4">UrbanStyle</h3>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Ropa urbana premium para quienes definen su propio estilo. Calidad, diseño y actitud.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4">Tienda</h4>
            <ul className="space-y-3">
              {['Camisetas', 'Pantalones', 'Sudaderas', 'Zapatillas', 'Accesorios'].map(cat => (
                <li key={cat}>
                  <Link
                    to={`/categoria/${cat.toLowerCase()}`}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4">Información</h4>
            <ul className="space-y-3">
              {['Envíos y devoluciones', 'Guía de tallas', 'Contacto', 'Sobre nosotros'].map(item => (
                <li key={item}>
                  <span className="text-sm text-background/60 hover:text-background transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4">Síguenos</h4>
            <ul className="space-y-3">
              {['Instagram', 'TikTok', 'Twitter / X', 'YouTube'].map(item => (
                <li key={item}>
                  <span className="text-sm text-background/60 hover:text-background transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} UrbanStyle. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-background/40">Términos</span>
            <span className="text-xs text-background/40">Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}