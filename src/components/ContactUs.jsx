import React from "react";
export default function ContactUs(){
    return( 
    <div >
        <div className="col-auto p-2 text-center">
        <h2><b>Contáctanos</b></h2>
        </div>
    <div >
        
    <div className="row justify-content-center ">
    <div style={{width: '20%', height: '35%',}}>
<div className=" card border-secondary mb-3"  >
  <div className="card-header">Teléfono</div>
  <div className="card-body">
    <h4 className="card-title">+503 1234 5678</h4>
    <p className="card-text">Haz tus consultas y comentarios</p>
  </div>
</div>
</div>
<div style={{width: '20%', height: '35%',}}>
<div className=" card border-secondary mb-3"  >
  <div className="card-header">Dirección</div>
  <div className="card-body">
    <h4 className="card-title">UDB</h4>
    <p className="card-text">Final Av. Albert Einstein, No. 233, Colonia Jardines de Guadalupe, La Libertad, El Salvador.</p>
  </div>
</div>
</div>
<div style={{width: '20%', height: '35%',}}>
<div className=" card border-secondary mb-3"  >
  <div className="card-header">Facebook</div>
  <div className="card-body">
    <h4 className="card-title">Conversor Divisas</h4>
    <p className="card-text">¡Envíanos un mensaje!</p>
  </div>
</div>
</div>
<div style={{width: '20%', height: '35%',}}>
<div className=" card border-secondary mb-3"  >
  <div className="card-header">Instagram</div>
  <div className="card-body">
    <h4 className="card-title">@ConversorD_sv</h4>
    <p className="card-text">Etiquetanos en tus publicaciones.</p>
  </div>
</div>
</div>

    </div>
    </div>
  </div>
    )
}