// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { createAcctFormState } from '../app/createAcctFormSlice'

// export const profileApi = createApi({
//   reducerPath: 'profileApi',
//   baseQuery: fetchBaseQuery({ baseUrl: '' }),
//   endpoints: (builder) => ({
//     createNewProfile: builder.query<createAcctFormState, string>({
//       query: () => `profile`,
//     }),
//   }),
// })
import { api } from './api'

export interface Profile {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  type: string
  city: string
  state: string
}

export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    addProfile: build.mutation<Profile, Partial<Profile>>({
      query(body) {
        const { firstName: first_name, lastName: last_name, ...rest } = body
        return {
          url: `profiles`,
          method: 'POST',
          body: { first_name, last_name, ...rest },
        }
      }
    }),
  }),
})

export const {
  useAddProfileMutation,
} = profileApi

export const {
  endpoints: { addProfile },
} = profileApi

