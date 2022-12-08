/////Componente padre
//importaciones generales 
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
//componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
function App() {
  /*const boton=document.getElementById("boton1")
  console.log(boton) nose puede hacer esa forma*/
  return (
    <> 
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
