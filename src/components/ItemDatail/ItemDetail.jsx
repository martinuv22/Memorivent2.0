import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"

import { useCarritoContext } from "../../context/CarritoContex";

const ItemDetail = ({item}) => {
    
    const {addItem} = useCarritoContext()
   const onAdd = (contador) => {
    addItem(item, contador)
   }
    return (
        <div className="row g-0 cardProductos ">
        <div className="col-md-4 ">
            <img src={item.img} alt="" className="img-fluid "/>
        </div>
        <div className="col-md-8 ">
          <h5 className="card-title">{item.nombre} </h5> 
          <p className="card-text">Marca:{item.marca}</p>
          <p className="card-text">Memoria:{item.memoria}</p>
          <p className="card-text">Color:{item.color}</p>
          <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
          <p className="card-text">stock:{item.stock}</p>
          <ItemCount inicial= {1} stock={item.stock} onAdd={onAdd}/>
          <br />
          <button className="btn btn-dark"><Link to="/" className="nav-link">Continuar Comprando</Link></button>
          <button className="btn bOtros"><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
          </div>
        </div>
    );
}

export default ItemDetail;
