import { ReactNode } from 'react';

import { Container } from './styles';

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card(props: CardProps) {
  return <Container className={props.className}>{props.children}</Container>;
}

export { Card };
