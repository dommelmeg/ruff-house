import { atomWithStorage } from "jotai/utils";
import { useAtom, createStore, atom } from "jotai";

const myStore = createStore()

export const initialState: User = {
  id: null,
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: '',
  type: 'Owner',
  city: '',
  state: '',
  pets: [],
  jobs: [],
}

export const initialTypeState = {
  type: '',
}

export type CreateAcctForm = {
  first_name: string
  last_name: string
  email: string
  username: string
  password: string
  type: string
}

export type Pet = {
  id: number
  name: string
  gender: string
  birth_date: string
  breed: string
  bio: string
  weight: number
  owner_id: number
}

export type Job = {
  id: number
  start_date: string
  end_date: string
  description: string
  owner_id: number
  sitter_id: number
}

export type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  username: string
  password: string
  type: string
  city: string
  state: string
  pets: Pet[]
  jobs: Job[]
}

export const userAuthAtom = atomWithStorage('userAuth', initialState)

export const userTypeAtom = atomWithStorage('userType', initialTypeState)

export const setUserAuthAtom = atom((set) => set(userAuthAtom))

export const errorsAtom = atomWithStorage('errors', [])

const dogBreeds = require('dog-breeds')
export const allDogBreeds = dogBreeds.all
export const randomDogBreed = dogBreeds.random()

// export const getUserAuthAtom = atom((get) => get(userAuthAtom))