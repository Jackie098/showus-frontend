import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, SeachForm } from './styles';

const Seacher: React.FC = () => {
  return (
    <Container>
      <SeachForm>
        <button type="submit">
          <FiSearch size={20} />
        </button>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Pesquisar empresa"
        />
        <div id="select-sort">
          <label>Organizar por:</label>
          <select name="sort" id="sort" value="Mais recentes">
            <option value="0">Mais recentes</option>
          </select>
        </div>
      </SeachForm>
    </Container>
  );
};

export default Seacher;
