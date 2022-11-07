import React from "react";
import { Outlet, Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <header className=" px-sm-5 mb-5 w-100 bg-primary" >
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
  <Link to="/" className="navbar-brand" href="#">
  <a class="navbar-brand" href="#"><b>CONVERSOR DE DIVISAS</b></a>
  </Link> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      <Link to="home" className="nav-link">
        <a class="nav-link" href="#">Inicio</a>
        </Link>
      </li>
      <li class="nav-item active">
      <Link to="conversor" className="nav-link">
        <a class="nav-link" href="#">Conversor</a>
        </Link>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Desarrolladores</a>
      </li>
      <li class="nav-item active">
        <Link to="contactus" className="nav-link">
        <a class="nav-link" href="#">Contáctanos</a>
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
