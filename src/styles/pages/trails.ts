import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 320px) {
    width: 100%;

    margin: unset;
  }

  @media (min-width: 768px) {
    margin: 0 24px;
  }

  @media (min-width: 1200px) {
    width: 1120px;

    margin: unset;
  }
`;

export const Title = styled.h1`
  font-weight: 700;

  color: var(--gray);

  @media (min-width: 320px) {
    font-size: 30px;
    line-height: 35px;

    max-width: 270px;

    margin-bottom: 32px;
  }

  @media (min-width: 425px) {
    max-width: unset;
  }

  @media (min-width: 576px) {
    max-width: 424px;
  }

  @media (min-width: 992px) {
    font-size: 36px;
    line-height: 46px;

    margin-bottom: unset;
  }
`;

export const TrailsBody = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  padding-bottom: 160px;

  background: linear-gradient(270deg, #09090a, #121214);
`;

export const TrailsBodyHeadline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 320px) {
    align-items: unset;
    flex-direction: column;

    margin: 80px 24px 86px;
  }

  @media (min-width: 768px) {
    margin: 80px 0 110px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const TrailsBodyParagraph = styled.p`
  @media (min-width: 320px) {
    font-size: var(--font-size);
    font-weight: 400;
    line-height: 26px;

    color: var(--gray);
  }

  @media (min-width: 992px) {
    max-width: 456px;
  }

  @media (min-width: 1200px) {
    line-height: 25px;

    max-width: 576px;
  }

  strong {
    font-weight: 700;

    background-repeat: repeat;
    background-size: 100%;
    background-image: linear-gradient(
      269.94deg,
      #ff008e 71.42%,
      #8257e5 99.94%
    );

    background-clip: text;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
