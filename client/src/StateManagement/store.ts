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
  image_url: '',
  daily_rate: null,
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
  image_url: string
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
  image_url: string
  daily_rate: number
  pets: Pet[]
  jobs: Job[]
}

export const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

export const userAuthAtom = atomWithStorage('userAuth', initialState)

export const userTypeAtom = atomWithStorage('userType', initialTypeState)

export const setUserAuthAtom = atom((set) => set(userAuthAtom))

const dogBreeds = require('dog-breeds')
export const allDogBreeds = dogBreeds.all
export const randomDogBreed = dogBreeds.random()

export const moment = require('moment')
