import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'; // Puedes agregar estilos si es necesario
import { CartContext } from '../../context/CartContext';

function ItemDetail(item) {

    const { image, title, description, price, category } = item;
    const { cart, setCart } = useContext(CartContext);
    const [quantityAdded, setQuantityAdded] = useState(0)
    const handleAdd = (quantity) => {
        setQuantityAdded(quantity);
        // Buscar si el producto ya está en el carrito
        const productInCart = cart.find((product) => product.item.id === item.id);

        if (productInCart) {
            console.log('Ya existe el producto en el carrito');
            // Actualizar la cantidad y recalcular el precio total (precio * cantidad)
            const updatedCart = cart.map((product) =>
                product.item.id === item.id
                    ? {
                        ...product,
                        quantity: product.quantity + quantity,
                        totalPrice: (product.item.price * (product.quantity + quantity))  // Multiplicar precio por nueva cantidad
                    }
                    : product
            );

            setCart(updatedCart);
        } else {
            console.log('No existe el producto en el carrito y se agrega');

            // Añadir el producto al carrito con el precio y cantidad inicial
            setCart([...cart, {
                item,
                quantity,
                totalPrice: item.price * quantity // Multiplicar precio inicial por cantidad
            }]);
        }
    };


    return (
        <div className="card">
            <img src={image} alt={title} className="card-img" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <p className="card-category">Categoría: {category}</p>

                <div className='contenedor-contador'>

                    {quantityAdded > 0 ?

                        (
                            <button className='button-terminar-compra'> <Link to='/cart' className='button-terminar-compra'>Terminar compra</Link> </button>
                        )
                        :
                        (
                            <ItemCount
                                initial={1}
                                stock={10}
                                onAdd={handleAdd}
                            />
                        )
                    }

                </div>
                <button className='button-volver'><Link to="/">VOLVER</Link> </button>

            </div>
        </div>
    );
}

export default ItemDetail;