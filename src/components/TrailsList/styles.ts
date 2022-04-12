import styled from 'styled-components';

export const TrailsListContainer = styled.ul`
  display: grid;

  @media (min-width: 320px) {
    grid-gap: 70px;
    gap: 70px;

    grid-column: 1;
    grid-template-columns: unset;
  }

  @media (min-width: 768px) {
    grid-gap: 86px 32px;
    gap: 86px 32px;

    grid-column: unset;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
