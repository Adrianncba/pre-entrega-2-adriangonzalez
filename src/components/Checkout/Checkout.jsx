import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./Checkout.css"

const Checkout = () => {
  const location = useLocation();
  const orderId = location.state?.orderId; // Acceder al orderId

  return (
    <div className="checkout-container">
      <h1>¡Gracias por tu compra!</h1>

      {orderId ? (
        <p>Su orden ha sido realizada con éxito. Este es su ID de compra: <strong>{orderId}</strong></p>
      ) : (
        <p>No hay información de compra disponible.</p>
      )}

      <Link to="/">Volver a la tienda</Link>
    </div>
  );
};

export default Checkout;