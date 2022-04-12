import styled from 'styled-components';

import LogoSVG from '../../assets/icons/logo.svg';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-position: top;
  background-repeat: no-repeat;
  background-image: url('/images/backgrounds/background-heat.png');

  @media (min-width: 320px) {
    background-size: cover;
  }

  @media (min-width: 768px) {
    background-size: 100vw 360px;
  }

  @media (min-width: 992px) {
    background-size: 100vw 336px;
  }
`;

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

export const TrailsHeder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 320px) {
    align-items: unset;
    flex-direction: column;

    height: auto;

    padding: 24px 24px 64px;
  }

  @media (min-width: 768px) {
    height: 360px;
  }

  @media (min-width: 992px) {
    align-items: center;
    flex-direction: row;

    height: 336px;

    padding: 0 24px;
  }

  @media (min-width: 1200px) {
    padding: unset;
  }
`;

export const TrailsHederHeadline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoIcon = styled(LogoSVG)`
  height: auto;

  @media (min-width: 320px) {
    width: 256px;

    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    width: 348px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 32px;
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
