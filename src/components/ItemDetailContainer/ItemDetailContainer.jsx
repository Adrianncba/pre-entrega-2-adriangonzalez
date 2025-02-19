import { getProductsById } from '../../asynMock';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./ItemDetailContainer.css";
import { Link } from 'react-router-dom';

function ItemDetailContainer() {
  const { productoId } = useParams();
  const [count, setCount]= useState(0);
  const [item, setItem] = useState(null);

  const handleClickSuma = () =>{
    count = setCount(count+1)
  }
  const handleClickResta = () =>{
    count = setCount(count-1)
  }


  useEffect(() => {
    getProductsById(productoId)
      .then((res) => {
        setItem(res);
      });
  }, [productoId]);


  return (
    <div className="item-detail-container">
      {item ? (
        <div className="card">
          <img src={item.image} alt={item.title} className="card-img" />
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-description">{item.description}</p>
            <p className="card-price">${item.price}</p>
            <p className="card-category">Categoría: {item.category}</p>

            <div className="quantity-controls">
              <button onClick={handleClickSuma}> + </button>
              <p>{count}</p>
              <button onClick={handleClickResta}> - </button>
            </div>

            <button className="add-to-cart-btn">Agregar al carrito</button>
   
            <Link to="/">VOLVER</Link>
          </div>
        </div>
      ) : (
        <p>Cargando producto...</p>  
      )}
    </div>
  );
}

export default ItemDetailContainer;
