import React from "react";
import calcul from "../images/charles-deluvio-GlavtG-umzE-unsplash.jpg";
import reveil from "../images/insung-yoon-w2JtIQQXoRU-unsplash.jpg";
import drum from "../images/ricardo-abreu-JqtYJgOY2g4-unsplash.jpg";
import quote from "../images/that-s-her-business-KzeOMdcEswk-unsplash.jpg";
import mkdP from "../images/sj-objio-XFWiZTa2Ub0-unsplash.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-5">
        <div className="col">
          <div className="card shadow-sm">
            <img src={calcul} alt="cal" />

            <div className="card-body">
              <p className="card-text">
                C'est une machine calculer assez simple qui ne fait que des
                calcul de base.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/calculatrice" className="btn btn-outline-primary">
                    {" "}
                    view
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={drum} alt="drum" />
            <div className="card-body">
              <p className="card-text">
                Cette projet est une genre de boite a musique. Elle émete un son
                pas plus de 1,5 seconde.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/drumbox" className="btn btn-outline-primary">
                    {" "}
                    view
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={mkdP} alt="markdown" />
            <div className="card-body">
              <p className="card-text">
                Celle-ci est just un verificateur de markdown.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link
                    to="/markdownpreviewer"
                    className="btn btn-outline-primary"
                  >
                    {" "}
                    view
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={reveil} alt="reveil" />
            <div className="card-body">
              <p className="card-text">
                Cette projet est un simulateur de reveil.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/clock" className="btn btn-outline-primary">
                    {" "}
                    view
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={quote} alt="quotes" />
            <div className="card-body">
              <p className="card-text">
                Pour vous motivez, passer ici, ceci est une generateur des
                quotes.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/randomquotes" className="btn btn-outline-primary">
                    {" "}
                    view
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
