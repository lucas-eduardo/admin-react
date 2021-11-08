import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  z-index: 2;
`;

export const Toggle = styled.button`
  position: relative;

  border: 0;

  outline: 0;

  background-color: transparent;

  > i {
    font-size: 2.4rem;

    color: var(--color-light);
  }

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    top: -8px;
    right: -6px;

    width: 18px;
    height: 18px;

    border-radius: 50%;

    background-color: var(--main-color);

    color: var(--txt-white);

    font-size: 1.2rem;
  }
`;

export const Wrapper = styled.div`
  position: absolute;

  top: calc(100% + 5px);
  right: 0;

  width: max-content;
  max-width: 400px;

  background-color: var(--primary-dark);

  box-shadow: var(--box-shadow);

  border-radius: var(--border-radius-16);

  overflow: hidden;

  transform-origin: top right;

  transform: scale(0);

  transition: transform 0.3s ease 0s;

  &.active {
    transform: scale(1);

    transition: transform 0.5s var(--transition-cubic);
  }
`;

export const Footer = styled.div`
  padding: 20px;

  text-align: center;

  font-size: 1.2rem;
`;
