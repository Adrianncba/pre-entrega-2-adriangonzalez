import './ItemListContainer.css';
import { getProducts, getCategorById } from '../../asynMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const asynFun = categoryId ? getCategorById : getProducts;
        asynFun(categoryId)
            .then((resp) => {
                setProducts(resp)
            })
            .catch((err) => {
                console.log("Error en la carga de datos con categoria")
            })
    }, [categoryId])

    return (
        <div className="item-list-container">
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;