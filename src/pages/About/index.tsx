import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './styles.css';

const About = () => {
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
      <main id="about">
        <section className="about-us">
          <div className="content one">
            <h2>Quem somos nós?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the.
            </p>
          </div>
          <div className="img"></div>
        </section>
        <section className="about-us">
          <div className="content two">
            <h2>Quem somos nós?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the
            </p>
          </div>
          <div className="img"></div>
        </section>
        <section className="about-us">
          <div className="content three">
            <h2>Quem somos nós?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the
            </p>
          </div>
          <div className="img"></div>
        </section>
      </main>
      <footer>copyright@2020</footer>
    </div >
  );
  ;
}

export default About;
