import styled from 'styled-components';

export const Container = styled.span`
  padding: 6px 11px;

  color: var(--white-100);

  border-radius: 10px;

  box-shadow: var(--box-shadow);

  &.badge {
    &-success {
      background-color: var(--main-color-green);
    }
    &-danger {
      background-color: var(--main-color-red);
    }
    &-primary {
      background-color: var(--main-color-blue);
    }
    &-warning {
      background-color: var(--main-color-orange);
    }
  }
`;
