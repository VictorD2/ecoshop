import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { API } from "../config/config";
import Logo from "../images/logo.png";

//Imagenes
// import logoLogin from "../images/Logo.svg";

//Icons

//Toastify
// import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
// import { useUsuario } from "../auth/UsuarioProvider";
// import auth from "../auth/auth";

const Login: React.FC = () => {
  // const initialState = {
  //   email: "",
  //   password: "",
  // };
  // const history = useHistory();
  // const { setUsuario } = useUsuario();
  // const [state, setState] = useState(initialState);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    return () => {};
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="content-main">
        <div className="container px-5">
          <div className="d-flex justify-content-center my-5">
            <Link to="/">
              <img src={Logo} alt="logo-register" className="mx-auto my-auto logo-register" />
            </Link>
          </div>
          <form className="mx-auto mb-3">
            <div className="row align-items-center flex-column mb-lg-5 mb-md-4 mb-4">
              <div className="col-md-6 mb-4">
                <input type="email" className="input-register" name="email" placeholder="Correo electronico" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="password" className="input-register" name="password" placeholder="Contraseña" />
              </div>
              <div className="col-md-6">
                <p className="text-end">
                  <Link className="password__olvidada" to="/">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </p>
              </div>
            </div>
            <div className="d-grid col-lg-6 col-md-8 mx-auto mb-lg-0 mb-md-0 mb-3" style={{ marginTop: "4rem" }}>
              <button className="btn btn_register mx-auto" type="button">
                Iniciar Sesión
              </button>
            </div>
            <div className="d-grid col-lg-6 col-md-8 mx-auto mb-lg-0 mb-md-0 mb-5" style={{ marginTop: "2rem" }}>
              <Link to="/Registrarse" className="text-center">
                <button className="btn btn_register mx-auto" type="button">
                  Registrate
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
