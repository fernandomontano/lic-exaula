import React, { useState, useEffect, useRef } from "react";
import "./Conversor.css";

export default function Conversor({ }) {
  // javascript
  // const [valor, setValor] = useState("valor inicial")
  const [convertir, setConvertir] = useState();
  const [destino, setDestino] = useState();
  const input = useRef(null);
  const from = useRef(null);
  const to = useRef(null);

  const handleClick = () => {
    const first = from.current.value;
    const second = to.current.value;

    if (first === second) {
      alert("Papi tenes los mismos");
    }
    if (first === "USD" && second === "MXN") {
      setConvertir(input.current.value * 19.52);
    }
    setDestino(second);
  };

  const handleChange = () => {
    const first = from.current.value;
    for (let i = 0; i < 12; i++) {
      to.current[i].disabled = false;
      if (first === to.current[i].value) {
        to.current[i].disabled = true;
        to.current.value = to.current[i + 1].value;
      }
    }
  };

  // html & css.
  return (
    <div className="container">
      <div className="row">
        <div className="col">
      <select name="" id="" ref={from} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="MXN">MXN</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="CHF">CHF</option>
        <option value="JPY">JPY</option>
        <option value="HKD">HKD</option>
        <option value="CAD">CAD</option>
        <option value="CNY">CNY</option>
        <option value="AUD">AUD</option>
        <option value="BRL">BRL</option>
        <option value="RUB">RUB</option>
      </select>
      <input type="number" className="block mt-5" ref={input}></input>
      </div>
      <div className="col">
      <select name="" id="" ref={to}>
      <option value="MXN">MXN</option>
      <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="CHF">CHF</option>
        <option value="JPY">JPY</option>
        <option value="HKD">HKD</option>
        <option value="CAD">CAD</option>
        <option value="CNY">CNY</option>
        <option value="AUD">AUD</option>
        <option value="BRL">BRL</option>
        <option value="RUB">RUB</option>
      </select>
      <input type="number" className="block mt-5" disabled value={convertir}></input>
      </div>
      </div>
      <button className="mt-5" onClick={handleClick}>
        Convertir
      </button>
      <div>
        {convertir} {destino}
      </div>
    </div>
  );
}
