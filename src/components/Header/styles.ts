import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;

  padding: 5px 30px 5px 30px;

  background: var(--primary-color);
  border-bottom: 2px solid var(--text-color);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  align-items: center;
  display: flex;

  img {
    height: 80px;
    width: 80px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;

    li {
      margin-left: 20px;
      color: #fff;
      font-weight: bold;

      a {
        text-decoration: none;
        font-size: 18px;
        color: #fff;
      }

      a:hover {
        border-bottom: 3px solid white;
        color: var(--title-color);
        transition: 0.1s;
      }
    }
  }
`;

export const Contact = styled.div`
  a {
    height: 40px;
    width: 110px;
    min-width: 85px;

    padding: 10px;
    border-radius: 8px;

    background: white;

    font-size: 14px;
    font-weight: bold;
    color: var(--text-color);

    text-decoration: none;

    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  a:hover {
    background: #fefefe;
    box-shadow: none;
  }
`;
