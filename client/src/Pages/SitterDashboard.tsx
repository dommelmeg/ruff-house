import React, { useState } from "react";
import { Flex, Box, Circle, Avatar, HStack,  Text, Stack, IconButton, Icon } from "@chakra-ui/react";
import JobsCarousel from "../Components/JobsCarousel";
import { AddIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useAtom } from "jotai";
import { userAuthAtom, User } from "../StateManagement/store";
import { useNavigate } from "react-router-dom";

const SitterDashboard = () => {
  const [showCompletedJobs, setShowCompletedJobs] = useState(true)
  const [currentUser, setCurrentUser] = useAtom<User>(userAuthAtom)
  const navigate = useNavigate()
  const userJobs = currentUser.jobs
  const userPets = currentUser.pets

  if (currentUser.type === 'Owner') {
    navigate('/')
  }

  //jobs that have not happened yet
  const current = []
  //completed jobs
  const past = []

  const handleClick = () => {
    console.log('YAY, a new doggo!')
  }

  const handleCompletedJobsToggle = () => {
    setShowCompletedJobs((prevState) => !prevState)
  }

  const handleAddJobBtn = () => {

  }

  return (
    <Flex direction='row' maxW='100%'>
      <Stack>
          <Text 
            fontSize="2xl" 
            fontWeight="bold"
            >
            UPCOMING JOBS
          </Text>
        <JobsCarousel jobs={userJobs} />

        <HStack>
          <Text 
            fontSize="2xl" 
            fontWeight="bold" 
            mt='4'
          >
            COMPLETED
          </Text>
          <IconButton mt='4' aria-label="hide/show completed jobs" icon={showCompletedJobs ? <ChevronUpIcon /> : <ChevronDownIcon />} variant='ghost' onClick={handleCompletedJobsToggle} />
        </HStack>
        {showCompletedJobs && <JobsCarousel jobs={past} />}
        </Stack>
    </Flex>
  )
}

export default SitterDashboard