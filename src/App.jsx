import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import Cart from './componentes/Cart/Cart';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Inicio from './componentes/Inicio/inicio';
import ItemDetailContainer from './componentes/ItemDetailConteiner/ItemDetailContainer';
import Whatsapp from './componentes/Whatsapp/Whatsapp';
import Footer from './componentes/Footer/Footer';
import Checkout from './componentes/Checkout/Checkout';
import Contacto from './componentes/Contacto/Contato';
import Informacion from './componentes/Informacion/Informacion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar /> 
        <Routes>
          <Route path='/' element ={ <Inicio/>} />
          <Route path='/productos' element ={ <ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element ={ <ItemListContainer />} />
          <Route path='/item/:idItem' element ={ <ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/About' element ={ <ItemListContainer />} />
          <Route path='/Informacion' element ={ <Informacion />} />
          <Route path='/Contacto' element ={ <Contacto />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<h2>ERROR 404 </h2>} />
        </Routes>
        <Whatsapp/>
        <Footer/>
      </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App