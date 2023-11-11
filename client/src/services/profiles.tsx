import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createAcctFormState } from '../app/createAcctFormSlice'

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    createNewProfile: builder.query<createAcctFormState, string>({
      query: () => `profile`,
    }),
  }),
})