import { atomWithStorage } from "jotai/utils";
import { useAtom, createStore, atom } from "jotai";

const myStore = createStore()

export const initialFormState = {
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: '',
  type: 'Owner',
}

export const userAuthAtom = atomWithStorage('userAuth', initialFormState)

export const setUserAuthAtom = atom((set) => set(userAuthAtom))

export const errorsAtom = atomWithStorage('errors', [])

// export const getUserAuthAtom = atom((get) => get(userAuthAtom))