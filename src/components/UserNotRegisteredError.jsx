import React from 'react';

export default function UserNotRegisteredError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 text-center">
      <div className="max-w-md border-2 border-destructive/20 rounded-lg p-8 bg-destructive/5">
        <h2 className="text-2xl font-bold text-destructive mb-4 tracking-tight">
          Acceso No Autorizado
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Lo sentimos, tu usuario no aparece como registrado o no tienes los permisos necesarios para ver esta tienda. Por favor, contacta con el administrador.
        </p>
      </div>
    </div>
  );
}