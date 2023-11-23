import { useQuery, useQueryClient } from '@tanstack/react-query';

export type Profile = {
  id: number
  username: string
  password: string
  type: string
  email: string
  firstName: string
  lastName: string
  city: string
  state: string
}

const queryClient = useQueryClient()

export const createProfile = async () => {
  const res = await fetch('/signup')
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await res.json()
  return data
}

// export const useCreateProfile = () => {
//   return useQuery(['profile'], createProfile);
// }
