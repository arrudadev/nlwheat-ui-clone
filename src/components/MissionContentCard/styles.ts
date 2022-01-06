import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background);

  @media (min-width: 320px) {
    border-radius: unset;
  }

  @media (min-width: 576px) {
    border-radius: 5px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  height: 78px;
  position: relative;

  padding: 20px 32px;

  border: 1px solid #3f2e68;
  background: linear-gradient(3.65deg, #1d1929, #121214 100.4%);

  @media (min-width: 320px) {
    border-radius: unset;

    padding: 20px 24px;
  }

  @media (min-width: 576px) {
    border-radius: 5px 5px 0 0;
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;

  margin-right: 16px;
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;

  color: var(--gray);
`;

export const Content = styled.div`
  padding: 24px 32px;

  border: 1px solid var(--shape-hover);
  border-top: unset;
`;

export const Description = styled.p`
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
