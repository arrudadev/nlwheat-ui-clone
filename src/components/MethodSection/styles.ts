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

export const Combinations = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) {
    margin-top: 80px;
  }

  @media (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const CombinationsTitle = styled.h4`
  font-weight: 700;

  margin-bottom: 64px;

  max-width: 312px;

  background-repeat: repeat;
  background-size: 100%;
  background-image: linear-gradient(269.94deg, #ff008e -7.44%, #8257e5 99.94%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 320px) {
    font-size: 20px;
    line-height: 25px;

    max-width: 195px;

    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 42px;

    width: unset;
    max-width: 312px;

    margin-bottom: 64px;
  }
`;

export const CombinationsList = styled.ul`
  display: grid;

  @media (min-width: 320px) {
    grid-gap: 24px;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 375px) {
    grid-gap: 24px 36px;
    gap: 24px 36px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-gap: 32px;
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CombinationsListItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    @media (min-width: 320px) {
      width: 24px;
      height: 24px;

      margin-right: 16px;
    }

    @media (min-width: 768px) {
      width: unset;
      height: unset;

      margin-right: 22px;
    }
  }

  span {
    color: var(--gray);

    @media (min-width: 320px) {
      font-size: 15px;
      line-height: 20px;
    }

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;
