import React from "react";
import producto from "../../images/producto.png";
const ListaProductoItem: React.FC = () => {
  return (
    <div className="col-md-3 me-lg-5 mt-lg-5 me-0 mt-3 d-flex flex-column">
      <div className="w-100">
        <img className="img-fluid w-100" src={producto} alt="Producto" />
      </div>
      <div className="w-100 mt-3">
        <h5 className="text-uppercase fw-bold">MERMELADA LIGHT</h5>
      </div>
      <div>
        <p className="text-capitalize text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat molestiae iure perspiciatis quisquam est totam repudiandae soluta neque repellat blanditiis aliquam iste, maiores consequuntur rem labore, provident, illo laborum.</p>
      </div>
    </div>
  );
};

export default ListaProductoItem;
