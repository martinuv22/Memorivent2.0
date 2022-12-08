import './Navbar.css';
import Categorias from "./Categorias/Categorias";
 import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
     
         <div className="collapse navbar-collapse">
            <Categorias/>
         </div>
            <CartWidget/>
        </div>
      
          
      </nav>

    );
}

export default Navbar;
