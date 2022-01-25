import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;

    z-index: -100;

    width: 100%;
    height: 1px;

    background: linear-gradient(-270deg, #323238, rgba(41, 41, 46, 0));
  }

  &.active {
    &::after {
      content: '';
      position: absolute;
      top: -1.3px;
      left: -0.3px;

      z-index: -100;

      width: 100%;

      border-radius: 5px 0 0 5px;

      background: linear-gradient(90deg, #ffcd1e, rgba(32, 32, 36, 0));

      @media (min-width: 992px) {
        height: 62px;
      }

      @media (min-width: 1200px) {
        height: 80px;
      }
    }

    button {
      transition: all 0.3s ease;

      background: linear-gradient(90deg, #3d3209 0, var(--background) 100%);
    }

    span,
    strong {
      color: var(--yellow);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  width: 100%;

  font-size: 16px;
  font-weight: 700;
  line-height: 26px;

  color: var(--text);

  border: 0;
  border-radius: 5px 0 0 5px;
  background: transparent;

  margin: 1px 16px 1px 1px;
  padding-left: 24px;

  transition: all 0.3s ease;

  @media (min-width: 992px) {
    height: 58px;
  }

  @media (min-width: 1200px) {
    height: 76px;
  }

  strong {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;

    color: var(--text);

    margin-left: 16px;
  }
`;
