import { api } from './api'

export interface Profile {
  id: number
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
    updateProfile: build.mutation<Profile, Partial<Profile>>({
      query(data) {
        const { id, ...body } = data
        return {
          url: `profiles/${id}`,
          method: 'PUT',
          body,
        }
      }
    }),
  }),
})

export const {
  useAddProfileMutation,
  useUpdateProfileMutation
} = profileApi

export const {
  endpoints: { addProfile, updateProfile },
} = profileApi

