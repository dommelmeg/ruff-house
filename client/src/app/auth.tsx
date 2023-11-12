// import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from './store';
// import { Profile } from './services/profiles';
// // import { postsApi } from '../../app/services/posts'

// const initialState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
// } as { user: null | Profile; token: string | null; isAuthenticated: boolean }

// const slice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: () => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       // .addMatcher(postsApi.endpoints.login.matchPending, (state, action) => {
//       //   console.log('pending', action)
//       // })
//       // .addMatcher(postsApi.endpoints.login.matchFulfilled, (state, action) => {
//       //   console.log('fulfilled', action)
//       //   state.user = action.payload.user
//       //   state.token = action.payload.token
//       // })
//       // .addMatcher(postsApi.endpoints.login.matchRejected, (state, action) => {
//       //   console.log('rejected', action)
//       // })
//   },
// })

// export const { logout } = slice.actions
// export default slice.reducer

// export const selectIsAuthenticated = (state: RootState) =>
//   state.auth.isAuthenticated