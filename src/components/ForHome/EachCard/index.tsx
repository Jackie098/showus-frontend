import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { CompanyCard } from '../../../pages/Home/interfaces';

import logoCompany from '../../../assets/logo_company.svg';

import { Card, Info, MoreInfo } from './styles';

interface Props {
  card: CompanyCard;
  id: number;
  handleClickToLinkDetails(id: number): void;
}

const EachCard: React.FC<Props> = ({ card, id, handleClickToLinkDetails }) => {
  return (
    <Card key={card.company.name} onClick={() => handleClickToLinkDetails(id)}>
      {/*Add form here*/}
      <Info>
        <img
          src={card.fileLogo?.url ? card.fileLogo.url : logoCompany}
          // className="logo-company"
          alt="Logo da empresa"
        />
        <img
          src={card.fileWallpaper.url}
          className="walpaper"
          // className="wallpaper-card"
          alt="Papel de Parede"
        />
        <h3>{card.company.name}</h3>
        <p>{card.company.description}</p>
      </Info>
      {/* <div className="card-informations">
                  <p>
                    <span>whastapp</span>
                    {card.company.whatsapp}
                  </p>
                  <p>
                    <span>instagram</span>
                    {card.company.instagram}
                  </p>
                </div> */}
      <MoreInfo>
        Mais informações
        <FiArrowRight size={18} />
      </MoreInfo>
    </Card>
  );
};

export default EachCard;
