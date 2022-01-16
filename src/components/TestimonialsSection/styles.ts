import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import QuotesSVG from '../../assets/icons/quotes.svg';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/testimonials-bg.png');

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

export const TestimonialCard = styled.div`
  position: relative;

  width: 100%;

  margin-top: 14px;

  padding-bottom: 64px;

  @media (min-width: 992px) {
    height: 100%;
  }
`;

export const QuotesIcon = styled(QuotesSVG)`
  position: absolute;
  top: -14px;
  left: 32px;

  @media (min-width: 320px) {
    width: 36px;
    height: auto;
  }

  @media (min-width: 576px) {
    width: auto;
  }
`;

export const TestimonialContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;

  background: var(--shape);

  @media (min-width: 320px) {
    padding: 46px 24px 24px;
  }

  @media (min-width: 576px) {
    padding: 56px 32px 32px;
  }
`;

export const TestimonialParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  @media (min-width: 320px) {
    font-size: var(--font-text);
    font-weight: 400;
    line-height: 26px;

    color: var(--gray);
  }

  @media (min-width: 1200px) {
    line-height: 25px;

    max-width: 296px;
  }
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;

  margin-top: 24px;
`;

export const TestimonialAvatar = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  background: var(--shape);

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;

    width: 58px;
    height: 58px;

    border-radius: 50%;
    background: linear-gradient(
      269.94deg,
      rgb(255, 0, 142) -7.44%,
      rgb(130, 87, 229) 99.94%
    );
  }
`;

export const TestimonialAvatarImgWrapper = styled.div`
  display: inline-block;

  position: relative;

  max-width: 100%;

  overflow: hidden;
  box-sizing: border-box;

  margin: 0;
`;

export const TestimonialAvatarImg = styled.img`
  width: 52px;
  height: 52px;

  border-radius: 50%;
`;

export const TestimonialName = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 16px;

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;

    color: var(--gray);

    @media (min-width: 320px) {
      max-width: 136px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (min-width: 576px) {
      max-width: 200px;
    }

    @media (min-width: 768px) {
      max-width: 300px;
    }
  }
`;
