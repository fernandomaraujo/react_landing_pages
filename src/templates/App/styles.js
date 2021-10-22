import styled, { css } from 'styled-components';

export const Wrapper = styled.div`

  // Possibilitando o uso de JS, pegando as props
  ${(props) => css`
    background: ${props.background}
  `}
`;
