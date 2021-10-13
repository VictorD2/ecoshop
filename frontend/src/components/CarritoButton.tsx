import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
const CarritoButton: React.FC = () => {
  return (
    <div className="position-fixed carrito_button text-center d-flex justify-content-center align-items-center">
      <Link to="/Carrito">
        <GiShoppingCart className="text-dark mb-2" />
      </Link>
    </div>
  );
};

export default CarritoButton;
