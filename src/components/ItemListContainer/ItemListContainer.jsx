import './ItemListContainer.css';

import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../firebase/data.js";

function ItemListContainer() {
    
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const productosRef = collection(db, "products");
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef;

        getDocs(q)
            .then((resp) => {
                setProducts(
                    resp.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                )
            })

    }, [categoryId])

    return (
        <div className="item-list-container">
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;