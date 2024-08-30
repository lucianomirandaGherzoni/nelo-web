import React from 'react'
import './Whatsapp.css'

const Whatsapp = () => {
  const numeroTelefono = '+542944134510';
  const mensaje = "Hola, ¿cómo estás?";
  const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
  return (
    <div className="whatsapp-icon">
      <a href={url} target="_blank" >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>

  )
}

export default Whatsapp