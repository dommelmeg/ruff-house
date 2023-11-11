import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { Route, Routes, useLocation } from "react-router-dom"
import SignIn from './Pages/SignIn';
import CreateAccount from './Pages/CreateAccount';
import Home from './Pages/Home';

const App = () => {
  const location = useLocation()

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
