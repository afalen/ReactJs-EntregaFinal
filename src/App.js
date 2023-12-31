import './App.css';
import "bulma/css/bulma.css";
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>

          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/cart' element={ <Cart/> } />
            <Route path='/detalle/:itemId' element={ <ItemDetailContainer/> } />
            <Route path='/checkout' element={ <Checkout /> }/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>

        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
