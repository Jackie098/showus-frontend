import React from 'react';

import { Container } from './styles';
import {
  CompanyDetails,
  TypesInMenu,
} from '../../../pages/CompanyInfo/interfaces';

interface Props {
  company: CompanyDetails;
  type: TypesInMenu;
  itemClicked: string;
}

const AreaItem: React.FC<Props> = ({ company, type, itemClicked }) => {
  return (
    <Container isActive={type.name === itemClicked}>
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
          <div>Aqui tem alguma coisa</div>
        </div>
      </div>
      <div className="side-right">
        <h4>Sabores</h4>
        <ul>
          {company.menu.map((item) => (
            <li key={`${item.product.id}${new Date()}`}>{item.product.name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default AreaItem;
