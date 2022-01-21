import styled, { css } from 'styled-components';

import CalendarSVG from '../../assets/icons/calendar.svg';
import OnlineSVG from '../../assets/icons/online.svg';

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

const detailIconCSS = css`
  @media (min-width: 320px) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: 992px) {
    width: unset;
    height: unset;
  }
`;

export const CalendarIcon = styled(CalendarSVG)`
  ${detailIconCSS}
`;

export const OnlineIcon = styled(OnlineSVG)`
  ${detailIconCSS}
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
