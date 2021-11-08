import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  padding: 12px 0;

  background-color: var(--primary-main);

  border-right: 1px solid var(--primary-light);

  height: calc(100% - 56px);

  overflow-y: auto;
  overflow-x: hidden;

  transition: width 0.5s var(--transition-cubic);

  z-index: 1;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;

  transition: color 0.3s ease 0s, backdrop-filter 0.3s ease 0s;

  > i {
    font-size: 2.4rem;
  }

  color: var(--color-light);

  &:hover:not(.active) {
    backdrop-filter: contrast(0.8);

    color: var(--color-light);
  }

  &.active {
    font-weight: 600;
  }
`;
