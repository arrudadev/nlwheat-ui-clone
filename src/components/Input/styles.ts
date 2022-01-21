import { FiUser } from 'react-icons/fi';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding-left: 20px;

  height: 64px;
  width: 100%;

  border: 1px solid transparent;
  border-radius: 5px;
  background: #13080d;

  @media (min-width: 320px) {
    height: 56px;
    padding-left: 16px;
  }

  @media (min-width: 768px) {
    height: 64px;
    padding-left: 20px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Label = styled.label`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

export const StyledInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: var(--white);

  width: 100%;
  height: 100%;

  padding: 18px 20px 18px 15px;

  background: #13080d;
  border: none;
  border-radius: 5px;

  transition: border-color 0.2s;
  outline: none;

  @media (min-width: 320px) {
    font-size: 15px;
    line-height: 18px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
    padding: 22px 19px;
  }
`;
