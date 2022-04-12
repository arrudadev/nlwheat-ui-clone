import styled from 'styled-components';

type TrailType = {
  trail: 'origin' | 'impulse' | 'expanse';
};

const trails = {
  origin: {
    background: 'linear-gradient(90deg, #4763ff, rgba(45, 59, 138, 0.2))',
    color: '#4863f7',
  },
  impulse: {
    background: 'linear-gradient(90deg, #1b873f, rgba(27,135,63,.2))',
    color: '#04d361',
  },
  expanse: {
    background: 'linear-gradient(90deg, #d73628, rgba(215,54,40,.2))',
    color: '#d73628',
  },
};

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

export const TrailsList = styled.ul`
  display: grid;

  @media (min-width: 320px) {
    grid-gap: 70px;
    gap: 70px;

    grid-column: 1;
    grid-template-columns: unset;
  }

  @media (min-width: 768px) {
    grid-gap: 86px 32px;
    gap: 86px 32px;

    grid-column: unset;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TrailCard = styled.li<TrailType>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  position: relative;

  padding: 74px 15px 32px 24px;

  border: 1px solid var(--shape-hover);

  background: linear-gradient(180deg, #202024, rgba(32, 32, 36, 0));

  @media (min-width: 320px) {
    border-radius: unset;

    height: auto;
  }

  @media (min-width: 576px) {
    border-radius: 5px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 4px;

    background: ${({ trail }) => trails[trail].background};

    @media (min-width: 320px) {
      border-radius: unset;
    }

    @media (min-width: 576px) {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
`;

export const TrailIconWrapper = styled.div`
  svg {
    position: absolute;
    top: -46px;
    left: 24px;
  }
`;

export const TrailTitle = styled.h4<TrailType>`
  font-weight: 400;

  color: var(--gray);

  @media (min-width: 320px) {
    font-size: 30px;
    line-height: 35px;

    color: var(--gray);

    margin-bottom: 4px;
  }

  @media (min-width: 576px) {
    font-size: 32px;
    line-height: 46px;

    margin-bottom: unset;
  }

  strong {
    color: ${({ trail }) => trails[trail].color};
  }
`;

export const TrailLevel = styled.span<TrailType>`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;

  color: ${({ trail }) => trails[trail].color};

  margin-top: 8px;
`;

export const TrailDescription = styled.p`
  @media (min-width: 320px) {
    font-size: var(--font-size);
    font-weight: 400;
    line-height: 26px;

    color: var(--gray);

    margin-top: 24px;

    max-width: 321px;
  }

  @media (min-width: 576px) {
    max-width: unset;
  }

  @media (min-width: 1200px) {
    line-height: 25px;

    max-width: 304px;
  }
`;

export const TrailButton = styled.button<TrailType>`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;

  text-align: center;
  text-transform: uppercase;

  color: var(--white);

  border: none;
  border-radius: 5px;

  width: 100%;
  height: 56px;

  background: ${({ trail }) => trails[trail].color};

  @media (min-width: 320px) {
    margin-top: 24px;
  }
`;
