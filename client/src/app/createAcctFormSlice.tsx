import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface createAcctFormState {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  type: string
}

const initialState: createAcctFormState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  type: 'Owner',
}

export const createAcctFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value
    },
    resetForm: state => {
      state.firstName= '';
      state.lastName = '';
      state.email = '';
      state.username = '';
      state.password = '';
      state.type = 'Owner'
    },
  },
})

export const { updateField, resetForm } = createAcctFormSlice.actions

export default createAcctFormSlice.reducer