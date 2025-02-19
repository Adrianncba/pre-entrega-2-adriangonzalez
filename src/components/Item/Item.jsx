import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

function Item({ product }) {


    return (
        
        <div className='item-list'>
            <div className='item'>
                <img className='item-image' src={product.image} alt="" />
                <h2>{product.title}</h2>
                <Link to={`/producto/${product.id}`}>VER DETALLES</Link>
            </div>
        </div>

    )
}

export default Item
