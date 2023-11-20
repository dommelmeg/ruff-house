import React, { useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom"
import SignIn from './Pages/SignIn';
import CreateAccount from './Pages/CreateAccount';
import Home from './Pages/Home';
import CompleteAccount from './Pages/CompleteAccount';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { useNavigate, useLocation } from 'react-router-dom';
// import ProtectedOutlet from './utils/ProtectedOutlet';

const App = () => {
  const user: any = useSelector((state: RootState) => state.reducer.auth)
  const loggedIn = user.isAuthenticated === true
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    loggedIn ? navigate('/') : navigate('/signin') 
  }, [user])

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
