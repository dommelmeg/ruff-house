import React from 'react';
import { Flex, Box } from '@chakra-ui/react'
import { Route, Routes, useLocation } from "react-router-dom"
import NavBar from '../Components/NavBar';
import OwnerDashboard from './OwnerDashboard';
import DogHouse from './DogHouse';
import Jobs from './Jobs';
import SitterDashboard from './SitterDashboard';

const Home = () => {
  const location = useLocation()

  return (
    <Flex>
      <NavBar>
        <Flex>
          <Routes>
            <Route path='/' element={<OwnerDashboard />} />
            <Route path='/doghouse' element={<DogHouse />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/sitters' element={<SitterDashboard />} />
          </Routes>
        </Flex>
      </NavBar>
    </Flex>
  )
}

export default Home