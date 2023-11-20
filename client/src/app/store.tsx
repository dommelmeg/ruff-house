import { configureStore, ConfigureStoreOptions, combineReducers } from '@reduxjs/toolkit';
import formReducer from './createAcctFormSlice';
import authReducer from './auth';
import { api } from './services/api';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({ form: formReducer, auth: authReducer });

const persistedReducer = persistReducer(persistConfig, reducers)

export const createStore = (
    options?: ConfigureStoreOptions['preloadedState'] | undefined
  ) =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            reducer: persistedReducer,
            // auth,
            // form: formReducer,
            // auth: authReducer,
          },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          }
        },).concat(api.middleware),
      ...options,
  })

  export const store = createStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
