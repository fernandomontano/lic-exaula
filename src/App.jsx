import CallAPI from "./components/CallAPI";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Conversor from "./components/Conversor.jsx";
import ElementA from "./components/ElementA.jsx";
import Home from "./components/Home.jsx";
import Prubea from "./components/apprueba.jsx";
import Historial from "./components/Historial.jsx";
import ContactUs from "./components/ContactUs.jsx";



function App() {
  // codigo

  // html
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<Home/>}></Route>
          <Route path="conversor" element={<Conversor/>}></Route>
          <Route path="home" element={<Home/>}> </Route>
          <Route path="prueba" element={<Prubea/>}></Route>
          <Route path="historial" element={<Historial/>}></Route>
          <Route path="contactus" element={<ContactUs/>}></Route>
        </Route>
      </Routes>
      <div>
        <Outlet/>
              </div>
    </div>
  );
}

export default App;
