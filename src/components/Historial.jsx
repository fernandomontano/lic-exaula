import React from "react";

export default function Historial({ history }) {
  return (
    <div className="mt-4">
      <div className="App">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Divisa Inicial</th>
              <th scope="col">Valor</th>
              <th scope="col">Divisa Final</th>
              <th scope="col">Conversion</th>
            </tr>
          </thead>
          <tbody>
            {history.map((key) => {
              return (
                <tr key={key}>
                  <td>{key[0][0]}</td>
                  <td>{key[0][1]}</td>
                  <td>{key[1][0]}</td>
                  <td>{key[1][1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
