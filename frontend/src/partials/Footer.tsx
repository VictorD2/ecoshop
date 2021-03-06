import React from "react";
import { Link } from "react-router-dom";

//Imagenes
// import logo from "../images/logoFamir.jpg";

// Iconos
// import { FiFacebook } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <>
      <div style={{ background: "#232323" }}>
        <div className="container">
          <footer className="footer py-4 py-md-5 py-lg-5 row justify-content-around">
            {/* Primera Fila */}
            <div className="col-12 col-md-6 col-lg-4 my-4 my-md-2 my-lg-3 footer-section">
              <h6 className="footer-subtitle text-white fs-6 text-uppercase"> NOSOTROS </h6>
              <p className="footer-text text-white-50 mt-5 mt-md-4 mt-lg-3 lh-lg pe-0 pe-md-4 pe-lg-4" style={{ textAlign: "justify" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas hic vitae fugit eveniet quo non asperiores expedita optio eum quibusdam! Perferendis deleniti unde, accusantium quo dolorum maxime repudiandae beatae quisquam?
              </p>
              <ul className="footer-social-list d-flex">
                <li className="footer-social-list-item mx-2 fs-3"></li>
                <li className="footer-social-list-item mx-2 fs-3"></li>
                <li className="footer-social-list-item mx-2 fs-3"></li>
              </ul>
            </div>
            {/* Segunda Fila */}
            <div className="col-12 col-md-6 col-lg-2 my-4 my-md-2 my-lg-3 footer-section">
              <h6 className="footer-subtitle text-white fs-6 text-uppercase"> ENLACES </h6>
              <ul style={{ fontSize: "14px" }} className="footer-as-list ftr__list">
                <li className="footer-as-list-item my-3 my-md-2 my-lg-4">
                  <Link className="text-white-50 text-decoration-none text-uppercase" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="footer-as-list-item my-3 my-md-2 my-lg-4">
                  <Link className="text-white-50 text-decoration-none text-uppercase" to="/Nosotros">
                    Nosotros
                  </Link>
                </li>
                <li className="footer-as-list-item my-3 my-md-2 my-lg-4">
                  <Link className="text-white-50 text-decoration-none text-uppercase" to="/Contactanos">
                    Cont??ctanos
                  </Link>
                </li>
                {/* <li className="footer-as-list-item my-3 my-md-2 my-lg-4">
                  <Link className="text-white-50 text-decoration-none text-uppercase" to="/Programa">
                    Programa
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* Tercera Fila */}
            {/* <div className="col-12 col-md-6 col-lg-3 my-4 my-md-2 my-lg-3 footer-section">
              <h6 className="footer-subtitle text-white text-uppercase">Cursos</h6>
              <div className="row px-2">
              </div>
            </div> */}
            {/* Cuarta Fila */}
            <div className="col-12 col-md-6 col-lg-3 my-4 my-lg-3 my-md-2 footer-section">
              <h6 className="footer-subtitle text-white text-uppercase">CONTACTO</h6>
              <div className="footer-contact">
                <p className="text-white-50 my-5 d-flex justify-content-start align-items-center">
                  <IoLocationOutline color={"#7ed958"} className="mx-2 fs-4" />
                  Trujillo, Per??
                </p>
              </div>
              <div className="footer-contact d-flex text-white-50 my-5">
                <AiOutlinePhone color={"#7ed958"} className="mx-2 fs-4 my-auto" />
                <div className="d-grid">
                  <p className="m-0">
                    Per??:{" "}
                    <a href="https://wa.me/51991981242" target="_BLANK" rel="noreferrer" className="text-decoration-none text-white-50">
                      +51 990-978-736
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-contact">
                <p className="text-white-50 d-flex justify-content-start align-items-center">
                  <CgMail color={"#7ed958"} className="mx-2 fs-4" />
                  <a href="mailto:centrofamir@gmail.com" className="text-white-50" target="_blank" rel="noopener noreferrer">
                    echoshop@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div style={{ background: "#232323", color: "#FFFFFF80", height: "84px", borderTop: "1px solid #FFFFFF80 " }}>
        <div className="container h-100 d-flex justify-content-center align-items-center">
          <p className="m-0">
            ?? 2021 <span style={{ color: "#7ed958" }}>NAZ-TEC</span>. All right reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
