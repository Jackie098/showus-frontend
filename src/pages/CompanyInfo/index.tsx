import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import logoCompany from '../../assets/logo_company.svg';

import './styles.css';

const CompanyInfo = () => {
  return (
    <div className="main-container">
      <header>
        <div className="menu">
          <Link to="/">
            <img src={logo} alt="Show Us" />
          </Link>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </div>
        <div className="for-contact">
          <Link to="/">Contate-nos</Link>
        </div>
      </header>
      <main id="main-info">
        <section className="company-details">
          <div className="information">
            <div className="header-company">
              <img src={logoCompany} alt="Logo da empresa" />
              <div id="logo-title">
                <h4>Crazy Pizza</h4>
                <span>A melhor pizza da cidade</span>
              </div>
            </div>
            <hr />
            <div className="contact">
              <div className="contact-string">
                <h4>Informações para contato:</h4>
                <div className="contact-datas">
                  <p>
                    <span>telefone:</span>
                    (89) 9 9448 4332
                  </p>
                  <p>
                    <span>instagram</span>
                    @crazypizza.oficial
                  </p>
                  <p>
                    <span>e-mail</span>
                    crazypizza.floriano@gmail.com
                  </p>
                </div>
              </div>
              <h2>*FAZER PEDIDO*</h2>
              <div className="contact-button">
                <div id="btn-whatsapp"></div>
                <div id="btn-instagram"></div>
              </div>
            </div>
          </div>
          <div className="image-carousel">
            <div className="btn-left"></div>
            <img src="" alt="Imagens dos produtos da empresa" />
            <div className="btn-right"></div>
          </div>
        </section>
        <hr />
        <section className="company-menu">
          <h3>Cardápio:</h3>
          <div className="item">
            <div className="item-name">
              pizzas
              <FiArrowDown />
            </div>
            <div className="item-details">
              <div className="side-left">
                <table className="table-size">
                  <tr>
                    <th>Tamanho</th>
                    <th>Valor</th>
                  </tr>
                  <tr>
                    <td>Pequeno</td>
                    <td>R$ 30,00</td>
                  </tr>
                  <tr>
                    <td>Médio</td>
                    <td>R$ 35,00</td>
                  </tr>
                  <tr>
                    <td>Grande</td>
                    <td>R$ 40,00</td>
                  </tr>
                </table>
                <div className="extra">
                  <h3>Informações adicionais</h3>
                  <div>Vem com um guaraná de 2L</div>
                </div>
              </div>
              <div className="side-right">
                <ul>
                  <li><h4>Sabores</h4></li>
                  <li>calabresa</li>
                  <li>frango com catupiry</li>
                  <li>carne de sol com bacon</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>copyright@2020</footer>
    </div>
  );
}

export default CompanyInfo;
