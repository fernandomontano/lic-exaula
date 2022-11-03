import React, { useRef, useState } from "react";
import "../Styles/dates.css";

export default function Modal() {
  const [name, setName] = useState(null);

  const username = useRef(null);

  const getResult = () => {
    setName(username.current.value);
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning text-primary rounded mt-1"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Confirmar reservación
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="999"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-primary lighter">
            <div className="modal-header">
              <h1 className="modal-title fs-5 lighter" id="staticBackdropLabel">
                Confirmar reservación
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column">
              <div className="container justify-content-between mb-3">
                <h5 className="lighter">Tu nombre completo:</h5>
                <div className="d-flex-inline input-group">
                  <input
                    ref={username}
                    id="reservationName"
                    type="text"
                    className="form-control bg-light text-dark rounded"
                    placeholder="Nombre completo"
                    aria-label="Nombre"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={getResult}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
