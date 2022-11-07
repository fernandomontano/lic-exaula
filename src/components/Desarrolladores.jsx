import React from 'react'
import ivania from '../assets/ivania.jpg'
import montano from '../assets/montano.jpg'
import gio from '../assets/gio.jpg'
import andrea from '../assets/andrea.jpg'
import lu from '../assets/lu.jpg'
import '../Styles/card.css'

export default function Desarrolladores() {
    return (
        <div className="">
          <div className="mt-3">
            <div className="d-flex justify-content-around p-0 px-sm-5 mx-5 flex-wrap">
              <div
                className=" card border-secondary mt-5 pt-5 rounded "
                style={{ width: "20rem" }}
              >
                <img
                  className="card-img-top luciana img-circle rounded-circle"
                  src={ivania}
                  alt="Card image cap"
                />
                <div className="card-block text-center">
                  <h5 className="card-title text-warning ">
                    Ivania Lebrón
                  </h5>
                  <p className="card-text">Developer & Designer</p>
                  <h6 className="card-text mb-3" >El Salvador, San Salvador</h6>
                </div>
              </div>
              <div
                className="card border-secondary mt-5 pt-5 rounded "
                style={{ width: "20rem" }}
              >
                <img
                  className="card-img-top luciana img-circle rounded-circle"
                  src={lu}
                  alt="Card image cap"
                />
                <div className="card-block text-center">
                  <h5 className="card-title  text-warning ">
                    Luciana Munguía
                  </h5>
                  <p className="card-text">Developer & Designer</p>
                  <h6 className="card-text mb-3 ">El Salvador, San Salvador</h6>
                </div>
              </div>
              <div
                className="card border-secondary mt-5 pt-5 rounded"
                style={{ width: "20rem" }}
              >
                <img
                  className="card-img-top luciana img-circle rounded-circle"
                  src={andrea}
                  alt="Card image cap"
                />
                <div className="card-block text-center">
                  <h5 className="card-title  text-warning ">
                    Andrea Velásquez
                  </h5>
                  <p className="card-text">Developer & Designer</p>
                  <h6 className="card-text  mb-3">El Salvador, San Salvador</h6>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around p-0 px-sm-5 mx-5 mt-4 flex-wrap">
              <div
                className="card border-secondary mt-5 pt-5 rounded"
                style={{ width: "20rem" }}
              >
                <img
                  className="card-img-top luciana img-circle rounded-circle"
                  src={gio}
                  alt="Card image cap"
                />
                <div className="card-block text-center">
                  <h5 className="card-title text-warning ">
                    Giovana Anaya
                  </h5>
                  <p className="card-text">Developer & Designer</p>
                  <h6 className="card-text  mb-3">El Salvador, San Salvador</h6>
                </div>
              </div>
              <div
                className="card border-secondary mt-5 pt-5 rounded"
                style={{ width: "20rem" }}
              >
                <img
                  className="card-img-top luciana img-circle rounded-circle"
                  src={montano}
                  alt="Card image cap"
                />
                <div className="card-block text-center">
                  <h5 className="card-title  text-warning ">
                    Fernando Montano
                  </h5>
                  <p className="card-text">Developer & Designer</p>
                  <h6 className="card-text  mb-3">El Salvador, Santa Ana</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
