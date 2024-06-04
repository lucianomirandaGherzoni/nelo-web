import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer id='footer'>
      <div>
        <img src="../img/logo-circulo.png" alt="logo" />
      </div>
      <div> 
      <div className='redes'><h3>REDES</h3>
        <ul>
          <li><i className="bi bi-tiktok"></i></li>
          <li><i className="bi bi-instagram"></i></li>
          <li><i className="bi bi-whatsapp"></i></li>
          <li><i className="bi bi-facebook"></i></li>
        </ul>
      </div>
      <div className='contacto'>
        <h3>CONTACTO</h3>
        <div className='contacto-datos'>
        <i className="bi bi-phone"><strong> +54 - 2944134510</strong></i>
        <i className="bi bi-envelope-at"><strong> Neloworks.turfting@gmail.com</strong> </i>
        </div>
      </div>
      </div>
      
      <div className='categorias'>
        <h3>CATEGORIAS</h3>
        <ul>
        <Link to='/'><li>Inicio</li> </Link>
           <Link to='productos'><li>Productos</li></Link>
          <Link to='contacto'><li>Contacto</li></Link>
          <Link to='informacion'><li>Informacion de envios</li></Link>
          <Link to='productos'><li>Seguir Comprando!</li></Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer