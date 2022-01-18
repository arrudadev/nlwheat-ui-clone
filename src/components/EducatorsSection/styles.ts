import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  position: relative;

  @media (min-width: 320px) {
    padding: 160px 0 80px;

    background: var(--background);
  }

  @media (min-width: 768px) {
    padding: 160px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 320px) {
    margin: unset;

    width: 1120px;
  }

  @media (min-width: 768px) {
    margin: 0 24px;
  }

  @media (min-width: 1200px) {
    margin: unset;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 320px) {
    flex-direction: column;

    margin: 0 24px;

    padding-bottom: 40px;
  }

  @media (min-width: 768px) {
    margin-bottom: 144px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Title = styled.h3`
  max-width: 416px;

  @media (min-width: 320px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;

    color: var(--white);
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 54px;
  }
`;

export const Paragraph = styled.p`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 50px;
    height: 1px;

    background: var(--carbon);

    @media (min-width: 320px) {
      display: none;
    }

    @media (min-width: 992px) {
      display: flex;
    }
  }

  @media (min-width: 320px) {
    font-size: var(--font-text);
    font-weight: 400;
    line-height: 26px;

    color: var(--gray);

    padding-top: 24px;
  }

  @media (min-width: 992px) {
    max-width: 400px;

    padding-top: 40px;
  }

  @media (min-width: 1200px) {
    max-width: 544px;

    line-height: 25px;
  }
`;

export const EducatorsList = styled.ul`
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
