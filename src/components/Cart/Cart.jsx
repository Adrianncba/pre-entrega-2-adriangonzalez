import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/data';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext); // Usamos clearCart aquí
  const navigate = useNavigate();
  const checkoutRef = collection(db, "checkout");
  const totalCartPrice = cart.reduce((acc, product) => acc + (product.item.price * product.quantity), 0);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const order = {
      items: cart.map(item => ({
        id: item.item.id,
        title: item.item.title,
        price: item.item.price,
        quantity: item.quantity,
      })),
      total: totalCartPrice,
      date: new Date(),
    };

    try {
      const docRef = await addDoc(checkoutRef, order);
      console.log("Compra realizada, ID de la orden: ", docRef.id);

      // ✅ Vaciar el carrito después de la compra
      clearCart();

      // ✅ Redirigir al Checkout pasando el orderId
      navigate("/checkout", { state: { orderId: docRef.id } });

    } catch (error) {
      console.error("Error al procesar la compra: ", error);
      alert("Hubo un error al realizar la compra.");
    }
  };

  return (
    <div className="cart-container">
      <h1>Carrito</h1>
      <ul className="cart-list">
        {cart.map((product) => (
          <li key={product.item.id} className="cart-item">
            <img src={product.item.image} alt={product.item.title} className="cart-item-img" />
            <div className="cart-item-info">
              <h2 className="cart-item-title">{product.item.title}</h2>
              <div className="cart-item-details">
                <p className="cart-item-quantity">Cantidad: {product.quantity}</p>
                <p className="cart-item-price">Precio: ${product.item.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h2>Total: ${totalCartPrice}</h2>
      </div>
      <div>
        <button className="cart-checkout" onClick={handleCheckout}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
