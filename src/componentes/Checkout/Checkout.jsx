import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css';

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState(""); 
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext);

 

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos!!");
            return;
        }



        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden!!");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre, 
            apellido,
            telefono, 
            email
        };


        Promise.all(
            orden.items.map( async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc( productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(() => {

            addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch( error => {
                setError("Se produjo un error al crear la orden.");
            })
        })
        .catch((error) => {
            setError("Se produjo un error al actualizar el stock.");
        })

    }

  return (
    <div className="contenedor-checkout">
        <h2>Finaliza tu compra! </h2>
        <div className=""> </div>
        {
                carrito.map(producto => (
                    <div key={producto.item.id} className="item-carrito">
                        <p> {producto.item.nombre} x {producto.cantidad}</p>
                     
                        <hr />
                    </div>
                ))
            }
        <form onSubmit={manejadorFormulario}>
           
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder="Nombre" onChange={(e)=> setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" placeholder=" Apellido"onChange={(e)=> setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" placeholder="Telefono"onChange={(e)=> setTelefono(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email"onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Email Confirmación</label>
                <input type="email" placeholder="Email"onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>

            {
                error && <p style={{color:"red"}}> {error} </p>
            }

            <button type="submit"> Confirmar Compra </button>

            {
                ordenId && (
                    <strong className="fin-compra">¡Gracias por tu compra! Tu número de orden es: {ordenId} </strong>
                )
            }

        </form>
    </div>
  )
}

export default Checkout