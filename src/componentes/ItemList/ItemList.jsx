import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ productos }) => {

  return (

    <section className="produtos-contenido">
      <div className="titulo-slider">
        TODOS LOS PRODUCTOS 🔥
      </div>
      <div className="contenedor-productos">
        {productos.map(item => <Item key={item.id}{...item} />)}
      </div>
    </section>
    

  )
}

export default ItemList