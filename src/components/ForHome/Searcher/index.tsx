import React, { ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, SeachForm } from './styles';

import { Sorter } from '../../../pages/Home/interfaces';

interface Props {
  sorter: Sorter[];
  selectedSorter: string;
  handleSelectedSort(event: ChangeEvent<HTMLSelectElement>): void;
}

const Searcher: React.FC<Props> = ({
  sorter,
  selectedSorter,
  handleSelectedSort,
}) => {
  return (
    <Container>
      <SeachForm>
        <div>
          <button type="submit">
            <FiSearch size={20} />
          </button>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Pesquisar empresa"
          />
        </div>
        <div id="select-sort">
          <label>Organizar por:</label>
          <select
            name="sort"
            id="sort"
            value={selectedSorter}
            onChange={handleSelectedSort}
            // placeholder="Escolha a ordem"
          >
            <option value="0">Escolha como ordenar</option>
            {sorter.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
            {/* <option value="1">Mais recentes</option> */}
          </select>
        </div>
      </SeachForm>
    </Container>
  );
};

export default Searcher;
