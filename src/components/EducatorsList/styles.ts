import styled from 'styled-components';

export const List = styled.ul`
  display: grid;

  @media (min-width: 320px) {
    grid-gap: 16px;
    gap: 16px;
    grid-template-columns: unset;
  }

  @media (min-width: 768px) {
    grid-gap: 104px 24px;
    gap: 104px 24px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-gap: 104px 32px;
    gap: 104px 32px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
