import React from "react";

// Componentes
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { TiMessages } from "react-icons/ti";
import { FaBell, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";

const DashBoard: React.FC = () => {
  return (
    <>
      <div className="content-wrapper show" style={{ minHeight: 643 }}>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link className="link-normal" to="/Dashboard">
                      Inicio
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="content">
          <div className="container-fluid bg-blue w-100">
            <div className="row">
              <section className="col-lg-7 connectedSortable ui-sortable"></section>

              <section className="col-lg-5 connectedSortable ui-sortable"></section>
            </div> 
          </div>
        </section>*/}
        <section className="container-fluid section_cards-dash py-3 px-4">
          <div className="card text-dark" style={{ background: "#62adc8" }}>
            <div className="card-body text-white d-flex m-0 flex-row justify-content-center">
              <TiMessages className="me-4" style={{ fontSize: "8rem" }} />
              <span style={{ fontSize: "6rem" }}>34</span>
            </div>
            <div className="d-flex bg-gray-light justify-content-around align-items-center p-2" style={{ cursor: "pointer" }}>
              <span className="fs-3">Ver Comentarios</span>
              <FaBell className="fs-1" />
            </div>
          </div>

          <div className="card" style={{ background: "#c46cc8" }}>
            <div className="card-body text-white d-flex m-0 flex-row justify-content-center">
              <FaRegEnvelope className="me-4" style={{ fontSize: "8rem" }} />
              <span style={{ fontSize: "6rem" }}>12</span>
            </div>
            <div className="d-flex bg-gray-light justify-content-around align-items-center p-2" style={{ cursor: "pointer" }}>
              <span className="fs-3">Ver Respuesta</span>
              <FaBell className="fs-1" />
            </div>
          </div>

          <div className="card" style={{ background: "#62ce73" }}>
            <div className="card-body text-white d-flex m-0 flex-row justify-content-center">
              <FaRegUser className="me-4" style={{ fontSize: "8rem" }} />
              <span style={{ fontSize: "6rem" }}>100</span>
            </div>
            <div className="d-flex bg-gray-light justify-content-around align-items-center p-2" style={{ cursor: "pointer" }}>
              <span className="fs-3">Ver Clientes</span>
              <FaBell className="fs-1" />
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default DashBoard;
