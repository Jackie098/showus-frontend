/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import Header from '../../components/Header';
import Ads from '../../components/Ads';
import Searcher from '../../components/Searcher';
import EachCard from '../../components/EachCard';

import logo from '../../assets/logo.svg';
// import logoCompany from '../../assets/logo_company.svg';

import './styles.css';

import api from '../../services/api';

import { CompanyCard } from './interfaces';

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
      <Header logo={logo} />

      <Ads />

      <Searcher />

      <div className="container-cards">
        <ul>
          {companyCard.map((card) => (
            <EachCard
              card={card}
              id={card.company.id}
              handleClickToLinkDetails={handleClickToLinkDetails}
            />
            // <li
            //   key={card.company.name}
            //   className="each-card"
            //   onClick={() => handleClickToLinkDetails(card.company.id)}
            // >
            //   {/*Add form here*/}
            //   <div className="card-company">
            //     <img
            //       src={card.fileLogo?.url ? card.fileLogo.url : logoCompany}
            //       className="logo-company"
            //       alt="Logo da empresa"
            //     />
            //     <img
            //       src={card.fileWallpaper.url}
            //       className="wallpaper-card"
            //       alt="Papel de Parede"
            //     />
            //     <h3>{card.company.name}</h3>
            //     <p>{card.company.description}</p>
            //   </div>

            //   {/* <div className="card-informations">
            //       <p>
            //         <span>whastapp</span>
            //         {card.company.whatsapp}
            //       </p>
            //       <p>
            //         <span>instagram</span>
            //         {card.company.instagram}
            //       </p>
            //     </div> */}

            //   <span id="more-info">
            //     Mais informações
            //     <FiArrowRight size={18} />
            //   </span>
            //   {/* </Link> */}
            // </li>
          ))}
        </ul>
      </div>

      <footer>copyright@2020</footer>
    </div>
  );
};

export default Home;
