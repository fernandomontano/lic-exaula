import React from 'react'
import image from "../assets/imagenHome.jpg"
import image2 from "../assets/Imagen2Home.jpg"

export default function Home() {
  return (
    <div>
<header>  
<div className="col-auto p-2 text-center">
        <h1><b>Monedas del mundo.</b></h1>
        </div>
</header>
<div className="row justify-content-center ">
    <div style={{width: '40%', height: '50%',}}>
    <img src={image} className="card-img-top" alt="..." />
</div>
<div style={{width: '30%', height: '35%',}}>
<div className=" card border-secondary mb-3"  >
  <div className="card-body">
    <h4 className="card-title">Calcule</h4>
    <p className="card-text">tipos de cambio de divisas y de intercambio extranjero, realice sus cálculos convirtiendo de una moneda a otra de manera sencilla y rápida. Este conversor cuenta con los valores actualizados de las principales monedas del mundo. Los valores de las diferentes monedas se determinan en función de la oferta o la demanda de precios de negociación entre bancos internacionales.</p>
  </div>
</div>
</div>
</div>
<section>   
<div className="col-auto p-2 text-center">
        <h1><b>¿Cómo utilizarlo?</b></h1>
        </div>
        <div className="row justify-content-center ">
        <div style={{width: '30%', height: '35%',}}>
<div className=" card border-secondary mb-3"  >
  <div className="card-body">
    <h4 className="card-title">Selecciona</h4>
    <p className="card-text">la moneda que deseas convertir (la moneda que poseas o de la cual deseas conocer su valor), e ingresa la cantidad de dicha moneda, luego selecciona la segunda moneda, que será a la cual se convertirá la moneda base seleccionada, presiona el botón convertir y podrás conocer la conversión deseada.</p>
  </div>
</div>
</div>
    <div style={{width: '25%', height: '20%',}}>
    <img src={image2} className="card-img-top" alt="..." />
</div>
</div>
    </section>
<section>
<div className="col-auto p-2 text-center">
        <h1><b>Monedas disponibles.</b></h1>
        </div>
        <div className="row justify-content-center ">
        <div style={{width: '30%', height: '35%',}}>
<div className=" card border-secondary mb-3"  >
  <div className="card-body">
  <ul  className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">Dólar americano - USD</li>
    <li className="list-group-item d-flex justify-content-between align-items-center">Euro - EUR</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">Libra esterlina - GBP</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">Franco suizo - CHF</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">Yen japonés - JPY</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">Dólar hongkonés - HKD</li>
    </ul>
  </div>
</div>
</div>
    <div style={{width: '30%', height: '35%',}}>
<div className=" card border-secondary mb-3"  >
  <div className="card-body">
  <ul  className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">Dólar canadiense - CAD</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">Yuan chino - CNY</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">Dólar australiano - AUD</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">Real brasileño - BRL</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">Rublo ruso - RUB</li>
  <li className="list-group-item d-flex justify-content-between align-items-center">Peso mexicano - MXN</li>
    </ul>
  </div>
</div>
</div>
</div> 
</section>
<div className="col-auto p-2 text-center">
<button className='btn btn-primary'>Ir al conversor</button>
        </div>
    </div>
  )
}
