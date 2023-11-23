import React from 'react';
import { Flex } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom"
import NavBar from '../Components/NavBar';
import OwnerDashboard from './OwnerDashboard';
import DogHouse from './DogHouse';
import Jobs from './Jobs';
import SitterDashboard from './SitterDashboard';
import { atom } from 'jotai';

const Home = () => {

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