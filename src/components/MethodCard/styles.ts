import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-areas:
    'icon title'
    'paragraph paragraph';

  position: relative;

  border-radius: 5px;
  border: 1.5px solid var(--shape-hover);

  background-color: var(--background);

  @media (min-width: 320px) {
    padding: 24px 16px;
  }

  @media (min-width: 768px) {
    padding: 32px 32px 40px 24px;
  }
`;

export const IconWrapper = styled.div`
  grid-area: icon;

  svg {
    @media (min-width: 320px) {
      width: 48px;
      height: 48px;
    }

    @media (min-width: 576px) {
      width: unset;
      height: unset;
    }
  }
`;

export const Title = styled.h4`
  grid-area: title;

  display: flex;
  align-items: center;

  font-weight: 700;

  color: var(--gray);

  @media (min-width: 320px) {
    font-size: 30px;
    line-height: 35px;

    margin-left: 24px;
  }

  @media (min-width: 576px) {
    margin: unset;
  }

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const Description = styled.p`
  grid-area: paragraph;

  color: var(--text);

  margin-top: 24px;

  @media (min-width: 320px) {
    font-size: var(--font-text);
    font-weight: 400;
    line-height: 26px;

    color: var(--gray);
  }

  @media (min-width: 1200px) {
    line-height: 25px;
  }
`;

export const ArrowIconWrapper = styled.div`
  position: absolute;

  @media (min-width: 320px) {
    top: unset;
    left: 60px;
    bottom: 4px;
    right: unset;

    transform: rotate(90deg);

    svg {
      width: 32px;
    }
  }

  @media (min-width: 768px) {
    top: 64px;
    left: unset;
    right: -10px;
    bottom: unset;

    transform: unset;

    svg {
      width: unset;
    }
  }
`;
