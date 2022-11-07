import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../Styles/bootstrap.min.css";

export default function Header() {
  return (
    <div>
      <header className="px-sm-5 mb-5 w-100 bg-primary">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
          <Link to="/" className="navbar-brand" href="#">
            <b>CONVERSOR DE DIVISAS</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="home" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="conversor" className="nav-link">
                  Conversor
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="desarrolladores" className="nav-link">
                  Desarrolladores
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="contactus" className="nav-link">
                  Contáctanos
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="historial" className="nav-link">
                  Historial
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
