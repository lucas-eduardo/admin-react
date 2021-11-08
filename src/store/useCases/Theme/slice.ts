import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Colors, initialState, key, Modes } from './initialState';

const { actions, reducer } = createSlice({
  name: key,
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<Modes>) {
      state.isDark = action.payload === 'theme-mode-dark';
      state.theme = action.payload;
    },
    changeColor(state, action: PayloadAction<Colors>) {
      state.color = action.payload;
    },
  },
});

const themeActions = actions;
const themeReducer = reducer;

export { themeActions, themeReducer };
