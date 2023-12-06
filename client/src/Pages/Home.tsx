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
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Profile from './Profile';

const Home = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)

  useEffect(() => {
    if (!currentUser) {
      navigate('/signin')
    } 
  }, [currentUser])

  const { data: allSitters } = useQuery({
    queryKey: ['allSitters'],
    queryFn: () => {
      return axios.get('/sitters')
    }
  })

  console.log(allSitters)

  return (
    <Flex>
      <NavBar>
        <Flex>
          <Routes>
            <Route path='/' element={<OwnerDashboard />} />
            <Route path='/doghouse' element={<DogHouse />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/sitter-dashboard' element={<SitterDashboard />} />
            <Route path='/sitters' element={<Sitters allSitters={allSitters} />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Flex>
      </NavBar>
    </Flex>
  )
}

export default Home