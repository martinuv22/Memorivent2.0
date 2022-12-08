//Recibe un objeto
import { Link } from "react-router-dom";
const Item = ({prod}) => {
    console.log(prod)
    return (
        <div className="card border-light mb-3 cardProducto">
                        <img src={`../imagenes/${prod.img}`}className="card-img-top" alt="..." />
                        <div className="card-body cardBody">
                            <h5 className="card-title">{prod.nombre} </h5>
                            <p className="card-text">Marca:{prod.marca}</p>
                            <p className="card-text">Memoria:{prod.memoria}</p>
                            <p className="card-text">Color:{prod.color}</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-secondary bCarrito'><Link className="nav-link" to={`/product/${prod.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;