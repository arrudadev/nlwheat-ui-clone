import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  border-left: 1px solid var(--shape-hover);

  &.active {
    background: linear-gradient(180deg, #11251c 3.75%, rgba(18, 18, 20, 0));

    strong {
      color: var(--white);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  font-size: 15px;
  line-height: 20px;

  border: 0;
  background: transparent;

  strong {
    color: var(--text);
  }
`;
