import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  width: 100%;
  height: 100px;
  border-bottom: 1px solid #c5c5c5;
`;

export const SeachForm = styled.form`
  margin-left: 50px;
  width: 520px;
  max-width: 550px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 33px;
    width: 33px;
    padding: 5px;

    background: var(--primary-color);
    border: 1px solid var(--container-color);
    border-radius: 8px;

    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      box-shadow: none;
      cursor: pointer;
      border: 1px solid var(--primary-color);
    }

    svg {
      color: white;
    }
  }

  input {
    height: 33px;
    padding-left: 15px;
    margin-left: 10px;
    margin-right: 10px;

    flex-shrink: 1;

    background: var(--container-color);

    border: none;
    border-radius: 8px;

    font-size: 14px;
    font-weight: 500;
    color: var(--text-color);

    &::-webkit-input-placeholder {
      font-size: 14px;
      font-weight: 500;
      color: #bdbdbd;
    }

    &:focus {
      border: 1px solid var(--primary-color);
    }
  }

  div {
    display: flex;
    align-items: center;

    label {
      font-size: 14px;
      font-weight: bold;
      color: var(--text-color);
      margin-right: 10px;

      @media only screen and (max-width: 550px) {
        & {
          display: none;
        }
      }
    }

    select {
      height: 33px;
      padding-right: 8px;

      background: white;
      color: #828282;
      font-size: 14px;
      font-weight: bold;

      border: 1px solid var(--primary-color);
      border-radius: 8px;

      padding-left: 15px;

      &::-webkit-select-placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #bdbdbd;
      }
    }
  }
`;
