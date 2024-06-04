import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import "./CardWidget.css";

const CardWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    
    return (

        <Link to="/cart">
            <div className='carrito'>
            <i className="bi bi-cart2"></i>
                {
                    cantidadTotal > 0 && <strong className='numerito'> {cantidadTotal} </strong>
                }
            </div>
        </Link>

    )
}

export default CardWidget;