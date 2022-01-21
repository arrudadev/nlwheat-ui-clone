import styled from 'styled-components';

import DoWhileSVG from '../../assets/icons/do-while.svg';
import NlwSVG from '../../assets/icons/nlw.svg';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  position: relative;

  overflow: hidden;

  background: linear-gradient(90deg, #09090a, #121214);

  min-height: 100vh;

  @media (min-width: 320px) {
    padding-top: 24px;
  }

  @media (min-width: 992px) {
    padding-top: unset;
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
    align-items: center;
    flex-direction: row;

    width: 1120px;

    margin: 0 24px;
  }

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 320px) {
    padding: 0 24px;
  }

  @media (min-width: 992px) {
    padding: unset;
  }
`;

export const Logos = styled.div`
  display: flex;

  margin-bottom: 24px;

  @media (min-width: 320px) {
    align-items: flex-start;
    flex-direction: column;
  }

  @media (min-width: 576px) {
    align-items: center;
    flex-direction: row;
  }

  span {
    margin: 0 32px;

    color: var(--white);

    @media (min-width: 320px) {
      font-size: 24px;
    }

    @media (min-width: 576px) {
      line-height: 54px;
    }

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }
`;

export const NlwIcon = styled(NlwSVG)`
  @media (min-width: 320px) {
    width: 80px;
    height: auto;
  }

  @media (min-width: 576px) {
    width: unset;
  }
`;

export const DoWhileIcon = styled(DoWhileSVG)`
  @media (min-width: 320px) {
    width: 200px;
    height: auto;
  }

  @media (min-width: 576px) {
    width: unset;
  }
`;

export const Subscription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
    max-width: 380px;
    max-height: 602px;

    margin: unset;

    border-radius: 5px;

    padding: 32px 48px 24px;
  }

  @media (min-width: 1200px) {
    max-width: 480px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: -1;

    border: 1px solid #ff008e;

    @media (min-width: 992px) {
      border-radius: 5px;
    }
  }
`;
