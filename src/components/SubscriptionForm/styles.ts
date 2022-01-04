import styled from 'styled-components';

export const Title = styled.span`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;

  margin-bottom: 38px;
  color: var(--gray);

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: flex;
    margin-bottom: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 8px;
  }

  width: 100%;
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  margin: 20px 0;

  @media (min-width: 320px) {
    margin: 16px 0;
  }

  @media (min-width: 768px) {
    margin: 20px 0;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  margin-top: 58px;
  border: 1px solid rgba(225, 225, 230, 0.2);

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 24px;

  img {
    @media (min-width: 320px) {
      margin-right: 8px;
    }

    @media (min-width: 375px) {
      margin-right: 16px;
    }
  }

  span {
    font-size: 14px;
    line-height: 21px;
  }

  @media (min-width: 320px) {
    justify-content: center;
  }
`;
