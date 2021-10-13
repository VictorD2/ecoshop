import React from "react";
import ListaProductoItem from "./ListaProductoItem";

const ListaProductos: React.FC = () => {
  return (
    <div className="row w-100 justify-content-around mt-4 mt-lg-0 px-lg-0 px-4">
      <ListaProductoItem />
      <ListaProductoItem />
      <ListaProductoItem />
      <ListaProductoItem />
      <ListaProductoItem />
      <ListaProductoItem />
      <ListaProductoItem />
      <ListaProductoItem />
    </div>
  );
};

export default ListaProductos;
