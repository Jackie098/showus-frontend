import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// import { useHistory } from 'react-router-dom';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ButtonItem, MenuImg } from './styles';

import Header from '../../components/UI/Header';
import Info from '../../components/ForCompanyInfo/Info';
import AreaItem from '../../components/ForCompanyInfo/Menu';
import Footer from '../../components/UI/Footer';

import logo from '../../assets/logo.svg';
import menu from '../../assets/menu_crazy_dog.png';

import './styles.css';

import api from '../../services/api';

import { CompanyDetails, TypesInMenu } from './interfaces';

const infoTemplate = {
  company: {
    id: 0,
    name: '',
    description: '',
    whatsapp: '',
    instagram: '',
    email: '',
  },
  filesCompany: [
    {
      url: '',
      name: '',
      path: '',
      size: 0,
      wallpaper: false,
      logo: false,
      menu: false,
      createdAt: '',
      updatedAt: '',
    },
  ],
  logoCompany: [
    {
      url: '',
      name: '',
      path: '',
      size: 0,
      wallpaper: false,
      logo: false,
      menu: false,
      createdAt: '',
      updatedAt: '',
    },
  ],
  menu: [
    {
      product: {
        id: 0,
        name: '',
        description: '',
        price: 0,
        type: '',
        size: {
          initials: '',
          name: '',
          description: '',
        },
      },
    },
  ],
};

const CompanyInfo = () => {
  const [company, setCompany] = useState<CompanyDetails>(infoTemplate);
  const [typesInMenu, setTypesInMenu] = useState<TypesInMenu[]>([]);
  const [itemClicked, setItemClicked] = useState<string>('');

  // const history = useHistory();
  const message = `Olá! Eu vim através do ShowMe e gostaria de fazer um pedido!`;

  useEffect(() => {
    const companyIdString = localStorage.getItem('companyId');

    if (!companyIdString) {
      alert('Ocorreu um erro ao tentar carregar a empresa, tente novamente!');

      // history.push('/');

      return;
    }

    const companyId = parseInt(companyIdString);

    api.get(`detail/${companyId}`).then((response) => {
      setCompany(response.data);
      setTypesInMenu(response.data.typesInMenu);
    });
  }, []);

  function handleDisplay(id: string) {
    if (itemClicked === id) {
      setItemClicked('');

      return;
    }

    setItemClicked(id);
  }

  return (
    <div className="main-container">
      <Header logo={logo} />

      <main id="main-info">
        <section className="company-details">
          <Info company={company} message={message} />

          <div className="image-carousel">
            <Carousel
              interval={8000}
              transitionTime={1300}
              showIndicators={true}
              showStatus={true}
              showThumbs={false}
              emulateTouch={true}
              infiniteLoop={true}
              showArrows={false}
              autoPlay={true}
              className="carousel-container"
              renderArrowPrev={(onClickHandle, hasPrev, label) => (
                <div className="btn-left" onClick={onClickHandle}>
                  <FiChevronLeft size={35} />
                </div>
              )}
              renderArrowNext={(onClickHandle, hasNext, label) => (
                <div className="btn-right" onClick={onClickHandle}>
                  <FiChevronRight size={35} />
                </div>
              )}
            >
              {/* Aparentemente, uma primeira linha sendo um comentário, remove
               * um erro sobre "elemento nãmpany?.filesCompany.map((image) =>
               ( */}
              {company?.filesCompany.map((image) => {
                if (!image.menu) {
                  return (
                    <img
                      key={image.createdAt}
                      src={image.url}
                      alt="Imagens dos produtos da empresa"
                    />
                  );
                }
              })}
            </Carousel>
          </div>
        </section>
        <hr />
        <section className="company-menu">
          <h3>Cardápio:</h3>
          {typesInMenu.map((type) => (
            <div key={type.id} className="items">
              <ButtonItem
                onClick={() => {
                  handleDisplay(type.name);
                }}
                isActive={type.name === itemClicked}
              >
                <span>{type.name}</span>
                {type.name === itemClicked ? (
                  <FiChevronDown />
                ) : (
                  <FiChevronLeft />
                )}
              </ButtonItem>

              <div id="image-central">
                <MenuImg src={menu} isActive={type.name === itemClicked} />
              </div>
              {/* <AreaItem
                company={company}
                type={type}
                itemClicked={itemClicked}
              /> */}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyInfo;
