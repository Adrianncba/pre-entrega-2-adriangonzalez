import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        quantity < stock && setQuantity(quantity + 1)
    }

    const decrement = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }


    return (
        <div>
            <div className="Contador">
                <div className="botones-contador">
                    <button className="quantity-btn" onClick={decrement}>-</button>
                    <h4 className="numero-contador">{quantity}</h4>
                    <button className="quantity-btn" onClick={increment}>+</button>
                </div>
                <div className="boton-agregar">
                    <button className="add-to-cart-btn"
                        onClick={() => onAdd(quantity)} disabled={!stock}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
