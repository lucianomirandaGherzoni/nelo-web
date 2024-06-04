import './About.css'
import BannerTitulo from '../BannerTitulo/BannerTitulo'

const About = () => {

  const galeriaUno = "../img/galeria/galeria-1.jpg";
  const galeriaDos = "../img/galeria/galeria-2.jpg";
  const galeriaTres = "../img/galeria/galeria-3.jpg";
  const galeriaCuatro = "../img/galeria/galeria-4.jpg";
  const galeriaCinco = "../img/galeria/galeria-5.jpg";
  const galeriaSeis = "../img/galeria/galeria-6.jpg";
  const galeriaSiete = "../img/galeria/galeria-7.jpg";
  const galeriaOcho = "../img/galeria/galeria-8.jpg";
  const galeriaNueve = "../img/galeria/galeria-9.jpg";
  const galeriaDiez = "../img/galeria/galeria-10.jpg";
  const galeriaOnce = "../img/galeria/galeria-11.jpg";
  const galeriaDoce = "../img/galeria/galeria-12.jpg";

  return (
    <div id='about'>
      <BannerTitulo titulo="" subtitulo="Galeria de Nelo" />

      <div className='about'>

        <div className='about-imagenes'>
          <div className='grande'><img src={galeriaUno} alt="NeloWorks Historia" /></div>
          <div className='mediano'><img src={galeriaDos} alt="NeloWorks Historia" /></div>
          <div className='grande'><img src={galeriaTres} alt="NeloWorks Historia" /></div>
          <div className='chico'><img src={galeriaCuatro} alt="NeloWorks Historia" /></div>
          <div className='grande'>
            <img src={galeriaCinco} alt="NeloWorks Historia" />
          </div>
          <div className='chico'><img src={galeriaSeis} alt="NeloWorks Historia" /></div>
          <div className='mediano'><img src={galeriaSiete} alt="NeloWorks Historia" /></div>
          <div className='grande'><img src={galeriaOcho} alt="NeloWorks Historia" /></div>
          <div className='chico'><img src={galeriaNueve} alt="NeloWorks Historia" /></div>
          <div className='chico'><img src={galeriaDiez} alt="NeloWorks Historia" /></div>
          <div className='grande'><img src={galeriaOnce} alt="NeloWorks Historia" /></div>
          <div className='mediano'><img src={galeriaDoce} alt="NeloWorks Historia" /></div>
          <div className='chico'><img src={galeriaDiez} alt="NeloWorks Historia" /></div>
          <div className='chico'><img src={galeriaOnce} alt="NeloWorks Historia" /></div>

        </div>
        <div className='about-contenido'>
          <div>
            <h3>Historia</h3>
            <p> Nacho, un artesano apasionado, da vida a alfombras únicas con la técnica <strong>Tufting.</strong> Cada pieza, elaborada con materiales naturales y técnicas tradicionales, refleja la belleza de su región.
              Inspirado por <strong>Neloworks</strong>, Nacho crea alfombras con diseños vibrantes y texturas suaves. Su trabajo no solo es un arte, sino también un compromiso con sus clientes.
              Las alfombras de Neloworks son más que alfombras; <strong>son piezas únicas que cuentan historias</strong>, conectan con la tradición y aportan calidez a cualquier espacio.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About