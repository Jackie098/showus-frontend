/* eslint-disable import/extensions */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/UI/Header';
import Ads from '../../components/ForHome/Ads';
import Searcher from '../../components/ForHome/Searcher';
import EachCard from '../../components/ForHome/EachCard';
import Footer from '../../components/UI/Footer';

import logo from '../../assets/logo.svg';

import './styles.css';

import api from '../../services/api';

import { CompanyCard, Sorter } from './interfaces';

// const templateSorter = {
//   id: 0,
//   name: '',
//   description:'',
// }

const Home = () => {
  const [companyCard, setCompanyCards] = useState<CompanyCard[]>([]);
  const [sorter, setSorters] = useState<Sorter[]>([]);

  const [selectedSorter, setSelectedSorter] = useState('');

  const history = useHistory();

  useEffect(() => {
    api.get('card').then((response) => {
      setCompanyCards(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('sorter').then((response) => {
      setSorters(response.data);
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

  function handleSelectedSort(event: ChangeEvent<HTMLSelectElement>) {
    const sort = event.target.value;

    setSelectedSorter(sort);
  }

  return (
    <div className="main-layout">
      <Header logo={logo} />

      <Ads />

      <Searcher
        sorter={sorter}
        selectedSorter={selectedSorter}
        handleSelectedSort={handleSelectedSort}
      />

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
