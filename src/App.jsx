import './css/main.css'
import NavBar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx'


function App() {
  return(
    <div className='appWrapper'>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido!"}/>
    </div>
  )
}

export default App
