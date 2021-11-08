import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  right: -300px;
  top: 0;

  width: 300px;
  height: 100vh;

  padding: 20px;

  z-index: 3;

  background-color: var(--primary-main);

  box-shadow: var(--box-shadow);

  transition: right 0.5s var(--transition-cubic);

  > h4 {
    font-size: 1.8rem;
  }

  &.active {
    right: 0;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;

  top: 17px;
  right: 20px;

  background-color: transparent;

  font-size: 2.4rem;
`;

export const WrapperSelect = styled.div`
  margin-top: 40px;

  > span {
    font-size: 1.4rem;
  }

  ul {
    margin-top: 20px;

    > li {
      display: flex;
      align-items: center;

      cursor: pointer;

      font-size: 1.2rem;

      & + li {
        margin-top: 10px;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 30px;
        height: 30px;

        border-radius: 50%;

        margin-right: 10px;

        i {
          font-size: 1.8rem;
        }

        &.light-background {
          background-color: var(--white-50);

          box-shadow: var(--box-shadow);

          color: var(--black-800);
        }

        &.dark-background {
          background-color: var(--black-900);

          color: var(--white-50);
        }

        &.blue-color {
          background-color: var(--main-color-blue);
          color: var(--white-50);
        }

        &.red-color {
          background-color: var(--main-color-red);
          color: var(--white-50);
        }

        &.green-color {
          background-color: var(--main-color-green);
          color: var(--white-50);
        }

        &.orange-color {
          background-color: var(--main-color-orange);
          color: var(--white-50);
        }

        > i {
          transform: scale(0);
          transition: transform 0.5s var(--transition-cubic);
        }

        &.active > i {
          transform: scale(1);
        }
      }
    }
  }
`;
