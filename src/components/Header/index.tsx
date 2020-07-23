import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '../../assets/logo.svg';

import { Container, Menu, Contact } from './styles';

interface Props {
  logo: string;
}

const Header: React.FC<Props> = ({ logo }) => {
  return (
    <Container>
      <Menu>
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
      </Menu>
      <Contact className="for-contact">
        <Link to="/">Contate-nos</Link>
      </Contact>
    </Container>
  );
};

export default Header;
