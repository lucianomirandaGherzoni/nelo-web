import { Link } from 'react-router-dom';
import './HeroCarrusel.css';
import BannerTitulo from '../BannerTitulo/BannerTitulo';

const HeroCarrusel = () => {
    const imgUno = "../img/hero/bob-esponja-hero.jpg";
    const imgDos = "../img/hero/cama-hero.jpg";
    const imgTres = "../img/hero/sillas-hero.jpg";

    return (
        <>
            <div className='hero-content'>

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-indicators indicadores-carrusel ">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner carruselAltura">

                        <div className="carousel-item active">
                            <img src={imgTres} className="d-block w-100 img" alt="NeloWorks Pastas Imagenes" />
                            <div className="carousel-caption2">
                                <img src="../img/logo-letras.png" alt="logo Nelo" />
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={imgUno} className="d-block w-100 img" alt="NeloWorks Pastas Imagenes" />
                            <div className="carousel-caption">
                                <h2 className="descripcion-imagen"> 20% de descuento pagando con transferencia</h2>
                                <Link to='productos'><button> Ver Productos </button>  </Link>
                            </div>
                        </div>
                        
                        <div className="carousel-item">
                            <img src={imgDos} className="d-block w-100 img" alt="NeloWorks Pastas Imagenes" />
                            <div className="carousel-caption2">
                                <img src="../img/logo-circulo.png" alt="logo Nelo" />
                            </div>

                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">                    
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">                       
                    </button>
                </div>


            </div>
            <BannerTitulo titulo="" subtitulo="Dale personalidad a tu espacio con alfombras hechas a mano :)" />

        </>
    )
}

export default HeroCarrusel