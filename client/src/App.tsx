import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom"
import OwnerDashboard from './Pages/OwnerDashboard';
import SignIn from './Pages/SignIn';
import CreateAccount from './Pages/CreateAccount';
import DogHouse from './Pages/DogHouse';
import Jobs from './Pages/Jobs';
import Sitters from './Pages/Sitters';

const App = () => {
  return (
    <ChakraProvider>
      <Box 
        bg='teal.50'
        h='100vh'
      >
        <Routes>
          <Route path='/' element={<OwnerDashboard />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/doghouse' element={<DogHouse />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/sitters' element={<Sitters />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
