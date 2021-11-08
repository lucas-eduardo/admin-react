import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

import { Container, Footer, Toggle, Wrapper } from './styles';

type DropdownProps = {
  icon?: string;
  badge?: number;
  customToggle?: () => void;
  items?: any[];
  renderItems?: (item: any, index: number) => ReactElement;
  renderFooter?: () => ReactElement;
  onClick?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
};

function Dropdown(props: DropdownProps) {
  const toggle_el = useRef<HTMLButtonElement>(null);
  const wrapper_el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (
        toggle_el.current &&
        toggle_el.current.contains(event.target as any)
      ) {
        if (props.children) {
          wrapper_el.current?.children[0].classList.toggle('active');
        } else {
          wrapper_el.current?.classList.toggle('active');
        }
      } else {
        if (
          wrapper_el.current &&
          !wrapper_el.current.contains(event.target as any)
        ) {
          if (props.children) {
            wrapper_el.current?.children[0].classList.remove('active');
          } else {
            wrapper_el.current.classList.remove('active');
          }
        }
      }
    };

    !props.onClick && document.addEventListener('mousedown', handleMouseDown);
    return () => {
      !props.onClick &&
        document.removeEventListener('mousedown', handleMouseDown, false);
    };
  }, [props.children, props.onClick]);

  return (
    <Container style={props.style}>
      <Toggle ref={toggle_el} onClick={props.onClick}>
        {props.icon ? <i className={props.icon} /> : ''}
        {props.badge ? <span className="badge">{props.badge}</span> : ''}
        {props.customToggle ? props.customToggle() : ''}
      </Toggle>

      {((props.items && props.renderItems) || props.renderFooter) && (
        <Wrapper ref={wrapper_el}>
          {props.items && props.renderItems
            ? props.items.map(props.renderItems)
            : null}

          {props.renderFooter ? <Footer>{props.renderFooter()}</Footer> : null}
        </Wrapper>
      )}

      {props.children && <div ref={wrapper_el}>{props.children}</div>}
    </Container>
  );
}

export { Dropdown };
