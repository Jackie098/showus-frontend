/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Ads from '../../components/Ads';
import Searcher from '../../components/Searcher';
import EachCard from '../../components/EachCard';
import Footer from '../../components/Footer';

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
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
