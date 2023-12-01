import React, { useReducer, useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom"
import SignIn from './Pages/SignIn';
import CreateAccount from './Pages/CreateAccount';
import Home from './Pages/Home';
import CompleteAccount from './Pages/CompleteAccount';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios, {isCancel, AxiosError} from 'axios';
import { useAtom } from "jotai";
import { userAuthAtom, userTypeAtom } from './StateManagement/store';
import userEvent from '@testing-library/user-event';

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json()
          .then((user) => {
            setCurrentUser(user)
            if (currentUser.type === 'Owner') {
              navigate('/')
            } else {
              navigate('/sitter-dashboard')
            }
          })
        }
      }) 
  }, [])

  return (
    <ChakraProvider>
      <Box>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/*' element={<Home />} />
          <Route path='/complete-account' element={<CompleteAccount />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
