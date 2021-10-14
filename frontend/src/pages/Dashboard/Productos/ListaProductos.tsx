import React from "react";
import ProductoItem from "./ProductoItem";

const ListaProductos: React.FC = () => {
  return (
    <table className="table table-bordered table-hover table-striped text-center">
      <caption>Cantidad de productos: 10</caption>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tamaño</th>
          <th scope="col">Precio</th>
          <th scope="col">Imagen</th>
          <th scope="col">Categoría</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <ProductoItem Id={1} Nombre={"Faja"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
        <ProductoItem Id={2} Nombre={"Chaqueta"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
        <ProductoItem Id={3} Nombre={"Faja"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
        <ProductoItem Id={4} Nombre={"Faja"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
        <ProductoItem Id={5} Nombre={"Faja"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
        <ProductoItem Id={6} Nombre={"Faja"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
        <ProductoItem Id={7} Nombre={"Faja"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
        <ProductoItem Id={8} Nombre={"Faja"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
        <ProductoItem Id={9} Nombre={"Faja"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
        <ProductoItem Id={10} Nombre={"Faja"} Tamanio={"Small"} Precio={12.5} Imagen={"Sí"} Categoría={"Moda"} />
      </tbody>
    </table>
  );
};

export default ListaProductos;
