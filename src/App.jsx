import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/ItemListContainer/ItemListContainer.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda" />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/producto/:productoId" element={<ItemDetailContainer/>}/>
      </Routes>

       

      </BrowserRouter>






  );
}

export default App;
