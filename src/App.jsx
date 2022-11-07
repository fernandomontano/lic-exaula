import CallAPI from "./components/CallAPI";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Conversor from "./components/Conversor.jsx";
import ElementA from "./components/ElementA.jsx";
import Home from "./components/Home.jsx";
import Prubea from "./components/apprueba.jsx";
import Historial from "./components/Historial.jsx";
import ContactUs from "./components/ContactUs.jsx";
import "./styles/bootstrap.min.css";
import React, { useState } from "react";
import History from "./components/History";
import Desarrolladores  from "./components/Desarrolladores.jsx"

function App() {
  // codigo
  const [history, setHistory] = useState([]);

  // html
  return (
    <div className="App overflow-hidden">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}></Route>
          <Route
            path="conversor"
            element={<Conversor history={history} />}
          ></Route>
          <Route path="home" element={<Home />}>
            {" "}
          </Route>
          <Route path="prueba" element={<Prubea />}></Route>
          <Route
            path="historial"
            element={<Historial history={history} />}
          ></Route>
          <Route path ="Desarrolladores" element={<Desarrolladores/>}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
        </Route>
      </Routes>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
