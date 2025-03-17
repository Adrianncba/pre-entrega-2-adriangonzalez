import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/ItemListContainer/ItemListContainer.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  const [cart, setCart] = useState([]);
  const clearCart = () => setCart([]);
  const cantidadEnCarrito = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  
  return (
    <CartContext.Provider value={{ cart, setCart, cantidadEnCarrito, clearCart }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/nosotros" element={<Nosotros/>} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
