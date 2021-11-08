import { HTMLAttributes } from 'react';

import { Container } from './styles';

const Skeleton = (props: HTMLAttributes<HTMLDivElement>) => {
  return <Container {...props} />;
};

export { Skeleton };
