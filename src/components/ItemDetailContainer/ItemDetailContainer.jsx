import { useState,useEffect } from "react"
import { getProducto } from "../../assets/firebase";
import ItemDetail from "../ItemDatail/ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
   

    useEffect(() => {
        getProducto(id).then(prod => setProducto(prod))
        
 
}, [id]);
    return (
        <div className={`card mb-3 container  'text-white bg-secondary' : 'border-light'}`}>
            <ItemDetail item={producto}/>
       
        </div>
    );
}

export default ItemDetailContainer;
