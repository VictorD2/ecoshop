import React from "react";
import CarritoProducto from "../../partials/CarritoProducto";
import Menu from "../../partials/Menu";
import libreta from '../../images/journal-wood.jpg';
import camisa from '../../images/veraluna.jpg';
import pulseras from '../../images/recycled-bracelets.jpg';

const Carrito = () => {

  return (
    <>
      <main className="main-container__carrito ms-3 d-flex my-5 flex-wrap">
        <div className="carrito-menu ms-5">
          <Menu />
        </div>

        <div className=" container-carrito d-flex justify-content-evenly col">
          <div className="lista-productos mx-4 mt-5">
            <h2 className="text-uppercase">Carrito</h2>
            <hr />
            <div className="lista-productos__pagar">
              <CarritoProducto nombreProducto="libreta" precio={12.50} photo={libreta} />
              <CarritoProducto nombreProducto="camisa" precio={66.50} photo={camisa} />
              <CarritoProducto nombreProducto="pulseras" precio={33.00} photo={pulseras} />
            </div>

          </div>
          <div className="lista-productos__total my-5 text-center">
            <h4 className="">Resumen del Pedido</h4>
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
            <div className="text-center">
              <h6>Total a pagar</h6>
              <span>S/. 145.00</span>
            </div>
            <button className="btn btn-pagar" typeof="submit">
              Pagar AHORA
            </button>
          </div>
        </div>

      </main>

    </>

  );
};

export default Carrito;







