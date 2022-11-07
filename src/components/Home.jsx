import React from "react";
import image from "../assets/imagenHome.jpg";
import image2 from "../assets/Imagen2Home.jpg";
import "../Styles/home.css";

export default function Home() {
  return (
    <div className="mx-5">
      <header>
        <div className="p-2 text-center">
          <h1>
            <b>Monedas del mundo.</b>
          </h1>
        </div>
      </header>
      <div className=" d-flex flex-wrap justify-content-center gap-2 align-items-center">
        <img
          src={image}
          alt="Teatro"
          className="img-fluid rounded"
          width="400px"
        />
        <div className="card rounded responsive-width">
          <div className="px-3 py-2">
            <h4>Calcule</h4>
            <div>
              Tipos de cambio de divisas y de intercambio extranjero, realice
              sus cálculos convirtiendo de una moneda a otra de manera sencilla
              y rápida. Este conversor cuenta con los valores actualizados de
              las principales monedas del mundo. Los valores de las diferentes
              monedas se determinan en función de la oferta o la demanda de
              precios de negociación entre bancos internacionales.
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 mt-3 text-center">
        <h1>
          <b>¿Como utilizarlo?</b>
        </h1>
      </div>
      <section>
        <div className="mt-3 d-flex flex-wrap justify-content-center gap-2 align-items-center">
          <div className="card rounded responsive-width">
            <div className="px-3 py-2">
              <h4>Selecciona</h4>
              <div className="line-lh">
                La moneda que deseas convertir (la moneda que poseas o de la
                cual deseas conocer su valor), e ingresa la cantidad de dicha
                moneda, luego selecciona la segunda moneda, que será a la cual
                se convertirá la moneda base seleccionada, presiona el botón
                convertir y podrás conocer la conversión deseada.
              </div>
            </div>
          </div>
          <img
            src={image2}
            alt="Teatro"
            className="img-fluid rounded"
            width="400px"
          />
        </div>
      </section>
      <section>
        <div className="col-auto p-2 text-center">
          <h1>
            <b>Monedas disponibles.</b>
          </h1>
        </div>
        <div className="row justify-content-center d-flex flex-wrap gap-3">
          <div className="card border-secondary mb-3 responsive-width">
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Dólar americano - USD
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Euro - EUR
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Libra esterlina - GBP
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Franco suizo - CHF
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Yen japonés - JPY
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Dólar hongkonés - HKD
                </li>
              </ul>
            </div>
          </div>
          <div className=" card border-secondary mb-3 responsive-width">
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Dólar canadiense - CAD
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Yuan chino - CNY
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Dólar australiano - AUD
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Real brasileño - BRL
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Rublo ruso - RUB
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-primary fw-bold fs-4">
                  Peso mexicano - MXN
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="col-auto p-2 text-center">
        <button className="btn btn-primary">Ir al conversor</button>
      </div>
    </div>
  );
}
