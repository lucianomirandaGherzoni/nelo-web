import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { db } from "../../services/config";
import Item from "../Item/Item";
import { collection, getDocs} from "firebase/firestore";
import './SliderProduct.css'

const SliderProduct = () => {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = collection(db, "productos");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [])


    const product =  productos.map(item => <Item key ={item.id}{...item}/>) ;


    return (
        <div className="slider-productos">
            <div className="titulo-slider">
             PRODUCTOS DESTACADOS🔥
            </div>
            <Carousel responsive={responsive}>
               {product}
            </Carousel>;
        </div>
    )
}

export default SliderProduct