import React from 'react';

import {
  Container,
  HeaderCompany,
  InfoContact,
  AreaButton,
  InstagramButton,
  WhatsAppButton,
} from './styles';

import { CompanyDetails } from '../../../pages/CompanyInfo/interfaces';

interface Props {
  company: CompanyDetails;
  message: string;
}

const Info: React.FC<Props> = ({ company, message }) => {
  return (
    <Container>
      <HeaderCompany>
        <img src={company?.logoCompany[0].url} alt="Logo da empresa" />
        <div>
          <h4>{company?.company.name}</h4>
          <span>{company?.company.description}</span>
        </div>
      </HeaderCompany>
      <hr />
      <InfoContact>
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
        <AreaButton>
          <WhatsAppButton
            target="blank"
            href={`https://api.whatsapp.com/send?phone=${company?.company.whatsapp}&text=${message}`}
            id="btn-whatsapp"
          >
            whatsapp
          </WhatsAppButton>
          <InstagramButton
            target="blank"
            href={`https://www.instagram.com/${company?.company.instagram}/`}
            id="btn-instagram"
          >
            instagram
          </InstagramButton>
        </AreaButton>
      </InfoContact>
    </Container>
  );
};

export default Info;
