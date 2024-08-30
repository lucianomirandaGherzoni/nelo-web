import './BannerInfo.css';

const BannerInfo = () => {
  return (
    <>
    <section className='info-container'>
        <div className='envio-container'>
            <div className='iconos-info'>
            <i className="bi bi-airplane"></i>
            </div>
            <ul>
                <li><strong>Envios gratis</strong></li>
                <li className='borde-inferior'> </li>
                <li>a partir de $99.000</li>
                <li>ver productos</li>
            </ul>
        </div>

        <div className='pagos-container'>
        <div className='iconos-info'>
        <i className="bi bi-cash-coin"></i>
        </div>
            <ul>
                <li><strong>3 , 6 , 9 y 12 cuotas sin interés</strong></li>
                <li className='borde-inferior'> </li>
                <li>A partir de $180.000</li>
                <li>A partir de $260.000</li>
            </ul>
        </div>

        <div className='cambios-container'>
        <div className='iconos-info'>
        <i className="bi bi-arrow-clockwise"></i>
        </div>
            <ul>
                <li><strong>¿Queres cambiarlo?</strong></li>
                <li className='borde-inferior'> </li>
                <li>Cambio gratis hasta 30 días</li>
                <li>ver productos</li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default BannerInfo