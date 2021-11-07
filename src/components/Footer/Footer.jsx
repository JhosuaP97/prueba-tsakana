import React from "react";
import { FacebookICon, InstagramIcon, TwitterIcon } from "../../assets";
import sponsorsImage from "../../assets/img/sponsors.png";
import { Link } from "react-router-dom";

import { Button } from "..";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="box">
          <div className="footer-info">
            <div className="info">
              <div className="box-footer">
                <h2>Empresa</h2>
                <a href="/">Información legal</a>
                <a href="/">Politica de privacidad</a>
                <a href="/">Politica de devoluciones </a>
              </div>
              <div className="box-footer">
                <h2>Ayuda y apoyo</h2>
                <a href="/">Correoelectronico@hotmail.com</a>
                <a href="/">Solicitudes</a>
              </div>
              <div className="box-footer">
                <h2>Soy admin</h2>
                <Link to="/login">Iniciar sesíón</Link>
              </div>
            </div>
          </div>
          <div className="footer-info">
            <div className="subscribe">
              <div className="box-footer">
                <h2>Encuéntranos en</h2>
                <div className="social-media">
                  <FacebookICon width={40} />
                  <TwitterIcon width={40} />
                  <InstagramIcon width={40} />
                </div>
              </div>
              <div className="box-footer">
                <div className="container-subscribe">
                  <h2>Suscríbite al newsletter</h2>
                  <p>
                    Al hacerlo puedes obtener información de descuentos y
                    promociones
                  </p>
                  <div className="input-subscribe">
                    <div className="subscribe-container">
                      <input type="text" />
                      <Button
                        type="button"
                        buttonStyle="btn-primary-solid"
                        buttonSize="btn-small"
                      >
                        Enviar
                      </Button>
                    </div>

                    <p>
                      Al hacer click en ENVIAR, acepta nuestra
                      <span>politica de privacidad y cookies.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="copyright">
            <p>Copyright © 2021 Tsakana. Todos los derechos reservados</p>
          </div>
          <div className="footer-sponsors">
            <h2>Aceptamos</h2>
            <img src={sponsorsImage} alt="patrocinadores" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
