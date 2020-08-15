import styled from 'styled-components';

export const Card = styled.li`
  width: 300px;
  height: 400px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 50px;

  background: var(--container-color);

  border-radius: 8px;
  border: 1px solid var(--primary-color);
  list-style-type: none;

  &:hover {
    -webkit-transform: scale(1.01);
    -moz-transform: scale(1.01);
    -o-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);

    cursor: pointer;
  }

  @media (max-width: 400px) {
    width: 85%;
    height: 22%;
  }
`;

export const Info = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img:first-child {
    position: absolute;
    top: -25px;
    height: 45px;
    width: 45px;

    @media (max-width: 400px) {
      width: 40px;
      height: 40px;
    }
  }

  img.walpaper {
    height: 200px;
    width: 235px;

    border-radius: 12px;

    @media (max-width: 400px) {
      width: 200px;
      height: 160px;
    }
    /* box-shadow: inset 10px 10px 10px black; */
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: var(--title-color);
    margin-top: 15px;

    @media (max-width: 400px) {
      font-size: 18px;
    }
  }

  p {
    align-content: center;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color);
    margin-top: 3px;

    @media (max-width: 400px) {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`;

export const MoreInfo = styled.span`
  display: flex;

  justify-content: flex-end;
  align-items: center;

  /* width: 110px; */
  min-width: 108px;

  color: var(--primary-color);
  font-size: 12px;
  font-weight: 400;
  text-align: right;

  margin-bottom: -20px;
  margin-right: -18px;

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
