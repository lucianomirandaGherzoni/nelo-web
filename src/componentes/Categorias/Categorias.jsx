import { Link } from "react-router-dom"
import './Categorias.css'

const Categorias = () => {
  return (
    <ul>
        <li><Link></Link><button>Todos los Productos</button></li>
        <li><button>Sorrentinos</button></li>
        <li><button>Tallarines</button></li>
        <li><button>Salsas</button></li>
    </ul>
  )
}

export default Categorias