import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from '@components/Dropdown';

import {
  Container,
  Left,
  NotificationItem,
  Right,
  WrapperUser,
} from './styles';
import { ThemeMenu } from './ThemeMenu';

type User = {
  name: string;
  image: string;
};

type Notification = {
  icon: string;
  content: string;
};

const currentUser = {
  name: 'Lucas Eduardo',
  image: 'https://avatars.githubusercontent.com/u/22918282?v=4',
};

const userMenus = [
  {
    icon: 'bx bx-user',
    content: 'Profile',
  },
  {
    icon: 'bx bx-wallet-alt',
    content: 'My Wallet',
  },
  {
    icon: 'bx bx-cog',
    content: 'Settings',
  },
  {
    icon: 'bx bx-log-out-circle bx-rotate-180',
    content: 'Logout',
  },
];

const notifications = [
  {
    icon: 'bx bx-error',
    content: 'Curabitur id eros quis nunc suscipit blandit',
  },
  {
    icon: 'bx bx-package',
    content: 'Duis malesuada justo eu sapien elementum, in semper diam posuere',
  },
  {
    icon: 'bx bx-cart',
    content: 'Donec at nisi sit amet tortor commodo porttitor pretium a erat',
  },
  {
    icon: 'bx bx-error',
    content: 'In gravida mauris et nisi',
  },
  {
    icon: 'bx bx-cart',
    content: 'Curabitur id eros quis nunc suscipit blandit',
  },
];

function renderUserToggle(user: User) {
  return (
    <WrapperUser>
      <img src={user.image} alt="" />
    </WrapperUser>
  );
}

function renderNotificationItem(item: Notification, index: number) {
  return (
    <NotificationItem key={index}>
      <i className={item.icon} />
      <span>{item.content}</span>
    </NotificationItem>
  );
}

function renderUserMenu(item: Notification, index: number) {
  return (
    <Link to="/" key={index}>
      <NotificationItem>
        <i className={item.icon} />
        <span>{item.content}</span>
      </NotificationItem>
    </Link>
  );
}

const TopNav = forwardRef<HTMLButtonElement, unknown>((_, ref) => {
  // const version = import.meta.env.APP_VERSION;

  return (
    <Container>
      <Left>
        <button ref={ref} type="button">
          <i className="bx bx-menu" />
        </button>
      </Left>

      <Right>
        <div className="item">
          <ThemeMenu />
        </div>

        <div className="item">
          <Dropdown
            icon="bx bx-bell"
            items={notifications}
            badge={notifications.length}
            renderItems={renderNotificationItem}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>

        <div className="item">
          <Dropdown
            customToggle={() => renderUserToggle(currentUser)}
            items={userMenus}
            renderItems={renderUserMenu}
          />
        </div>
      </Right>
    </Container>
  );
});

TopNav.displayName = 'TopNav';

export { TopNav };
