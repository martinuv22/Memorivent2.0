//Consulta mi base de datos
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import  consultarBDD from '../../assets/funciones.js'
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} =useParams ()
  //define la forma que se va actualizar mi aplicacion
  useEffect(() => {
    if(category) {
        consultarBDD('../json/productos.json').then(products => {
            const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
            const cardProductos = ItemList({productsList})
            setProductos(cardProductos)
        })
    } else {
        consultarBDD('./json/productos.json').then(products => {
            const productsList= products.filter(prod => prod.stock > 0)
            const cardProductos = ItemList({productsList})
            setProductos(cardProductos)
        })
    }


},[category]);

    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );

}

export default ItemListContainer;