import CallAPI from "./components/CallAPI";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Conversor from "./components/Conversor.jsx";
import ElementA from "./components/ElementA.jsx";
import Home from "./components/Home.jsx";
import Prubea from "./components/apprueba.jsx";
import Historial from "./components/Historial.jsx";


function App() {
  // codigo

  // html
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<ElementA/>}></Route>
          <Route path="conversor" element={<Conversor/>}></Route>
          <Route path="home" element={<Home/>}> </Route>
          <Route path="prueba" element={<Prubea/>}></Route>
          <Route path="historial" element={<Historial/>}></Route>
        </Route>
      </Routes>
      <div>
        <Outlet/>
        <div>hola</div>
      </div>
    </div>
  );
}

export default App;
