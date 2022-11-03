import React, { useState } from "react";
import "../Styles/seating.css";
import "../Styles/bootstrap.min.css";
import Modal from "./Modal";

export default function Reservation() {
  const [count, setCount] = useState(0);

  console.log(count);

  const handleClick = (e) => {
    if (
      e.target.classList.contains("sun-solid") &&
      e.target.classList.contains("icon") &&
      !e.target.classList.contains("occupied") &&
      !e.target.classList.contains("selected")
    ) {
      e.target.classList.add("selected");

      setCount(count + 1);
    } else if (
      e.target.classList.contains("sun-solid") &&
      e.target.classList.contains("icon") &&
      e.target.classList.contains("selected")
    ) {
      e.target.classList.toggle("selected");
      setCount(count - 1);
    }
  };

  return (
    <div className="mt-5 pt-5">
      <h1 className="text-info mt-2 text-center">Selecciona tu mesa</h1>
      <p className="text-center lighter">Precio de reservación: $10</p>
      <div className="container bg-dark justify-content-around align-items-center mt-2 p-3 text-light rounded">
        <ul className="showcase">
          <li>
            <a>Disponible:</a>
          </li>
          <li>
            <div className="d-inline-flex sun-solid icon"></div>
          </li>
          <li>
            <a>Seleccionado:</a>
          </li>
          <li>
            <a className="d-inline-flex sun-solid icon selected"></a>
          </li>
          <li>
            <a>Ocupado:</a>
          </li>
          <li>
            <a className="d-inline-flex sun-solid icon occupied"></a>
          </li>
        </ul>
      </div>
      <section
        id="seatchart"
        className="container border border-light mt-3 mb-2"
        onClick={handleClick}
      >
        <div className="container p-4">
          <div className="row">
            <div className="col">
              <div className="sun-solid icon"></div>
            </div>
            <div className="col">
              <div className="sun-solid icon occupied"></div>
            </div>
            <div className="col-4">
              <div className="sun-solid icon "></div>
            </div>
            <div className="col">
              <div className="sun-solid icon"></div>
            </div>
            <div className="col">
              <div className="sun-solid icon "></div>
            </div>
          </div>
        </div>

        <div className="container p-4 mt-2">
          <div className="row">
            <div className="col">
              <div className="sun-solid icon occupied"></div>
            </div>
            <div className="col">
              <div className="sun-solid icon"></div>
            </div>
            <div className="col-4">
              <div className="sun-solid icon "></div>
            </div>
            <div className="col">
              <div className="sun-solid icon occupied"></div>
            </div>
            <div className="col">
              <div className="sun-solid icon "></div>
            </div>
          </div>
        </div>
        <div className="container mt-4 mb- bg-dark text-center text-light">
          <p>Bar de sushi</p>
        </div>
        <div className="container p-4">
          <div className="row">
            <div className="col">
              <div className="sun-solid icon "></div>
            </div>
            <div className="col-4">
              <div className="sun-solid icon "></div>
            </div>
            <div className="col">
              <div className="sun-solid icon "></div>
            </div>
            <div className="col">
              <div className="sun-solid icon "></div>
            </div>
            <div className="col">
              <div className="sun-solid icon "></div>
            </div>
          </div>
        </div>
        <div className="container p-4 mt-2 mb-4">
          <div className="row">
            <div className="col">
              <div className="sun-solid icon "></div>
            </div>
            <div className="col-4">
              <div className="sun-solid icon"></div>
            </div>
            <div className="col">
              <div className="sun-solid icon occupied"></div>
            </div>
            <div className="col">
              <div className="sun-solid icon"></div>
            </div>
            <div className="col">
              <div className="sun-solid icon "></div>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center ">
        <Modal />
      </div>
      <p className="lighter text ">
        Usted ha seleccionado <span>{count}</span> asientos por el precio de $
        <span>{count * 10}</span>
      </p>
    </div>
  );
}
