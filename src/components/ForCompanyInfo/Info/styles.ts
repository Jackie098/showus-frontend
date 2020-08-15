import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-grow: 0.5; */
  flex-basis: 500px;

  hr {
    border: 0.3px solid #c5c5c5;
  }

  @media (max-width: 960px) {
    flex-basis: 450px;
  }

  @media (max-width: 900px) {
    flex-basis: 400px;
  }

  @media (max-width: 800px) {
    flex-basis: 350px;
  }

  @media (max-width: 800px) {
    flex-basis: 350px;
  }

  /* @media (max-width: 700px) {
    margin: 0;
  } */
`;

export const HeaderCompany = styled.div`
  display: flex;
  justify-content: flex-start;

  height: 95px;
  /* max-height: 144px; */
  /* width: 350px; */
  /* max-width: 300px; */

  padding-left: 30px;

  img {
    width: 65px;
    height: 75px;

    border-radius: 35%;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    padding-left: 20px;

    h4:first-child {
      color: var(--title-color);
      font-weight: bold;
      font-size: 25px;
    }

    span {
      padding-left: 20px;

      color: var(--text-color);
      font-weight: 500;
      font-size: 18px;
    }
  }

  @media (max-width: 800px) {
    justify-content: center !important;
    align-items: center !important;

    h4 {
      font-size: 20px !important;
    }

    span {
      font-size: 14px !important;
    }

    img {
      width: 55px;
      height: 65px;
    }
  }

  @media (max-width: 700px) {
    padding: 10px;
  }
`;

export const InfoContact = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  div:first-child {
    align-self: flex-start;
    padding: 20px 15px 15px 15px;

    h4 {
      color: var(--title-color);
      max-width: max-content;
      font-size: 18px;
    }

    div {
      width: 100%;
      max-width: 400px;
      height: 100%;
      max-height: 200px;
      margin: 25px 0px 20px 15px;

      display: flex;
      flex-direction: column;

      table {
        height: 100px;

        tr {
          margin-top: 15px;
          margin-bottom: 20px;
        }

        th {
          font-size: 15px;
          font-weight: 500;

          text-align: right;

          color: var(--title-color);
        }

        th:first-child {
          margin-top: 0;
        }

        td {
          color: var(--text-color);
          font-size: 15px;
          font-weight: normal;
          text-align: left;
          padding-left: 35px;
        }
      }
    }
  }

  h2 {
    font-size: 23px;
    text-align: center;
    color: var(--primary-color);

    @media (max-width: 700px) {
      font-size: 20px;
    }
  }
`;

export const AreaButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 350px;

  @media (max-width: 700px) {
    max-width: 330px;
  }
`;

export const Button = styled.a`
  display: flex;

  width: 100%;
  max-width: 150px;
  height: 40px;

  justify-content: center;
  align-items: center;
  flex-shrink: 1;

  border-radius: 8px;
  text-decoration: none;

  color: #fff;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    opacity: 0.4;
  }
`;

export const WhatsAppButton = styled(Button)`
  background: #34cf74;
`;

export const InstagramButton = styled(Button)`
  background: #ad36d9;
`;
