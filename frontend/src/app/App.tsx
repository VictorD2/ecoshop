import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UsuarioProvider } from "../auth/UsuarioProvider";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import DashBoard from "../pages/Dashboard/DashBoard";

// Layout
import LayoutDash from "../partials/LayoutDash";
import LayoutUsuario from "../partials/LayoutUsuario";
import Home from "../pages/Inicio/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Vistas */}
        <LayoutUsuario exact path="/" component={Home} />
        <Route exact component={Login} path="/Iniciar" />
        <Route exact component={Register} path="/Registrarse" />

        {/* Dashboard */}
        <LayoutDash exact path="/DashBoard" component={DashBoard} />


        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
const prev = () => (
  <UsuarioProvider>
    <App></App>
  </UsuarioProvider>
);
export default prev;;