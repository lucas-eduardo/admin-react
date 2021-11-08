const key = 'theme';

export type Modes = 'theme-mode-light' | 'theme-mode-dark';

export type Colors =
  | 'theme-color-blue'
  | 'theme-color-red'
  | 'theme-color-cyan'
  | 'theme-color-green'
  | 'theme-color-orange';

export interface IThemeState {
  color: Colors;
  isDark: boolean;
  theme: Modes;
}

const initialState: IThemeState = {
  color: 'theme-color-blue',
  isDark: false,
  theme: 'theme-mode-light',
};

export { initialState, key };
