import ReactTooltip from 'react-tooltip';

import styled from 'styled-components';

export const Tooltip = styled(ReactTooltip)`
  font-size: 14px !important;
  line-height: 26px !important;

  color: #c4c4cc !important;

  border-radius: 10px !important;
  box-shadow: 0 0 0 1px #505059 !important;
  background: var(--black) !important;

  padding: 10px 16px 16px !important;

  @media (min-width: 320px) {
    max-width: 220px !important;
  }

  @media (min-width: 375px) {
    max-width: 310px !important;
  }
`;
