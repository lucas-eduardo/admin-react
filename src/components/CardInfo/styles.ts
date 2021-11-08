import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 30px;

  background-color: var(--primary-main);

  box-shadow: var(--box-shadow);

  border-radius: var(--border-radius-14);

  position: relative;

  overflow: hidden;

  z-index: 1;

  transition: color 0.5s ease 0s;

  margin-bottom: 30px;

  &:before {
    content: '';

    width: 100%;
    padding-top: 100%;

    border-radius: 50%;

    background-image: linear-gradient(
      to top right,
      var(--main-color),
      var(--second-color)
    );

    position: absolute;

    left: -50%;
    top: 0;

    transform: scale(0);
    transition: transform 0.8s ease 0s;
  }

  &:hover {
    &:before {
      transform: scale(3);
    }

    color: var(--txt-white);
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 100%;

  font-size: 3rem;

  z-index: 1;
`;

export const WrapperInfo = styled.div`
  flex-grow: 1;

  text-align: center;
  text-transform: capitalize;

  z-index: 1;

  > h4 {
    font-size: 2.5rem;

    margin-bottom: 10px;
  }
`;
