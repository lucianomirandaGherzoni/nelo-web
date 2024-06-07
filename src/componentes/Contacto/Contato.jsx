import React, { useState } from 'react';
/* import { EmailJS } from 'emailjs'; */

import './Contacto.css';

const Contato = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarFormulario = (e) => {
    e.preventDefault();
/* 
    const { serviceId, templateId, userId } = process.env.REACT_APP_EMAILJS_CONFIG; */

    const params = {
      nombre: nombre,
      correo: correo,
      mensaje: mensaje,
    };

  /*   EmailJS.send(serviceId, templateId, params, userId)
      .then(() => {
        alert('¡Mensaje enviado correctamente!');
        // Limpiar los campos del formulario
        setNombre('');
        setCorreo('');
        setMensaje('');
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
      }); */
  };
  return (
    <section className='seccionContacto'> 
      <form onSubmit={enviarFormulario}>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <label>Correo electrónico:</label>
      <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />

      <label>Mensaje:</label>
      <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} />

      <button type="submit">Enviar</button>
    </form>
    </section>
   
  )
}

export default Contato