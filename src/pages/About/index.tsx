import React from 'react';

import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';

import logo from '../../assets/logo.svg';

import './styles.css';

const About = () => {
  return (
    <div className="main-layout">
      <Header logo={logo} />
      <main id="about">
        <section className="about-us">
          <div className="content one">
            <h2>Quem somos nós?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the.
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the
            </p>
          </div>
          <div className="img"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
