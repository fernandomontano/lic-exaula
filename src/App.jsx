import { useState } from "react";
import Restaurant from "./Components/Restaurant";
import "./Styles/bootstrap.min.css";

function App() {
  return (
    <div className="App bg-primary min-vh-100 overflow-hidden">
      <Restaurant />
    </div>
  );
}

export default App;
