import React from 'react'
import photo from '../pages/Carrito/Carrito';

interface CarritoProps {
    nombreProducto: string;
    precio: number;
    photo: string;
}


const CarritoProducto = (props: CarritoProps) => {
    return (
        <div className="carrito-producto ">
            <div className="carrito-producto__imagen text-center">
                <img className="img-fluid" src={props.photo} alt="" />
            </div>

            <div className="carrito-producto__datos">
                <h4 className="text-uppercase">{props.nombreProducto}</h4>
                <input className="input-cantidad text-right my-3" type="number" />
                <h5>S/. {props.precio}</h5>
            </div>

        </div>
    )
}

export default CarritoProducto
