import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { Link, useHistory } from 'react-router-dom';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import logoCompany from '../../assets/logo_company.svg';
import imagePizza from '../../assets/pizza_2.jpeg';

import './styles.css';

import api from '../../services/api';

import { CompanyDetails, ItemsType, ItemPerType } from './interfaces';

// interface Menu {
//   name: string;
//   description: string;
//   price: number;
//   type: string;
//   size: {
//     initials: string;
//     name: string;
//     description: string;
//   }
// }

// interface filesCompany {
//   url: string;
//   name: string;
//   path: string;
//   size: string;
//   wallpaper: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// interface Company {
//   id: number;
//   name: string;
//   description: string;
//   whatsapp: string;
//   instagram: string;
//   email: string;
// }
// interface CompanyDetails {
//   company: Company,
//   filesCompany: filesCompany[],
//   menu: Menu[],
// }
// interface ItemsType {
//   id: number;
//   name: number;
// }
// interface ItemPerType {
//   name: string;
//   description: string;
//   price: number;
//   type: string;
//   size: {
//     initials: string;
//     name: string;
//     description: string;
//   }
// }

// teste.map(vetor => vetor.map(vetor2 => console.log(vetor2)));

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
  const [type, setType] = useState<ItemsType[]>([]);
  const [itemsPerType, setItemsPerType] = useState<ItemPerType[]>([]);
  const [id, setId] = useState<number>(2);
  const [display, setDisplay] = useState('none');
  const [shadow, setShadow] = useState('box-shadow: 0 4px 4px rgba(0, 0, 0, .25)');
  const [icon, setIcon] = useState(<FiChevronLeft />);

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

    });
  }, []);

  useEffect(() => {
    api.get(`product-type`).then((response) => {

      setType(response.data);
    })
  }, []);

  const btnShadow = {
    boxShadow: shadow,
  };

  const divDisplayed = display === 'flex' ? 'div-display' : 'div-none';
  const divDisplayNone = display === 'flex' ? 'div-none' : 'div-display';

  function handleDisplay() {
    if (display === 'none') {
      setDisplay('flex');
      setIcon(<FiChevronDown color={'#A60000'} />);
      setShadow('inset 4px 4px 10px rgba(0, 0, 0, .25)');
      // setId(id);

    } else {
      setDisplay('none')
      setIcon(<FiChevronLeft color={'#FFF'} />);
      setShadow('0 4px 4px rgba(0, 0, 0, .25)');
      // setId(-1);
    }
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
            type.map(type => (
              <div key={type.id} className="item">
                <button
                  style={btnShadow}
                  onClick={() => (handleDisplay())}
                  className="item-name">
                  <span>{type.name}</span>
                  {icon}
                </button>

                {
                  company.menu.map(item => {
                    if (item.type === type.name) {
                      return <div className={`item-details ${id === 2 ? divDisplayed : divDisplayNone}`}>
                        <div className="side-left">
                          <table className="table-size">
                            <tbody>
                              <tr>
                                <th>Tamanho</th>
                                <th></th>
                                <th>Valor</th>
                              </tr>
                              {item.size}<tr>
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
                            <div>{item.description
                              ? item.description
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
                      </div>
                    }
                  }
                  )
                }
              </div>
            ))
          }
          {/* <div className="item">
            <button
              style={btnShadow}
              onClick={() => (handleDisplay())}
              className="item-name">
              <span>pizzas</span>
              {icon}
            </button>
            <div className={`item-details ${id === 3 ? divDisplayed : divDisplayNone}`}>
              <div className="side-left">
                <table className="table-size">
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
                </table>
                <div className="extra">
                  <h3>Informações adicionais</h3>
                  <div>Vem com um guaraná de 2L</div>
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
            </div>
          </div> */}
        </section>
      </main>
      <footer>copyright@2020</footer>
    </div>
  );
}

export default CompanyInfo;
