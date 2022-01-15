import styled from 'styled-components';

import ArrowUpSVG from '../../assets/icons/arrow-up.svg';
import BoostingPeopleSVG from '../../assets/icons/boosting-people.svg';
import RocketseatSVG from '../../assets/icons/rocketseat.svg';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding-top: 80px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 1120px;

  @media (min-width: 320px) {
    margin: 0 24px;
  }

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;

    color: var(--text);

    max-width: 180px;

    @media (min-width: 320px) {
      margin-top: 24px;
    }

    @media (min-width: 768px) {
      margin-top: 52px;
    }
  }
`;

export const BoostingPeopleIcon = styled(BoostingPeopleSVG)`
  @media (min-width: 320px) {
    width: 194px;
    height: auto;
  }

  @media (min-width: 768px) {
    width: unset;
  }
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 320px) {
    grid-gap: 32px;
    gap: 32px;

    padding: 64px 0;
  }

  @media (min-width: 768px) {
    padding: 0 0 80px;
  }

  @media (min-width: 992px) {
    grid-gap: 120px;
    gap: 120px;
  }
`;

export const MenuTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 36px;

  color: var(--gray);
`;

export const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 700;
  line-height: 36px;
`;

export const MenuLink = styled.a`
  position: relative;
  text-decoration: none !important;

  width: fit-content;

  color: var(--text);

  padding-bottom: 5px;

  transition: all 0.3s ease;

  &:hover {
    color: var(--gray);

    &::before {
      left: 0;
      right: 0;

      width: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 0;
    height: 2px;

    background: var(--primary);

    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }
`;

export const Down = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 32px 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 112px;

    width: 100%;
    height: 1px;

    background: var(--shape-hover);
  }
`;

export const RocketseatIcon = styled(RocketseatSVG)`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 576px) {
    display: flex;
  }
`;

export const GoToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  border: 0;
  border-radius: 5px;

  background: var(--shape);

  transition: all 0.3s ease;

  &:hover {
    background: var(--shape-hover);
  }
`;

export const ArrowUpIcon = styled(ArrowUpSVG)`
  color: var(--gray);
`;
