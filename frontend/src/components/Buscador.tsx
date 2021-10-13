import React from "react";

import { BiSearchAlt } from "react-icons/bi";
const Buscador = () => {
  return (
    <div className="d-flex flex-row">
      <input placeholder="Buscar producto" type="text" className="form-control search-input" />
      <button className="btn btn-search">
        <BiSearchAlt className="fs-4" />
      </button>
    </div>
  );
};

export default Buscador;
