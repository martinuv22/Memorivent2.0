import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <div className="row g-0 cardProductos ">
        <div className="col-md-4 ">
            <img src={`../imagenes/${item.img}`} alt="" className="img-fluid rounded-s"/>
        </div>
        <div className="col-md-8">
          <h5 className="card-title">{item.nombre} </h5> 
          <p className="card-text">Marca:{item.marca}</p>
          <p className="card-text">Memoria:{item.memoria}</p>
          <p className="card-text">Color:{item.color}</p>
          <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
          <p className="card-text">stock:{item.stock}</p>
          <ItemCount stock={item.stock}/>
          <button className="btn btn-secondary">Finalizar Compra</button>
        </div>
        </div>
    );
}

export default ItemDetail;
