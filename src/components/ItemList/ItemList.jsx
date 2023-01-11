//Cambia o modifica el mi objeto, recibe un array

import Item from "../Item/Item";

const ItemList = ({productsList}) => {
    return (
        <>
        
            {productsList.map(product => <Item key={product.id} prod = {product}/>)}
        </>
    );
}

export default ItemList;