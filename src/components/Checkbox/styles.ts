import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  @media (min-width: 320px) {
    max-width: 296px;
  }

  @media (min-width: 576px) {
    max-width: unset;
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
`;

export const Label = styled.label`
  position: relative;
  padding: 0;

  cursor: pointer;

  font-size: 16px;
  line-height: 26px;

  color: var(--text);

  &::before {
    content: '';
    margin-top: -2px;
    margin-right: 8px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: var(--primary);
    border: 2px solid var(--primary);
  }

  &::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 10px;
    width: 2px;
    height: 2px;
    background: var(--white);
    box-shadow: 2px 0 0 var(--white), 4px 0 0 var(--white),
      4px -2px 0 var(--white), 4px -4px 0 var(--white), 4px -6px 0 var(--white),
      4px -8px 0 var(--white);
    transform: rotate(45deg);
  }
`;
