import HeroCarrusel from "../HeroCarrusel/HeroCarrusel";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import About from "../About/About";
import SliderProduct from "../SliderProduct/SliderProduct";
import BannerCategorias from "../BannerCategorias/BannerCategorias";

const Inicio = () => {
  return (
    <>
     <HeroCarrusel/>
     <BannerCategorias/>
     <SliderProduct/>
     <ItemListContainer/>
     <About/>
    </>
  )
}

export default Inicio