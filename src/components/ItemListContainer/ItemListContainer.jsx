//Consulta mi base de datos
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList/ItemList.jsx';
import  {getProductos, getProducto, updateProducto}  from '../../assets/firebase.js';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} =useParams ()
  //define la forma que se va actualizar mi aplicacion
  useEffect(() => {
    if(category) {
        getProductos().then(products => {
            const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
            const cardProductos = ItemList({productsList})
            setProductos(cardProductos)
        })
    } else {
        getProductos().then(products => {
            const productsList= products.filter(prod => prod.stock > 0)
            const cardProductos = ItemList({productsList})
            setProductos(cardProductos)
        })
    }
  
    //cargarBDD().then(productos => console.log(productos))
    //getProductos().then(productos => console.log(productos))
    //getProducto("xR3B0WUd6agrCEqvynmC").then(prod => console.log(prod))
     /*getProducto("2FobDyPVeywMPFlcrNiE").then(prod => {
                prod.stock -= 16
                delete prod.id
                updateProducto("yYr96bsaxN9dsSIqCAtR", prod).then(estado => console.log(estado))
            })*/
},[category]);

    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );

}

export default ItemListContainer;