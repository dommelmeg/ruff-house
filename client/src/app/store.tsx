import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import formReducer from './createAcctFormSlice';
import authReducer from './auth';
import { api } from './services/api';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const createStore = (
    options?: ConfigureStoreOptions['preloadedState'] | undefined
  ) =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            // auth,
            form: formReducer,
            auth: authReducer,
          },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
      ...options,
  })

  export const store = createStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
