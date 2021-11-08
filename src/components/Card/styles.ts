import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;

  margin-bottom: 30px;

  background-color: var(--primary-main);

  box-shadow: var(--box-shadow);

  border-radius: var(--border-radius-14);

  &.full-height {
    height: calc(100% - 30px);
  }

  > .header {
    text-transform: capitalize;
  }

  > div ~ div {
    margin-top: 30px;
  }

  > .footer {
    text-align: center;
    text-transform: capitalize;
  }
`;
