import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react'
import { Route, Routes, useNavigate } from "react-router-dom"
import NavBar from '../Components/NavBar';
import OwnerDashboard from './OwnerDashboard';
import Sitters from './Sitters';
import DogHouse from './DogHouse';
import Jobs from './Jobs';
import SitterDashboard from './SitterDashboard';
import { userAuthAtom, errorsAtom } from "../StateManagement/store";
import { useAtom } from "jotai";

const Home = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)

  return (
    <Flex>
      <NavBar>
        <Flex>
          <Routes>
            <Route path='/' element={<OwnerDashboard />} />
            <Route path='/doghouse' element={<DogHouse />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/sitter-dashboard' element={<SitterDashboard />} />
            <Route path='/sitters' element={<Sitters />} />
          </Routes>
        </Flex>
      </NavBar>
    </Flex>
  )
}

export default Home