import './CartWidget.css';

function CartWidget() {
    return (
        <div className="cart-widget">
            <img src="https://www.svgrepo.com/show/415705/cart-checkout-ecommerce-2.svg" alt="cart" />
            <p><span>0</span></p>
        </div>
    );
}

export default CartWidget;  