import ScrollBar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

import { MenuItem } from '..';

import { InnerMiniDrawer, Item, MiniDrawerContainer } from './styles';

type SidebarItemProps = {
  title: string;
  active: boolean;
  icon: string;
  activeIcon: string;
};

type MiniDrawerProps = {
  items: MenuItem[];
  pathname: string;
};

function SidebarItem(props: SidebarItemProps) {
  const active = props.active ? 'active' : '';
  const icon = props.active ? props.activeIcon : props.icon;

  return (
    <Item>
      <InnerMiniDrawer className={active}>
        <i className={`bx ${icon}`} />
      </InnerMiniDrawer>
    </Item>
  );
}

const MiniDrawer = (props: MiniDrawerProps) => {
  const activeItem = props.items.findIndex(
    item => item.route === props.pathname,
  );

  return (
    <MiniDrawerContainer>
      <ScrollBar
        style={{ zIndex: 1 }}
        options={{ suppressScrollX: true, swipeEasing: true }}
      >
        {props.items.map((item, index) => (
          <Link to={item.route} key={index} title={item.name}>
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
    </MiniDrawerContainer>
  );
};

MiniDrawer.displayName = 'MiniDrawer';

export { MiniDrawer };
