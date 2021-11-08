import styled from 'styled-components';

import { Skeleton } from '@components/Skeleton';

export const Container = styled.div``;

export const Title = styled(Skeleton)`
  width: 350px;
  height: 44px;

  margin-bottom: 24px;
`;

export const WrapperContent = styled(Skeleton)`
  width: 100%;

  height: 64px;

  & + & {
    margin-top: 40px;
  }
`;
