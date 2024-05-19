import React from 'react';

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 bg-red-100 rounded-lg text-center">
      <h2 className="text-xl font-semibold text-red-600">Algo deu errado ;(</h2>
      <p className="text-red-500 mt-2">{error.message}</p>
      <p className="text-red-500 mt-2">Por favor, recarregue a pagina e faça login novamente para continuar.</p>
    </div>
  );
};