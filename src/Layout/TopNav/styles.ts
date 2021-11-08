import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 25px;

  height: 100%;

  background-color: var(--primary-main);

  border-bottom: 1px solid var(--primary-light);
`;

export const Left = styled.div`
  width: var(--sidebar-full-width);

  > button {
    background-color: transparent;

    i {
      font-size: 2.4rem;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  .item ~ .item {
    margin-left: 30px;
  }
`;

export const WrapperUser = styled.div`
  display: flex;
  align-items: center;

  width: 32px;
  height: 32px;

  border-radius: 50%;

  overflow: hidden;

  > img {
    width: 100%;
  }
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;

  padding: 20px;

  transition: background-color 0.8s;

  font-size: 1.2rem;

  &:hover {
    background-color: var(--primary-main);
  }

  > i {
    margin-right: 20px;

    font-size: 2.2rem;
  }
`;
