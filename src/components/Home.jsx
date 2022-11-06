import React from 'react'
import image from "../assets/imagenHome.jpg"
import image2 from "../assets/Imagen2Home.jpg"

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
<img src={image2} className="card-img-top" alt="..." />
</div>
    <p>Selecciona la moneda que deseas convertir (la moneda que poseas o de la cual deseas conocer su valor), e ingresa la cantidad de dicha moneda, luego selecciona la segunda moneda, que será a la cual se convertirá la moneda base seleccionada, presiona el botón convertir y podrás conocer la conversión deseada.</p>
</section>
<section>
    <h2>Monedas para convertir</h2>
    <div class="w-25 ps-5" >
    <ul  class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">Dólar americano - USD</li>
    <li class="list-group-item d-flex justify-content-between align-items-center">Euro - EUR</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Libra esterlina - GBP</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Franco suizo - CHF</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Yen japonés - JPY</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Dólar hongkonés - HKD</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Dólar canadiense - CAD</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Yuan chino - CNY</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Dólar australiano - AUD</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Real brasileño - BRL</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Rublo ruso - RUB</li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Peso mexicano - MXN</li>
</ul>
</div>

</section>
<button className='btn btn-primary'>Vamo a convertir monedas</button>

    </div>
  )
}
