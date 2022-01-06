import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  position: relative;

  background: linear-gradient(90deg, #09090a, #121214);

  @media (min-width: 320px) {
    padding: 80px 0;
  }

  @media (min-width: 768px) {
    padding: 160px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1120px;

  margin: 0 24px;

  @media (min-width: 320px) {
    flex-direction: column;

    margin: unset;
  }

  @media (min-width: 576px) {
    margin: 0 24px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const StickyArea = styled.div`
  height: 100%;
`;

export const StickyContainer = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 128px;

    align-items: flex-start;
  }
`;

export const StickyAreaTitle = styled.h3`
  @media (min-width: 320px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;

    color: var(--white);

    margin: 0 24px 40px;
  }

  @media (min-width: 576px) {
    margin: unset;
    margin-bottom: 40px;

    max-width: 327px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 54px;

    margin-bottom: 38px;

    max-width: 616px;
  }
`;

export const ButtonContainer = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    max-width: 272px;

    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    max-width: 384px;

    margin-bottom: unset;
  }
`;

export const CardsArea = styled.div`
  display: grid;

  @media (min-width: 320px) {
    grid-gap: 16px;
    gap: 16px;
    grid-template-columns: unset;
  }

  @media (min-width: 992px) {
    grid-gap: 32px;
    gap: 32px;

    max-width: 544px;
  }
`;
