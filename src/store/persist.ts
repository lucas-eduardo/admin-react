import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { themeKey, themeReducer } from './useCases/Theme';

const persistConfig = {
  key: 'dash',
  storage,
  blacklist: [],
};

const reducers = combineReducers({
  [themeKey]: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export { persistedReducer };
