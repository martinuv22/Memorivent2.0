import {useState} from 'react';

const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador, setContador] = useState(inicial);
    /*
    const boton = document.getElementById("boton1")
    console.log(boton) NO SE PUEDE*/
                            //1
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    const agregarAlCarrito = () => onAdd(contador)
    
    
    return (
        <div>
            <button className='btn btn-dark ' onClick={() => sumar()}>+</button>
                {contador}
            <button className='btn btn-dark ' onClick={() => restar()}>-</button>
            <button className='btn bCarrito' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;

