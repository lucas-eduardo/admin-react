import { Container, WrapperIcon, WrapperInfo } from './styles';

type CardInfoProps = {
  icon: string;
  count: number | string;
  title: string;
};

function CardInfo(props: CardInfoProps) {
  return (
    <Container>
      <WrapperIcon>
        <i className={props.icon} />
      </WrapperIcon>

      <WrapperInfo>
        <h4>{props.count}</h4>
        <span>{props.title}</span>
      </WrapperInfo>
    </Container>
  );
}

export { CardInfo };
