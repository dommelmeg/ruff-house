import React, { useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom"
import SignIn from './Pages/SignIn';
import CreateAccount from './Pages/CreateAccount';
import Home from './Pages/Home';
import { useNavigate } from 'react-router-dom';
import { useAtom } from "jotai";
import { userAuthAtom } from './StateManagement/store';
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)

  // const { data: user, status } = useQuery({
  //   queryKey: ['user'],
  //   queryFn: () => {
  //     return axios.get('/me')
  //   }
  // })

  // useEffect(() => {
  //   if (status === 'error') {
  //     navigate('/createaccount')
  //     setCurrentUser(user.data)
  //     if (currentUser.type === 'Owner') {
  //       navigate('/')
  //     } else {
  //       navigate('/sitter-dashboard')
  //     }
  //   } 
  //   else if (status === 'error') {
  //     navigate('/createaccount')
  //   }
  // }, [user])

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
        } else {
          console.log('user doesnt exist')
          navigate('/signin')
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
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
