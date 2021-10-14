import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import Buscador from "../../../components/Buscador";

import ListaProductos from "./ListaProductos";

const ManejoProductos: React.FC = () => {
  return (
    <>
      <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <div className="card mt-4">
                <div className="card-header">
                  <h3 className="card-title text-uppercase fs-3">
                    <i className="fs-4 me-2 fas fa-weight-hanging" />
                    Productos
                  </h3>
                  <div className="card-tools">
                    <button typeof="button" className="btn btn-success fs-5">
                      <BsPlusCircle />
                      <span className="ms-2">Agregar Producto</span>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="w-100 d-flex justify-content-end">
                    <Buscador />
                  </div>
                  <div className="table-responsive mt-4">
                    <ListaProductos />
                    <div className="container-pagination d-flex justify-content-end pe-2 my-4">
                      <nav aria-label="Page navigation">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="/" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ManejoProductos;
