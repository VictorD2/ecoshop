import React from "react";
import Buscador from "../../components/Buscador";
import CarritoButton from "../../components/CarritoButton";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import Menu from "../../partials/Menu";
import ListaProductos from "./ListaProductos";

const Home: React.FC = () => {
  return (
    <main className="ms-lg-3 ms-0 d-flex my-4 flex-wrap position-relative">
      <Menu />
      <section className="ms-lg-5 ms-0 mt-3 principal__section">
        <div className="ms-lg-3 d-flex flex-lg-row flex-column-reverse justify-content-center justify-content-lg-between align-items-center">
          <h3 className="text-uppercase fs-4 fw-bold subtitulo__lista mt-lg-0 mt-5">Productos Populares</h3>
          <Buscador />
        </div>
        <ListaProductos />
      </section>
      <SocialMediaLinks />
      <CarritoButton />
    </main>
  );
};

export default Home;
