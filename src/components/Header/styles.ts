import styled from 'styled-components';

import LogoSVG from '../../assets/icons/logo.svg';

const animation = {
  hide: `transform: translateY(-150px);`,
  show: `transform: translateY(0);`,
};

type StyledHeaderProps = {
  hide: boolean;
  show: boolean;
};

export const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 500;

  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);

  backdrop-filter: saturate(180%) blur(15px);

  background: linear-gradient(
      269.94deg,
      rgba(255, 0, 142, 0.08) -7.44%,
      rgba(130, 87, 229, 0.08) 99.94%
    ),
    rgba(0, 0, 0, 0.5);

  transition: all 0.3s ease-in;

  ${props => props.hide && animation.hide}

  ${props => props.show && animation.show}

  @media (min-width: 320px) {
    height: 56px;
  }

  @media (min-width: 576px) {
    height: 86px;
  }
`;

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1120px;

  @media (min-width: 320px) {
    margin: 0 24px;
  }

  @media (min-width: 576px) {
    flex-direction: row;
  }

  @media (min-width: 992px) {
    padding: 0;
  }

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

export const LogoIcon = styled(LogoSVG)`
  cursor: pointer;

  @media (min-width: 320px) {
    width: 100%;
    height: auto;

    max-width: 150px;
  }

  @media (min-width: 576px) {
    width: 100%;
    height: auto;

    max-width: 180px;
  }

  @media (min-width: 992px) {
    max-width: 238px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JoinMissionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;

  border: 0;
  border-radius: 5px;

  background: linear-gradient(269.94deg, #ff008e -7.44%, #8257e5 99.94%);

  color: var(--white);

  text-transform: uppercase;

  @media (min-width: 320px) {
    font-size: 12px;
    line-height: 16px;

    padding: 10px 8px;
  }

  @media (min-width: 375px) {
    font-size: 14px;

    padding: 12px 16px;
  }

  @media (min-width: 992px) {
    font-size: 16px;
    line-height: 19px;

    padding: 12px 24px;
  }
`;
