import { useEffect, useRef } from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@components/Routes';
import { useAppSelector } from '@hooks/redux';

import { Sidebar } from './Sidebar';
import {
  Container,
  Wrapper,
  WrapperHeader,
  WrapperMain,
  WrapperSidebar,
} from './styles';
import { TopNav } from './TopNav';

function Layout() {
  const color = useAppSelector(({ theme }) => theme.color);
  const isDark = useAppSelector(({ theme }) => theme.isDark);

  const toggle_el = useRef<HTMLButtonElement>(null);
  const wrapper_el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light',
    );
  }, [isDark]);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (
        wrapper_el.current &&
        toggle_el.current &&
        toggle_el.current.contains(event.target as any)
      ) {
        wrapper_el.current.classList.toggle('active');
        wrapper_el.current.parentElement?.classList.toggle('sidebar-full');
      } else {
        if (
          wrapper_el.current &&
          !wrapper_el.current.contains(event.target as any)
        ) {
          wrapper_el.current.classList.remove('active');
          wrapper_el.current.parentElement?.classList.remove('sidebar-full');
        }
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown, false);
    };
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={{ isDark }}>
        <Route
          render={props => (
            <Container className={`${color}`}>
              <WrapperHeader>
                <TopNav ref={toggle_el} />
              </WrapperHeader>

              <Wrapper>
                <WrapperSidebar>
                  <Sidebar {...props} ref={wrapper_el} />
                </WrapperSidebar>

                <WrapperMain>
                  <ScrollBar
                    style={{ zIndex: 1 }}
                    options={{ suppressScrollX: true, swipeEasing: true }}
                  >
                    <Routes />
                  </ScrollBar>
                </WrapperMain>
              </Wrapper>
            </Container>
          )}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export { Layout };
