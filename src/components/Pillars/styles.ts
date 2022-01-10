import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) {
    margin-top: 80px;
  }

  @media (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const Title = styled.h4`
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

export const List = styled.ul`
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

export const Item = styled.li`
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
