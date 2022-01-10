import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  position: relative;

  @media (min-width: 320px) {
    padding: 80px 0;
  }

  @media (min-width: 768px) {
    padding: 160px 0;
  }
`;

export const Container = styled.div`
  flex-direction: column;

  @media (min-width: 320px) {
    display: flex;
    justify-content: space-between;

    width: 1120px;

    margin: 0 24px;
  }

  @media (min-width: 1200px) {
    margin: unset;
  }
`;

export const Title = styled.h3`
  @media (min-width: 320px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;

    color: var(--white);
  }

  @media (min-width: 576px) {
    margin: unset;

    max-width: 350px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 54px;

    max-width: 562px;
  }
`;

export const Cards = styled.div`
  display: grid;

  @media (min-width: 320px) {
    grid-template-columns: unset;
    gap: 24px;
    grid-gap: 24px;

    margin-top: 40px;
  }

  @media (min-width: 768px) {
    gap: 32px;
    grid-gap: 32px;
    grid-template-columns: repeat(2, 1fr);

    margin-top: 80px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
