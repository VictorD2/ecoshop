import React from 'react'
import { BsSearch, BsPlusCircle } from "react-icons/bs";
import Buscador from '../../components/Buscador';

import { AiFillEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const ManejoProductos: React.FC = () => {
    return (
        <>
            <div className="container-manejo mx-4 mt-5">
                <h2>Productos</h2>
                <button typeof="button" className="btn btn-success fs-5">
                    <BsPlusCircle />
                    <span className="ms-2">Agregar Producto</span>
                </button>
            </div>
            <div className="container-buscador__productos w-100 d-flex justify-content-end">
                <Buscador />
            </div>
            <div className="container-md my-5 position-relative text-center">


                <table className="table table-striped">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Chaqueta</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Faja</td>
                            <td>small</td>
                            <td>12.50</td>
                            <td>Si</td>
                            <td>Moda</td>
                            <td>
                                <div className="col fs-4 d-flex justify-content-center">
                                    <AiFillEye className="mx-1" />
                                    <FiEdit className="mx-1" />
                                    <FaTrash className="mx-1" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ManejoProductos;
