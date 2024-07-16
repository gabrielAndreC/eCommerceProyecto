import './css/main.css'
import NavBar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx'
import ItemCount from './components/itemCount/itemCount.jsx'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <div className='appWrapper'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido!"}/>}/>
          <Route path='/dist/index.html' element={<ItemListContainer greeting={"Bienvenido!"}/>}/>
          <Route path='/eCommerceProyecto/dist/index.html' element={<ItemListContainer greeting={"Bienvenido!"}/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 N0T F0UND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
