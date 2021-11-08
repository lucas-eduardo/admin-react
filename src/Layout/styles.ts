import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 100vw;
  grid-template-rows: 56px 1fr;

  grid-template-areas:
    'HEADER'
    'CONTENT';

  color: var(--color-light);

  background-color: var(--primary-dark);

  overflow: hidden;
`;

export const WrapperHeader = styled.div`
  grid-area: HEADER;

  position: relative;
`;

export const Wrapper = styled.div`
  display: grid;

  grid-template-columns: auto 1fr;

  height: calc(100vh - 56px);

  overflow: hidden;

  grid-template-areas: 'SIDEBAR MAIN';
  grid-area: CONTENT;
`;

export const WrapperSidebar = styled.div`
  width: var(--sidebar-width);

  position: relative;

  grid-area: SIDEBAR;

  transition: width 0.4s ease-in-out;

  &.sidebar-full {
    width: var(--sidebar-full-width);
  }
`;

export const WrapperMain = styled.div`
  position: relative;

  padding: 24px 22px 6px 22px;

  overflow-y: auto;
  overflow-x: hidden;

  grid-area: MAIN;
`;
