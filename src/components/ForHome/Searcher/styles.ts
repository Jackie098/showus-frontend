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
  max-width: 600px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 620px) {
    & {
      margin-left: 25px;
    }
  }

  @media (max-width: 500px) {
    & {
      margin-left: 10px;
      justify-content: flex-start !important;
      width: 365px;
    }
  }

  @media (max-width: 400px) {
    & {
      margin-left: 5px;
    }
  }

  div:first-child {
    display: flex;
    justify-content: space-between;
    width: 250px;

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
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        opacity: 0.8;
      }

      &:active {
        box-shadow: none;
        cursor: pointer;
        border: 1px solid var(--primary-color);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
      }

      svg {
        color: white;
      }
    }

    input {
      height: 33px;
      padding-left: 15px;

      flex-shrink: 1;

      background: var(--container-color);
      box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.25);

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

    @media (max-width: 500px) {
      & {
        max-width: 235px;
        justify-content: flex-start;
      }

      input {
        width: 170px;
        margin-left: 15px;
      }
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    max-width: 300px;
    margin-left: 20px;

    label {
      font-size: 14px;
      font-weight: bold;
      color: var(--text-color);
      /* margin: 0 10px; */
      width: 200px;

      @media only screen and (max-width: 610px) {
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

      @media only screen and (max-width: 620px) {
        & {
          width: 180px;
        }
      }

      @media only screen and (max-width: 460px) {
        & {
          width: 150px;
        }
      }

      @media only screen and (max-width: 400px) {
        & {
          width: 130px;
        }
      }

      &::-webkit-select-placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #bdbdbd;
      }
    }
  }
`;
