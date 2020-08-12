import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;
  border-bottom: 1px solid #c5c5c5;

  font-size: 30px;
  font-weight: bold;

  color: var(--text-color);
  background: var(--container-color);

  h4 {
    max-width: 500px;
    text-align: center;
  }

  @media (max-width: 500px) {
    & {
      font-size: 25px;
    }
  }
`;
