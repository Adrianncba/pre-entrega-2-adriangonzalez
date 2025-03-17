// ItemDetailContainer.js

import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./ItemDetailContainer.css";
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from "../../firebase/data";

function ItemDetailContainer() {
  const { productoId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "products", productoId);
    getDoc(docRef)
    
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() })

      })
  }, [productoId]);

  return (
    <div className="item-detail-container">
      {item ? (
        <ItemDetail {...item} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;