import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/backgrounds/testimonials-bg.png');

  @media (min-width: 320px) {
    padding: 80px 0px;
  }

  @media (min-width: 768px) {
    padding: 96px 0px;
  }
`;

export const Container = styled.div`
  @media (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 1120px;

    margin: 0px 24px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    margin: unset;
  }
`;

export const StyledSwiper = styled(Swiper)`
  height: 100%;
  width: 100%;

  @media (min-width: 320px) {
    max-height: 400px;
  }

  @media (min-width: 576px) {
    max-height: 630px;
  }

  @media (min-width: 1200px) {
    max-height: 420px;
  }
`;
