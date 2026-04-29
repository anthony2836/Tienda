import React, { useState } from 'react';
import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { ChevronLeft, Lock, CheckCircle } from 'lucide-react';


export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-3">¡Pedido confirmado!</h1>
        <p className="text-muted-foreground mb-8">
          Recibirás un email de confirmación con los detalles de tu pedido.
        </p>
        <Link to="/">
          <Button variant="outline" className="h-12 px-8">Volver a la tienda</Button>
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground mb-4">Tu carrito está vacío</p>
        <Link to="/">
          <Button variant="outline">Volver a la tienda</Button>
        </Link>
      </div>
    );
  }

  const shipping = total >= 50 ? 0 : 4.99;
  const grandTotal = total + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ChevronLeft className="w-4 h-4" />
        Volver a la tienda
      </Link>

      <h1 className="text-2xl lg:text-4xl font-bold tracking-tight mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase mb-4">Contacto</h2>
            <div className="space-y-3">
              <div>
                <Label htmlFor="email" className="text-xs">Email</Label>
                <Input id="email" type="email" required value={form.email} onChange={handleChange('email')} className="h-12 mt-1" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs">Teléfono</Label>
                <Input id="phone" type="tel" required value={form.phone} onChange={handleChange('phone')} className="h-12 mt-1" />
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase mb-4">Dirección de envío</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="firstName" className="text-xs">Nombre</Label>
                <Input id="firstName" required value={form.firstName} onChange={handleChange('firstName')} className="h-12 mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-xs">Apellidos</Label>
                <Input id="lastName" required value={form.lastName} onChange={handleChange('lastName')} className="h-12 mt-1" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="address" className="text-xs">Dirección</Label>
                <Input id="address" required value={form.address} onChange={handleChange('address')} className="h-12 mt-1" />
              </div>
              <div>
                <Label htmlFor="city" className="text-xs">Ciudad</Label>
                <Input id="city" required value={form.city} onChange={handleChange('city')} className="h-12 mt-1" />
              </div>
              <div>
                <Label htmlFor="postalCode" className="text-xs">Código postal</Label>
                <Input id="postalCode" required value={form.postalCode} onChange={handleChange('postalCode')} className="h-12 mt-1" />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase mb-4">Pago</h2>
            <div className="space-y-3">
              <div>
                <Label htmlFor="cardNumber" className="text-xs">Número de tarjeta</Label>
                <Input id="cardNumber" required placeholder="1234 5678 9012 3456" value={form.cardNumber} onChange={handleChange('cardNumber')} className="h-12 mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="expiry" className="text-xs">Fecha de expiración</Label>
                  <Input id="expiry" required placeholder="MM/AA" value={form.expiry} onChange={handleChange('expiry')} className="h-12 mt-1" />
                </div>
                <div>
                  <Label htmlFor="cvv" className="text-xs">CVV</Label>
                  <Input id="cvv" required placeholder="123" value={form.cvv} onChange={handleChange('cvv')} className="h-12 mt-1" />
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-sm font-semibold tracking-wide uppercase rounded-xl"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                Procesando...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Pagar {grandTotal.toFixed(2)} €
              </span>
            )}
          </Button>
        </form>

        {/* Order summary */}
        <div className="lg:col-span-2">
          <div className="bg-muted/50 rounded-2xl p-6 sticky top-28">
            <h2 className="text-sm font-semibold tracking-wide uppercase mb-6">Resumen del pedido</h2>
            <div className="space-y-4">
              {items.map(item => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <div className="w-16 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                    {item.product.images?.[0] && (
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">Talla: {item.size} × {item.quantity}</p>
                    <p className="text-sm font-semibold mt-1">{(item.product.price * item.quantity).toFixed(2)} €</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Envío</span>
                <span>{shipping === 0 ? 'Gratis' : `${shipping.toFixed(2)} €`}</span>
              </div>
              <div className="flex justify-between text-base font-semibold pt-2 border-t border-border mt-2">
                <span>Total</span>
                <span>{grandTotal.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}