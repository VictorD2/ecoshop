import React from "react";
import CarritoProducto from "./CarritoProducto";
import Menu from "../../partials/Menu";
import libreta from "../../images/journal-wood.jpg";
import camisa from "../../images/veraluna.jpg";
import pulseras from "../../images/recycled-bracelets.jpg";

const Carrito = () => {
  return (
    <>
      <main className="ms-lg-3 ms-0 d-flex my-4 flex-wrap position-relative">
        <Menu />
        <section className="principal__section">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="mx-lg-4 mx-2 mt-2">
                <div className="card">
                  <div className="card-header" style={{ background: "var(--verde_claro)" }}>
                    <h2 className="text-uppercase fs-4 fw-bold subtitulo__lista">Carrito</h2>
                  </div>
                  <div className="card-body">
                    <div className="lista-productos__pagar">
                      <CarritoProducto nombreProducto="libreta" precio={12.5} photo={libreta} />
                      <CarritoProducto nombreProducto="camisa" precio={66.5} photo={camisa} />
                      <CarritoProducto nombreProducto="pulseras" precio={33.0} photo={pulseras} />
                    </div>
                  </div>
                  <div className="card-footer"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="lista-productos__total my-2 text-center">
                <div className="card">
                  <div className="card-header" style={{ background: "var(--verde_claro)" }}>
                    <h4 className="text-uppercase subtitulo__lista fw-bold">Resumen del Pedido</h4>
                  </div>
                  <div className="card-body">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th>Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Libreta</td>
                          <td>S/. 12.50</td>
                        </tr>
                        <tr>
                          <td>Camisa</td>
                          <td>S/. 66.50</td>
                        </tr>
                        <tr>
                          <td>Pulsera</td>
                          <td>S/. 66.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center">
                    <h6>Total a pagar</h6>
                    <span>S/. 145.00</span>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-pagar text-white" typeof="submit">
                      Pagar AHORA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Carrito;
