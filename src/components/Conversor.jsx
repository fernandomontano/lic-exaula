import React, { useState, useEffect, useRef } from "react";
import "./Conversor.css";

export default function Conversor({ history }) {
  // javascript
  // const [valor, setValor] = useState("valor inicial")
  const [convertir, setConvertir] = useState();
  const [destino, setDestino] = useState();
  const [response, setResponse] = useState();
  const input = useRef(null);
  const from = useRef(null);
  const to = useRef(null);
  const currency = [
    ["USD", 1],
    ["JPY", 146.62],
    ["MXN", 19.52],
  ];

  var select1, select2;
  const [result, setResult] = useState();

  const handleClick = () => {
    const first = from.current.value;
    const second = to.current.value;
    currency.forEach((element) => {
      if (element[0] == first) {
        select1 = element;
      }
      if (element[0] == second) {
        select2 = element;
      }
    });
    var dollar;
    var resultTemp;
    if (select1[0] != "USD" && select2[0] != "USD") {
      //SI NINGUNA ES DOLAR (MONEDA BASE)
      dollar = input.current.value / select1[1];
      setResult(dollar * select2[1]);
    } else {
      if (select1[0] == "USD") {
        // Dolar a otra moneda
        setResult(input.current.value * select2[1]);
        //  43986  =  300 * 146.62
      } else {
        //Otra moneda a dolar
        setResult(input.current.value / select1[1]);
        //   8.18    1200 / 146.62
      }
    }
  };

  const fetchApi = async () => {
    const url = `https://data.fixer.io/api/convert?access_key=Sd8Zs7athcDPCCgzp9TZ89DfVvCxTEMq&from=${from.current.value}&to=${to.current.value}&amount=${input.current.value}`;
    const response = await fetch(url);
    const json = await response.json();
    setResponse(json);
  };
  console.log(response);
  useEffect(() => {
    if (!result) return;
    fetchApi();
    history.push([
      [from.current.value, input.current.value],
      [to.current.value, result],
    ]);
  }, [result]);

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
          <div className="input-group mb-3">
            <span className="input-group-text">
              {" "}
              <select
                className="form-select"
                name=""
                id=""
                ref={from}
                onChange={handleChange}
              >
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
            </span>
            <input
              type="number"
              step="0.01"
              min="0.01"
              className="form-control"
              aria-describedby="button-addon2"
              placeholder="Ingresa la cantidad..."
              ref={input}
            ></input>
            <button
              className="btn btn-success"
              type="button"
              id="button-addon2"
              onClick={handleClick}
            >
              Convertir
            </button>
          </div>
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text">
              {" "}
              <select className="form-select" name="" id="" ref={to}>
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
            </span>
            <input
              type="number"
              className="form-control"
              id="disabledInput"
              disabled
              value={result || "0.00"}
              onChange={() => console.log("Di resultado nuevo")}
            ></input>
          </div>
        </div>
        <div className="alert alert-dismissible alert-warning">
          <h4 className="alert-heading">Recuerda</h4>
          <p className="mb-0">
            Tenemos acceso directo a las tasas de cambio en tiempo real, por lo
            que puede estar seguro de que los datos que proporcionamos son
            siempre precisos y fiables.
          </p>
        </div>
      </div>
    </div>
  );
}
