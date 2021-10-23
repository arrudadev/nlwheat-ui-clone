import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  position: relative;
  height: 100vh;

  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/home/banner-background.png');

  overflow: hidden;

  @media (min-width: 320px) {
    min-height: 100vh;
    padding-top: 24px;
  }

  @media (min-width: 992px) {
    min-height: 100vh;
    padding: unset;
  }
`;

export const Container = styled.div`
  @media (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;

    margin: unset;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 1120px;
    margin: 0 24px;
  }

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 320px) {
    padding: 0 24px;
  }

  @media (min-width: 992px) {
    padding: 84px 0;
  }
`;

export const Logo = styled.img`
  @media (min-width: 320px) {
    width: 256px;
    height: auto;
  }

  @media (min-width: 992px) {
    width: 100%;
    max-width: 401px;
  }
`;

export const Edition = styled.strong`
  font-size: 18px;
  font-weight: 500;
  line-height: 16px;
  color: var(--yellow);

  span {
    margin: 0 16px;
  }

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  color: var(--white);
  font-weight: 700;
  margin: 40px 0 24px;

  @media (min-width: 320px) {
    font-size: 30px;
    line-height: 35px;
  }

  @media (min-width: 768px) {
    max-width: 536px;
    font-size: 64px;
    line-height: 64px;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  color: var(--gray);

  @media (min-width: 320px) {
    font-size: 13px;
    line-height: 25px;
    max-width: 327px;
  }

  @media (min-width: 375px) {
    font-size: 15px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
    max-width: 505px;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 64px;

  @media (min-width: 320px) {
    grid-gap: 8px;
    gap: 8px;
    margin-top: 32px;
    max-width: 327px;
  }

  @media (min-width: 992px) {
    grid-gap: 80px;
    gap: 80px;
    max-width: unset;
    margin-top: 64px;
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailIcon = styled.img`
  @media (min-width: 320px) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: 992px) {
    width: unset;
    height: unset;
  }
`;

export const DetailText = styled.span`
  font-weight: 500;
  color: var(--gray);

  @media (min-width: 320px) {
    font-size: 15px;
    line-height: 20px;
    margin-left: 16px;
  }

  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 28px;
    margin-left: 32px;
  }
`;

export const Subscription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: relative;
  width: 100%;

  background: linear-gradient(
      142.43deg,
      rgba(180, 148, 255, 0.1) 15.34%,
      rgba(255, 103, 188, 0.1) 88.47%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

  backdrop-filter: blur(20px);

  @media (min-width: 320px) {
    max-width: unset;
    margin-top: 28px;
    padding: 32px 24px 24px;
  }

  @media (min-width: 992px) {
    margin: unset;
    max-width: 380px;
    padding: 32px 48px 24px;
  }

  @media (min-width: 1200px) {
    max-width: 480px;
  }
`;
