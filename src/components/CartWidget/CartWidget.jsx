import { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';

function CartWidget() {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FA5252/shopping-cart--v1.png" alt="shopping-cart--v1" />
             <p>
                <span>{cantidadEnCarrito}</span>
             </p>
        </div>
    );
}

export default CartWidget;  