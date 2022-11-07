import React, { useState, useEffect, useRef } from "react";

export default function Conversor({ history }) {
  const [count, setCount] = useState(0);
  const input = useRef(null);
  const from = useRef(null);
  const to = useRef(null);

  const [result, setResult] = useState();

  const fetchApi = async () => {
    if (!from.current.value || !input.current.value) return;
    const url = `https://api.getgeoapi.com/v2/currency/convert?api_key=27b748b9578bbe2cc74bf5e35b7a962e3c0a8ff6&from=${from.current.value}&to=${to.current.value}&amount=${input.current.value}&format=json`;
    const response = await fetch(url);
    const json = await response.json();
    setResult(json.rates[to.current.value].rate_for_amount);
    history.push([
      [from.current.value, input.current.value],
      [to.current.value, json.rates[to.current.value].rate_for_amount],
    ]);
  };

  useEffect(() => {
    fetchApi();
  }, [count]);

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
    <div className="container mt-5">
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
              onClick={() => setCount(count + 1)}
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
