import React from "react";

interface CarritoProps {
  nombreProducto: string;
  precio: number;
  photo: string;
}

const CarritoProducto: React.FC<CarritoProps> = (props) => {
  return (
    <div className="carrito-producto">
      <div className="carrito-producto__imagen text-center">
        <img className="img-fluid" src={props.photo} alt="" />
      </div>

      <div className="carrito-producto__datos ms-2">
        <h4 className="text-uppercase fw-bold fs-5 mt-4 mt-lg-0">{props.nombreProducto}</h4>
        <input className="input-cantidad form-control" type="number" />
        <h5 className="align-self-end mt-5">S/. {props.precio}</h5>
      </div>
    </div>
  );
};

export default CarritoProducto;
