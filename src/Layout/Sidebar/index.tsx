import { forwardRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Drawer } from './Drawer';
import items from './items.json';
import { MiniDrawer } from './MiniDrawer';

export type MenuItem = {
  name: string;
  route: string;
  icon: string;
  activeIcon: string;
};

const Sidebar = forwardRef<HTMLDivElement, RouteComponentProps>(
  (props, ref) => {
    return (
      <>
        <MiniDrawer items={items} pathname={props.location.pathname} />

        <Drawer ref={ref} items={items} pathname={props.location.pathname} />
      </>
    );
  },
);

Sidebar.displayName = 'Sidebar';

export { Sidebar };
