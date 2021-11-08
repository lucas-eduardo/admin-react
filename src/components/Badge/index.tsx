import { Container } from './styles';

type BadgeTypes = 'primary' | 'warning' | 'success' | 'danger';

type BadgeProps = {
  type: BadgeTypes;
  content: string | number;
};

function Badge(props: BadgeProps) {
  return (
    <Container className={`badge-${props.type}`}>{props.content}</Container>
  );
}

export { Badge };
export type { BadgeTypes };
