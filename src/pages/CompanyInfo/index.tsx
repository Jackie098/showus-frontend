import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { Link, useHistory } from 'react-router-dom';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ButtonItem, AreaItem } from './styles';


import logo from '../../assets/logo.svg';
import logoCompany from '../../assets/logo_company.svg';
import imagePizza from '../../assets/pizza_2.jpeg';

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
  filesCompany: [{
    url: '',
    name: '',
    path: '',
    size: 0,
    wallpaper: false,
    createdAt: '',
    updatedAt: '',
  }],
  menu: [
    {
      name: '',
      description: '',
      price: 0,
      type: '',
      size: {
        initials: '',
        name: '',
        description: '',
      },
    }
  ]
}

const CompanyInfo = () => {

  const [company, setCompany] = useState<CompanyDetails>(infoTemplate);
  const [typesInMenu, setTypesInMenu] = useState<TypesInMenu[]>([]);
  const [itemClicked, setItemClicked] = useState<string>('');

  const history = useHistory();
  const message = `Olá! Eu vim através do ShowMe e gostaria de fazer um pedido!`

  useEffect(() => {
    const companyIdString = localStorage.getItem('companyId');

    if (!companyIdString) {
      alert("Ocorreu um erro ao tentar carregar a empresa, tente novamente!");

      history.push('/');

      return;
    }

    const companyId = parseInt(companyIdString);

    api.get(`detail/${companyId}`).then((response) => {

      setCompany(response.data);
      setTypesInMenu(response.data.typesInMenu);
    });


  }, []);

  // useEffect(() => {
  //   api.get(`product-type`).then((response) => {

  //     setType(response.data);
  //   })
  // }, []);

  function handleDisplay(id: string) {
    if (itemClicked === id) {
      setItemClicked('');

      return;
    }

    setItemClicked(id);
  }

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
                <h4>{company?.company.name}</h4>
                <span>{company?.company.description}</span>
              </div>
            </div>
            <hr />
            <div className="contact">
              <div className="contact-string">
                <h4>Informações para contato:</h4>
                <div className="contact-datas">
                  <table>
                    <thead>
                      <tr>
                        <th>telefone:</th>
                        <td>{company?.company.whatsapp}</td>
                      </tr>
                      <tr>
                        <th>instagram:</th>
                        <td>{company?.company.instagram}</td>
                      </tr>
                      <tr>
                        <th>e-mail:</th>
                        <td>{company?.company.email}</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <h2>*FAZER PEDIDO*</h2>
              <div className="contact-button">
                <a target="blank" href={`https://api.whatsapp.com/send?phone=${company?.company.whatsapp}&text=${message}`} id="btn-whatsapp">whatsapp</a>
                <a target="blank" href={`https://www.instagram.com/${company?.company.instagram}/`} id="btn-instagram">instagram</a>
              </div>
            </div>
          </div>
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
              renderArrowPrev={(onClickHandle, hasPrev, label) =>
                (
                  <div className="btn-left" onClick={onClickHandle}>
                    <FiChevronLeft size={35} />
                  </div>
                )}
              renderArrowNext={(onClickHandle, hasNext, label) =>
                (
                  <div className="btn-right" onClick={onClickHandle}>
                    <FiChevronRight size={35} />
                  </div>
                )}
            >
              {/* Aparentemente, uma primeira linha sendo um comentário, remove
                * um erro sobre "elemento não é aceito como React.child" */}
              {company?.filesCompany.map(image => (

                <img key={image.createdAt} src={image.url} alt="Imagens dos produtos da empresa" />
              ))}

              <img src={imagePizza}></img>
            </ Carousel>
          </div>
        </section>
        <hr />
        <section className="company-menu">
          <h3>Cardápio:</h3>
          {
            typesInMenu.map(type => (
              <div key={type.id} className="items">
                <ButtonItem
                  onClick={() => { handleDisplay(type.name) }}
                  isActive={type.name === itemClicked}
                >
                  <span>{type.name}</span>
                  {type.name === itemClicked
                    ? <FiChevronDown />
                    : <FiChevronLeft />
                  }
                </ButtonItem>

                <AreaItem isActive={type.name === itemClicked}>
                  <div className="side-left">
                    <table className="table-size">
                      <tbody>
                        <tr>
                          <th>Tamanho</th>
                          <th></th>
                          <th>Valor</th>
                        </tr>
                        <tr>
                          <td>Pequeno</td>
                          <td></td>
                          <td>R$ 30,00</td>
                        </tr>
                        <tr>
                          <td>Médio</td>
                          <td></td>
                          <td>R$ 35,00</td>
                        </tr>
                        <tr>
                          <td>Grande</td>
                          <td></td>
                          <td>R$ 40,00</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="extra">
                      <h3>Informações adicionais</h3>
                      <div>{"item.description"
                        ? "item.description"
                        : 'Esta item não possui nenhuma informação adicional.'}</div>
                    </div>
                  </div>
                  <div className="side-right">
                    <h4>Sabores</h4>
                    <ul>
                      <li>carne de sol</li>
                      <li>calabresa</li>
                      <li>frango com catupiry</li>
                      <li>carne de sol com bacon</li>
                      <li>carne de sol</li>
                      <li>calabresa</li>
                      <li>frango com catupiry</li>
                      <li>carne de sol com bacon</li>
                      <li>carne de sol</li>
                      <li>calabresa</li>
                      <li>frango com catupiry</li>
                      <li>carne de sol com bacon</li>
                      <li>carne de sol</li>
                      <li>calabresa</li>
                      <li>frango com catupiry</li>
                      <li>carne de sol com bacon</li>
                      <li>carne de sol</li>
                      <li>calabresa</li>
                      <li>frango com catupiry</li>
                      <li>carne de sol com bacon</li>
                    </ul>
                  </div>
                </AreaItem>
              </div>
            ))
          }
        </section>
      </main>
      <footer>copyright@2020</footer>
    </div>
  );
}

export default CompanyInfo;
