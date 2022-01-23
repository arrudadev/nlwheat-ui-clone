import styled from 'styled-components';

import Binary01SVG from '../../assets/icons/binary01.svg';
import Binary02SVG from '../../assets/icons/binary02.svg';
import Binary03SVG from '../../assets/icons/binary03.svg';
import LogoSVG from '../../assets/icons/logo.svg';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  position: relative;

  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/backgrounds/banner-background.png');

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

export const Logo = styled(LogoSVG)`
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

export const BinaryIcon01Icon = styled(Binary01SVG)`
  position: absolute;
  top: 95px;
  left: -49px;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const BinaryIcon02Icon = styled(Binary02SVG)`
  position: absolute;
  top: -109px;
  right: -33px;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const BinaryIcon03Icon = styled(Binary03SVG)`
  position: absolute;
  bottom: 38px;
  right: -16px;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;
