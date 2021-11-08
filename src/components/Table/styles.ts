import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;

  > table {
    width: 100%;
    min-width: 400px;

    border-spacing: 0;

    thead {
      background-color: ${({ theme }) =>
        theme.isDark ? 'var(--main-900)' : 'var(--main-50)'};
    }

    tr {
      text-align: left;
    }

    th,
    td {
      text-transform: capitalize;

      padding: 15px 10px;
    }

    tbody > tr:hover {
      background-color: ${({ theme }) =>
        theme.isDark ? 'var(--primary-200)' : 'var(--primary-50)'};

      color: ${({ theme }) =>
        theme.isDark ? 'var(--primary-dark)' : 'var(--dark-900)'};
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;

  margin-top: 20px;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    border-radius: 50%;

    cursor: pointer;

    background-color: transparent;

    transition: background-color 0.2s ease 0s;

    & ~ .item {
      margin-left: 10px;
    }

    &.active,
    &.active:hover {
      background-color: var(--main-color);

      color: var(--txt-white);

      font-weight: 600;
    }

    &:hover {
      color: var(--txt-white);

      background-color: var(--second-color);
    }
  }
`;
