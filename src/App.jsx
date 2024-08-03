import './css/main.css'
import NavBar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext.jsx'
import Cart from './components/cart/cart.jsx'
import Checkout from './components/checkout/checkout.jsx'


function App() {
  return(
    <div className='appWrapper'>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido!"}/>}/>
          <Route path='/dist/index.html' element={<ItemListContainer greeting={"Bienvenido!"}/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='*' element={<h1>404 N0T F0UND</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
