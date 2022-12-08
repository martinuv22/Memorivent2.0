import './Categorias.css';
import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        
    <div className="navbar-nav me-auto mb-2 mb-lg-0">
        <button className='nav-link btn btn-secondary'> <Link  className="botonLogo "  to={"/"}>Memorivent</Link></button>
                 
            
        <button className='btn btn-secondary' ><Link className="botones" to={"/category/Pendrives"}>Pendrives</Link></button>
  
        <button className='btn btn-secondary'><Link className="botones" to={"/category/Discos"}>Discos Duros Externos</Link></button>


        <button className='btn btn-secondary'><Link className="botones" to={"/category/Tarjetas"}>Tarjetas de Memoria</Link></button>

      
    </div>
    );
}

export default Categorias;
