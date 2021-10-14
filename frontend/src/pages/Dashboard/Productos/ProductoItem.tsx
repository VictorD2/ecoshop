import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface Producto {
  Id: number;
  Nombre: string;
  Tamanio: string;
  Precio: number;
  Imagen: string;
  Categoría: string;
}

const ProductoItem: React.FC<Producto> = (props) => {
  return (
    <tr>
      <th scope="row">{props.Id}</th>
      <td>{props.Imagen}</td>
      <td>{props.Tamanio}</td>
      <td>{props.Precio}</td>
      <td>{props.Imagen}</td>
      <td>{props.Categoría}</td>
      <td>
        <div className="fs-4 d-flex justify-content-around">
          <Link className="actions-icon" to="#" type="button">
            <AiFillEye className="mx-1 d-flex justify-content-start align-items-start fs-3" />
          </Link>
          <Link className="actions-icon" to="#" type="button">
            <RiEditBoxFill className="mx-1 d-flex justify-content-start align-items-start fs-3" />
          </Link>
          <Link className="actions-icon" to="#" type="button">
            <FaTrash className="mx-1 d-flex justify-content-start align-items-start fs-3" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ProductoItem;
