import { Link } from 'react-router-dom';
import './BannerCategorias.css';

const BannerCategorias = () => {
  return (
    <section className='banner-categorias'>
      <div><Link to='productos'>TODOS LOS PRODUCTOS</Link></div>
      <div><Link to='categoria/1'>ALFOMBRAS</Link></div>
      <div><Link to='categoria/2'>TAPICES</Link></div>
      <div><Link to='categoria/3'>DECO</Link></div>
    </section>
  )
}

export default BannerCategorias