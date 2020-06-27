/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import logoCompany from '../../assets/logo_company.svg';
// import wallpaperCompany from '../../assets/wallpaper_card_company.png';

import './styles.css';

import api from '../../services/api';

interface CompanyCard {
  company: {
    id: number;
    name: string;
    description: string;
    whatsapp: string;
    instagram: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  filesCompany:
  {
    url: string;
    name: string;
    path: string;
    size: string;
    wallpaper: boolean;
  }
}

const Home = () => {
  const [companyCard, setCompanyCards] = useState<CompanyCard[]>([]);
  const history = useHistory();

  useEffect(() => {
    api.get('card').then((response) => {

      setCompanyCards(response.data);
    });
  }, []);



  function handleClickToLinkDetails(id: number) {
    try {
      localStorage.setItem('companyId', id.toString());

      history.push('company-details');
    } catch (err) {
      alert('Erro ao tentar acessar o card. Por favor, recarregue a página!');
    }
  }

  return (
    <div className="main-layout">
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

      <section id="section-ads">
        <h4>Simples e rápido, você só precisa escolher o que quer comer!!!</h4>
      </section>

      <div id="div-search">
        <form>
          <button type="submit">
            <FiSearch size={20} />
          </button>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Pesquisar empresa"
          />
          <div id="select-sort">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Organizar por:</label>
            {/* <div className="styled-select"> */}
            <select name="sort" id="sort" value="Mais recentes">
              <option value="0">Mais recentes</option>
            </select>
            {/* </div> */}
          </div>
        </form>
      </div>

      <div className="container-cards">
        <ul>
          {
            companyCard.map(card => (

              <li
                key={card.company.name}
                className="each-card"
                onClick={() => handleClickToLinkDetails(card.company.id)}
              >
                {/*Add form here*/}
                {/* <Link to={handleClickToLinkDetails(card.company.id)}> */}
                <div className="card-company">
                  <img
                    src={logoCompany}
                    className="logo-company"
                    alt="Logo da empresa"
                  />
                  <img
                    src={card.filesCompany.url}
                    className="wallpaper-card"
                    alt="Papel de Parede"
                  />
                  <h3>{card.company.name}</h3>
                  <p>{card.company.description}</p>
                </div>

                {/* <div className="card-informations">
                  <p>
                    <span>whastapp</span>
                    {card.company.whatsapp}
                  </p>
                  <p>
                    <span>instagram</span>
                    {card.company.instagram}
                  </p>
                </div> */}

                <span id="more-info">
                  Mais informações
                  <FiArrowRight size={18} />
                </span>
                {/* </Link> */}
              </li>
            ))
          }
        </ul>
      </div>

      <footer>copyright@2020</footer>
    </div>
  );
};

export default Home;
