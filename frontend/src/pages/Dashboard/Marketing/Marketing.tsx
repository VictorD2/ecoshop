/* import React from 'react'
import chart from 'chart.js/auto';
import Utils from "./Utils";

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config = {
    type: 'bar',
    data,
    options: {
      indexAxis: 'y',
    }
  }; */

import { AiOutlineTag } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

function Marketing() {
  return (
    <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="card-mt-4">
              <div className="card-header">
                <h3 className="card-title text-uppercase fs-3">
                  <i className="fs-4 me-2 fas fa-bullhorn" />
                  Marketing
                </h3>
                <div className="card-tools"></div>
              </div>
              <div className="card-body">
                <div className="w-100">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-3 col-lg-6">
                      <div className="info-box shadow-lg">
                        <span className="info-box-icon bg-info">
                          <RiShareForwardLine className="fs-1" />
                        </span>
                        <div className="info-box-content">
                          <span className="info-box-text">Recomendar</span>
                          <span className="info-box-number">Recomienda tus productos en cualquier linea de ventas disponible</span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-6">
                      <div className="info-box shadow-lg">
                        <span className="info-box-icon bg-danger">
                          <AiOutlineTag className="fs-1" />
                        </span>
                        <div className="info-box-content">
                          <span className="info-box-text">Descuentos</span>
                          <span className="info-box-number">Promociona tus productos en cualquier lina de ventas disponible</span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-6">
                      <div className="info-box shadow-lg">
                        <span className="info-box-icon bg-warning">
                        <i className="fas fa-bullhorn" />
                        </span>
                        <div className="info-box-content">
                          <span className="info-box-text">Promocionar</span>
                          <span className="info-box-number">Promociona tus productos en cualquier lina de ventas disponible</span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-6">
                      <div className="info-box shadow-lg">
                        <span className="info-box-icon bg-success">
                          <i className="fas fa-server" />
                        </span>
                        <div className="info-box-content">
                          <span className="info-box-text">Integrar Redes</span>
                          <span className="info-box-number">Promociona tus productos en cualquier lina de ventas disponible</span>
                        </div>
                        {/* /.info-box-content */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Marketing;
