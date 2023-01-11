//Recibe un  objeto
import { Link } from "react-router-dom";


const Item = ({prod}) => {

    return (
        <div className={`card mb-3 cardProducto  'text-white bg-secondary' : 'border-light'}`}>
                        <img src={prod.img}className="card-img-top" alt="..." />
                        <div className="card-body cardBody">
                            <h5 className="card-title">{prod.nombre} </h5>
                            <p className="card-text">Marca:{prod.marca}</p>
                            <p className="card-text">Memoria en GB:{prod.memoria}</p>
                            <p className="card-text">Color:{prod.color}</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn  bCarrito'><Link className="nav-link" to={`/product/${prod.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;