import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css';

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className="card-carrito">
        <h4> {item.nombre} </h4>
        <p>Cantidad: <strong>  {cantidad} </strong></p>
        <p>Precio: <strong>${item.precio}</strong>  </p>
        <p>SubTotal: <strong> ${item.precio * cantidad} </strong></p>
        <button onClick={()=> eliminarProducto(item.id)}> <i className="bi bi-trash"></i> </button>
        <hr />
    </div>
  )
}

export default CartItem