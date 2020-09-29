import styled, { css } from 'styled-components';

interface IsActive {
  readonly isActive: boolean;
}

export const Container = styled.div<IsActive>`
  display: ${(props) => (props.isActive ? css`flex` : css`none`)};

  justify-content: space-between;
  margin-bottom: 15px;
  padding: 25px;
  background: #e5e5e5;
  border-radius: 8px;
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.25);
`;
