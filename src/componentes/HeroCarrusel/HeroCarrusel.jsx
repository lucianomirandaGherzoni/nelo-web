
import './HeroCarrusel.css';
import BannerInfo from '../BannerInfo/BannerInfo';

const HeroCarrusel = () => {
    const imgUno = "../img/hero/uno.webp";
    const imgDos = "../img/hero/dos.webp";
    const imgTres = "../img/hero/tres.webp";

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
                            <img src={imgUno} className="d-block w-100 img" alt="NeloWorks Imagenes" />
                            <div className="carousel-caption2">
                                <img src="../img/logo-letras.webp" alt="logo Nelo" />
                            </div>
                        </div>

                        <div className="carousel-item active">
                            <img src={imgDos} className="d-block w-100 img" alt="NeloWorks Imagenes" />
                            <div className="carousel-caption2">
                                <img src="../img/logo-letras.webp" alt="logo Nelo" />
                            </div>
                        </div>
                        
                        <div className="carousel-item active">
                            <img src={imgTres} className="d-block w-100 img" alt="NeloWorks Imagenes" />
                            <div className="carousel-caption2">
                                <img src="../img/logo-letras.webp" alt="logo Nelo" />
                            </div>

                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">                    
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">                       
                    </button>
                </div>


            </div>
           <BannerInfo/>

        </>
    )
}

export default HeroCarrusel