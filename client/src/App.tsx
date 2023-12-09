import React, { useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom"
import SignIn from './Pages/SignIn';
import CreateAccount from './Pages/CreateAccount';
import Home from './Pages/Home';
import { useNavigate } from 'react-router-dom';
import { useAtom } from "jotai";
import { userAuthAtom } from './StateManagement/store';

const App = () => {
  const navigate = useNavigate()
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
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
