/* eslint-disable import/extensions */
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
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

const formTemplate = {
  inputSort: '',
  selectSort: '',
};

const Home = () => {
  const [companyCard, setCompanyCards] = useState<CompanyCard[]>([]);
  const [sorter, setSorters] = useState<Sorter[]>([]);

  const [formData, setFormDatas] = useState(formTemplate);
  const [selectedSorter, setSelectedSorter] = useState('');

  const history = useHistory();

  useEffect(() => {
    const { inputSort, selectSort } = formData;
    api
      .get(`card/?search=${inputSort}&order=${selectSort}`)
      .then((response) => {
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

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormDatas({ ...formData, [name]: value });
  }

  async function handleSubmitSearch(event: FormEvent) {
    event.preventDefault();

    const { inputSort, selectSort } = formData;
    console.log(formData);

    await api
      .get(`card/?search=${inputSort}&order=${selectSort}`)
      .then((response) => {
        setCompanyCards(response.data);
        console.log(response.data);
      });
  }

  function handleSelectedSort(event: ChangeEvent<HTMLSelectElement>) {
    const sort = event.target;

    setSelectedSorter(sort.value);

    setFormDatas({ ...formData, [sort.name]: sort.value });
  }

  return (
    <div className="main-layout">
      <Header logo={logo} />
      <Ads />

      <Searcher
        sorter={sorter}
        selectedSorter={selectedSorter}
        handleSubmitSearch={handleSubmitSearch}
        handleInputChange={handleInputChange}
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
