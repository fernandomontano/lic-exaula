import React from 'react'
import image from "../assets/Imagen 1.jpg"
export default function Home() {
  return (
    <div>
<header>
    <h1>Monedas del mundo</h1>
</header>
<div className="card" style={{ width: "18rem" }}>
<img src={image} className="card-img-top" alt="..." />
</div>
<section>
<p>
Calcule tipos de cambio de divisas y de intercambio extranjero, realice sus cálculos convirtiendo de una moneda a otra de manera sencilla y rápida. Este conversor cuenta con los valores actualizados de las principales monedas del mundo. Los valores de las diferentes monedas se determinan en función de la oferta o la demanda de precios de negociación entre bancos internacionales.
</p>
</section>
<section>
    <h2>Cómo utilizarlo</h2>
    <div className="card" style={{ width: "18rem" }}>
<img src={image} className="card-img-top" alt="..." />
</div>
    <p>Selecciona la moneda que deseas convertir (la moneda que poseas o de la cual deseas conocer su valor), e ingresa la cantidad de dicha moneda, luego selecciona la segunda moneda, que será a la cual se convertirá la moneda base seleccionada, presiona el botón convertir y podrás conocer la conversión deseada.</p>
</section>
<section>
    <h2>Monedas para convertir</h2>
    <li>Dólar americano - USD</li>
    <li>Euro - EUR</li>
  <li>Libra esterlina - GBP</li>
  <li>Franco suizo - CHF</li>
  <li>Yen japonés - JPY</li>
  <li>Dólar hongkonés - HKD</li>
  <li>Dólar canadiense - CAD</li>
  <li>Yuan chino - CNY</li>
  <li>Dólar australiano - AUD</li>
  <li>Real brasileño - BRL</li>
  <li>Rublo ruso - RUB</li>
  <li>Peso mexicano - MXN</li>


</section>
<button className='btn btn-info'>Vamo a convertir monedas</button>
    </div>
  )
}
