import styled, { css } from 'styled-components';

import { Container, Inner } from '../styles';

export const ContainerDrawer = styled(Container)`
  width: var(--sidebar-full-width);

  margin-left: calc(var(--sidebar-full-width) * -1);

  transition: margin-left 0.5s ease-in-out 0s;

  &.active {
    margin-left: 0;
  }
`;

export const InnerDrawer = styled(Inner)`
  width: 100%;
  height: 54px;

  padding: 15px 25px;

  > i {
    margin-right: 24px;
  }

  > span {
    text-transform: capitalize;

    font-size: 1.4rem;

    line-height: 2rem;
  }

  &.active {
    background-color: var(--primary-700);

    filter: drop-shadow(2px 4px 6px var(--primary-dark));

    ${({ theme }) =>
      !theme.isDark &&
      css`
        color: var(--color-dark);
      `}
  }
`;
