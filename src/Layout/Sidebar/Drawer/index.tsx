import { forwardRef } from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

import { MenuItem } from '..';

import { ContainerDrawer, InnerDrawer } from './styles';

type SidebarItemProps = {
  title: string;
  active: boolean;
  icon: string;
  activeIcon: string;
};

type DrawerProps = {
  items: MenuItem[];
  pathname: string;
};

function SidebarItem(props: SidebarItemProps) {
  const active = props.active ? 'active' : '';
  const icon = props.active ? props.activeIcon : props.icon;

  return (
    <div>
      <InnerDrawer className={active}>
        <i className={`bx ${icon}`} />
        <span>{props.title}</span>
      </InnerDrawer>
    </div>
  );
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const activeItem = props.items.findIndex(
    item => item.route === props.pathname,
  );

  return (
    <ContainerDrawer ref={ref}>
      <ScrollBar
        style={{ zIndex: 1 }}
        options={{ suppressScrollX: true, swipeEasing: true }}
      >
        {props.items.map((item, index) => (
          <Link to={item.route} key={index}>
            <SidebarItem
              key={index}
              title={item.name}
              icon={item.icon}
              activeIcon={item.activeIcon}
              active={index === activeItem}
            />
          </Link>
        ))}
      </ScrollBar>
    </ContainerDrawer>
  );
});

Drawer.displayName = 'Drawer';

export { Drawer };
