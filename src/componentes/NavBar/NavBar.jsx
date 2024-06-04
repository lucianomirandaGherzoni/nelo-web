import React from 'react'
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
    const logoNelo = "../img/logo-letras.png";
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body  navbar-color" data-bs-theme="dark">
                <div className="container-fluid navbar-boostrap">
                    <Link to="/"><img className='logo navbar-brand' src={logoNelo} alt="logo Nelo" /> </Link>
                    <button className="navbar-toggler" type="button" >
                    <CardWidget />
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                       
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/"> Inicio </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <strong className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </strong>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="productos">Todos los Productos</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="categoria/1">Alfombras</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="categoria/2">Tapices</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="categoria/3">Deco</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="Contacto"> Contacto </NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="Informacion"> Informacion de Envios </NavLink>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link active" > <CardWidget /> </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
