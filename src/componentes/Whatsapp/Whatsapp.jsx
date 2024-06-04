import React from 'react'
import './Whatsapp.css'

const Whatsapp = () => {
    const numeroTelefono = '+542944134510'; 
    const mensaje = "Hola, ¿cómo estás?";
const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
  return (
    <a href={url} target="_blank" className="whatsapp-icon">
      <i className="bi bi-whatsapp"></i>
    </a>
  )
}

export default Whatsapp