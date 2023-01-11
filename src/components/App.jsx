/////Componente padre
//importaciones generales 
//CSS
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
//rutas o ROuter DOM
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//Toastify
import { ToastContainer } from 'react-toastify';

//componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
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
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
        <ToastContainer/>
         </BrowserRouter>
    </>

  );
}

export default App;
