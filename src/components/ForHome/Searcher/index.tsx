import React, { ChangeEvent, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, SeachForm } from './styles';

import { Sorter } from '../../../pages/Home/interfaces';

interface Props {
  sorter: Sorter[];
  selectedSorter: string;
  handleSubmitSearch(event: FormEvent): void;
  handleInputChange(event: ChangeEvent<HTMLInputElement>): void;
  handleSelectedSort(event: ChangeEvent<HTMLSelectElement>): void;
}

const Searcher: React.FC<Props> = ({
  sorter,
  selectedSorter,
  handleSubmitSearch,
  handleInputChange,
  handleSelectedSort,
}) => {
  return (
    <Container>
      <SeachForm>
        <div>
          <button
            type="submit"
            name="buttonSort"
            id="buttonSort"
            onClick={handleSubmitSearch}
          >
            <FiSearch size={20} />
          </button>
          <input
            type="text"
            name="inputSort"
            id="inputSort"
            placeholder="Pesquisar empresa"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Organizar por:</label>
          <select
            name="selectSort"
            id="selectSort"
            value={selectedSorter}
            onChange={handleSelectedSort}
            // placeholder="Escolha a ordem"
          >
            <option key={0} value="0">
              Escolha como ordenar
            </option>
            {sorter.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
            {/* <option value="1">Mais recentes</option> */}
          </select>
        </div>
      </SeachForm>
    </Container>
  );
};

export default Searcher;
