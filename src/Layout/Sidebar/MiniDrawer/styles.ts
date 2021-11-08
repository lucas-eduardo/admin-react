import styled from 'styled-components';

import { Container, Inner } from '../styles';

export const MiniDrawerContainer = styled(Container)`
  width: var(--sidebar-width);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerMiniDrawer = styled(Inner)`
  justify-content: center;

  width: 100%;

  padding: 16px 0 14px;

  &.active {
    color: var(--primary-400);
  }
`;
