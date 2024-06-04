import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <div className="carrito-main">
                    <div className="carrito-vacio">
                    </div>
                    <div className="carrito-vacio-contenido">
                        <h2>No hay productos en el carrito, Por favor seleccione al menos un producto! </h2>
                        <Link to="/productos"> <button> Ver Productos </button></Link>
                    </div>
                </div>

            </>
        )
    }

    return (
        <div className="items-carrito-card" >
            <div className="items-carrito">
                { carrito.map(producto => <CartItem key= {producto.item.id} {...producto} />) }
            </div>

            <aside className="carrito-total">
                <h4>Cantidad de productos seleccionados:  <strong> {cantidadTotal} </strong> </h4>
                <h4>Total: <strong>${total} </strong>  </h4>


                <div className="botones-carrito">
                    <button onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
                    <Link to="/checkout">Finalizar Compra</Link>
                </div>

            </aside>

        </div>
    )
}
export default Cart