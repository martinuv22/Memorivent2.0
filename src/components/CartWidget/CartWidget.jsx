import {Link} from "react-router-dom"
import { useCarritoContext } from "../../context/CarritoContex";

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <button><Link to='/cart'><img src="https://firebasestorage.googleapis.com/v0/b/memorivent.appspot.com/o/cart.png?alt=media&token=3e100bed-0990-494a-9af5-b35a14960290" alt="" /></Link> 
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </button>

        </>
    );
}

export default CartWidget;
