import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react'
import { Route, Routes, useNavigate } from "react-router-dom"
import NavBar from '../Components/NavBar';
import OwnerDashboard from './OwnerDashboard';
import DogHouse from './DogHouse';
import Jobs from './Jobs';
import SitterDashboard from './SitterDashboard';
import { initialFormState, userAuthAtom, errorsAtom } from "../State Management/store";
import { useAtom } from "jotai";

const Home = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)

  console.log(currentUser)

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json()
          .then((user) => setCurrentUser(user))
        }
      }) 
  }, [])

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