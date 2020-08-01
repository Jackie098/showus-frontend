import styled, { css } from 'styled-components';

interface IsActive {
  readonly isActive: boolean;
}

export const ButtonItem = styled.button<IsActive>`
  background: var(--title-color);
  border: 0;

  width: 100%;
  max-width: 125px;
  height: 35px;

  border-radius: 8px;
  padding-left: 10px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
  box-shadow: ${(props) =>
    props.isActive
      ? css`inset 4px 4px 10px rgba(0, 0, 0, .25)`
      : css`0 4px 4px rgba(0, 0, 0, .25)`};

  span {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
  }

  svg {
    font-size: 30px;

    polyline {
      color: ${(props) =>
        props.isActive ? css`var(--primary-color)` : css`#FFF`};
    }
  }
`;

export const AreaItem = styled.div<IsActive>`
  display: ${(props) => (props.isActive ? css`flex` : css`none`)};

  justify-content: space-between;
  margin-bottom: 15px;
  padding: 25px;
  background: #e5e5e5;
  border-radius: 8px;
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.25);
`;
