import { useRef } from 'react';

import { Dropdown } from '@components/Dropdown';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { changeColor, changeTheme } from '@store/useCases/Theme/actions';
import { Colors, Modes } from '@store/useCases/Theme/initialState';

import { ButtonClose, Container, WrapperSelect } from './styles';

type Setting<T> = {
  name: string;
  active: boolean;
  background: string;
  mode: T;
};

const colorsSettings: Omit<Setting<Colors>, 'active'>[] = [
  {
    name: 'Blue',
    background: 'blue-color',
    mode: 'theme-color-blue',
  },
  {
    name: 'Red',
    background: 'red-color',
    mode: 'theme-color-red',
  },
  {
    name: 'Green',
    background: 'green-color',
    mode: 'theme-color-green',
  },
  {
    name: 'Orange',
    background: 'orange-color',
    mode: 'theme-color-orange',
  },
];

const modesSettings: Omit<Setting<Modes>, 'active'>[] = [
  {
    name: 'Light',
    background: 'light-background',
    mode: 'theme-mode-light',
  },
  {
    name: 'Dark',
    background: 'dark-background',
    mode: 'theme-mode-dark',
  },
];

function ThemeMenu() {
  const dispatch = useAppDispatch();
  const color = useAppSelector(({ theme }) => theme.color);
  const theme = useAppSelector(({ theme }) => theme.theme);

  const colors: Setting<Colors>[] = colorsSettings.map(item => ({
    ...item,
    active: item.mode === color,
  }));

  const modes: Setting<Modes>[] = modesSettings.map(item => ({
    ...item,
    active: item.mode === theme,
  }));

  const wrapper_el = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    wrapper_el.current?.classList.remove('active');
  };

  const handleColor = (mode: Colors) => {
    dispatch(changeColor(mode));
  };

  const handleMode = (mode: Modes) => {
    dispatch(changeTheme(mode));
  };

  return (
    <>
      <Dropdown icon="bx bx-palette" style={{ zIndex: 3 }}>
        <Container ref={wrapper_el}>
          <h4>Theme settings</h4>

          <ButtonClose onClick={handleClose}>
            <i className="bx bx-x" />
          </ButtonClose>

          <WrapperSelect>
            <span>Choose mode</span>

            <ul>
              {modes.map(({ active, background, mode, name }, index) => (
                <li key={index} onClick={() => handleMode(mode)}>
                  <div className={`${background} ${active ? 'active' : ''}`}>
                    <i className="bx bx-check" />
                  </div>

                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </WrapperSelect>

          <WrapperSelect>
            <span>Choose color</span>

            <ul>
              {colors.map(({ active, background, mode, name }, index) => (
                <li key={index} onClick={() => handleColor(mode)}>
                  <div className={`${background} ${active ? 'active' : ''}`}>
                    <i className="bx bx-check" />
                  </div>

                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </WrapperSelect>
        </Container>
      </Dropdown>
    </>
  );
}

export { ThemeMenu };
