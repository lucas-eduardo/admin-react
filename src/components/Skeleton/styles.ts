import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    opacity:.25
  }
  100% {
    opacity:1
  }
`;

export const Container = styled.div`
  background-color: var(--primary-light);

  border-radius: var(--border-radius-14);

  animation-name: ${shimmer};
  animation-delay: 1s;
  animation-duration: 1.2s;
  animation-timing-function: steps(10, end);
  animation-iteration-count: infinite;
  animation-direction: alternate;

  opacity: 0.25;
`;
