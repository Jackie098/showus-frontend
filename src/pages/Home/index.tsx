import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './styles.css';

const Home = () => {
  return (
    <div id="page-home">
      <header>
        <div className="menu-home">
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
        <h1>Simples e rápido, você só precisa escolher o que quer comer!!!</h1>
      </section>

      <div id="div-search">
        <form>
          <button type="submit">
            <img src="" alt="search" />
          </button>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Pesquisar empresa"
          />

          {/* <label htmlFor="sort">Organizar por:</label> */}
          <select name="sort" id="sort" value="Mais recentes">
            <option value="0">Mais recentes</option>
          </select>
        </form>
      </div>

      <div className="container-cards">
        <div className="card-company">
          <img src="" alt="Logo Crazy Pizza" />
          <img src="" alt="Papel de Parede" />
          <h3>Crazy Pizza</h3>
          <p>A melhor pizza da cidade</p>
        </div>

        <div className="card-informations">
          <p>
            <span>82</span>
            pedidos
          </p>
          <p>
            <span>34</span>
            likes
          </p>
        </div>

        <span>
          Mais informações
          <img src="" alt="" />
        </span>
      </div>

      <footer>copyright@2020</footer>
    </div>
  );
};

export default Home;
