import { useState, useContext } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import SliderProduct from '../SliderProduct/SliderProduct';
import SliderDos from '../SliderDos/SliderDos';
import './ItemDetail.css';


const ItemDetail = ({ id, nombre, precio, img, descripcion, descripcionDos, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarAlCarrito } = useContext(CarritoContext);


    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad)
    }

    return (

        <>
            <div className='contenedor-detalles'>

                <div className='card-detalles'>
                    <div className='contenedor-imagen'>
                        <img src={img} alt={nombre} />
                    </div>

                    <div className='contenedor-descripcion'>

                        <div className='titulo-descripcion'>

                            <div className='titulo'>
                                <h2>{nombre}</h2>
                                <h3>{precio + "$"}</h3>
                            </div>
                            <div className='descripcion'>
                                <p>🔥<strong>descuento 20% </strong> pagando con transferencia <i className="bi bi-cash-coin"></i></p>
                                <p> <i className="bi bi-arrow-bar-right"></i> {descripcion} </p>
                                <p> <i className="bi bi-arrow-bar-right"></i> {descripcionDos} </p>
                                <p> 🚚  <strong> Envio gratis </strong> no te lo pierdas!</p>
                            </div>
                            <div className='compra'>
                                {
                                    agregarCantidad > 0 ? (<Link to="/cart" className='terminar-compra'>Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                                }
                            </div>

                        </div>
                    </div>
                 
                </div>
                <SliderDos/>
            </div>
          
            <SliderProduct />
        </>
    )
}

export default ItemDetail