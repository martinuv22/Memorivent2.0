import { Link } from "react-router-dom";

import { useCarritoContext } from "../../context/CarritoContex";
const Cart = () => {

    const {carrito,emptyCart, totalPrice, removeItem} = useCarritoContext()
    return (
        <>
        
            {carrito.length === 0 ? 
            <>
                <h1>EL carrito se encuntra vacio haga click en el boton debajo para continuar comprando:</h1>
                <button className="btn btn-dark"><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
            </>
            :
            <div className="container cartContainer  ">
                    {carrito.map((prod) =>
                    <div className= {`card mb-3  'text-white bg-secondary' : 'border-light'}`}  key={prod.id} style={{maxWidth: '540px'}}>
                
                        <div className="row g-0 cardProductos ">
                            <div className="col-md-4">
                                <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                        <div >
                            <h5 className="card-title">{`${prod.nombre}    ${prod.marca}`}</h5>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Precio unitario: $ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</p>
                            <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                        </div>  
                    </div>
                    </div>
                </div>   
                )}

                <div>
                    <p>Resumen de la compra: ${ new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                    <button className="btn btn-dark"><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
                    <button className="btn bOtros"><Link  className="nav-link" to={'/checkout'}>Finalizar Compra</Link></button>
                </div>   
            </div>

            }
        </>
        
    );
}
export default Cart;
