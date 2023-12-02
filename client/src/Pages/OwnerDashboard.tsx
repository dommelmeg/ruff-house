import React, { useState } from "react";
import { Flex, Box, Circle, Avatar, HStack,  Text, Stack, IconButton, Icon } from "@chakra-ui/react";
import JobsCarousel from "../Components/JobsCarousel";
import { AddIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useAtom } from "jotai";
import { userAuthAtom, User } from "../StateManagement/store";
import { useNavigate } from "react-router-dom";
import AddJobModule from "../Components/AddJobModule";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const OwnerDashboard = () => {
  const [showCompletedJobs, setShowCompletedJobs] = useState(true)
  const [showBookedJobs, setShowBookedJobs] = useState(true)
  const [currentUser, setCurrentUser] = useAtom<User>(userAuthAtom)
  const navigate = useNavigate()
  const userPets = currentUser.pets

  const { data: userJobs, isLoading } = useQuery({
    queryKey: ['userjobs'],
    queryFn: () => {
      return axios.get('/userjobs')
    }
  })

  if (currentUser.type === 'Sitter') {
    navigate('/sitter-dashboard')
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

  const handleBookedJobsToggle = () => {
    setShowBookedJobs((prevState) => !prevState)
  }

  return (
    <Flex direction='row' maxW='100%'>
      <Stack>
        <HStack>
          <Text 
            fontSize="2xl" 
            fontWeight="bold"
            >
            REQUESTS
          </Text>
          <AddJobModule />
        </HStack>
        {userJobs?.data && <JobsCarousel jobs={userJobs?.data} />}

        <HStack>
          <Text 
            fontSize="2xl" 
            fontWeight="bold" 
            mt='4'
          >
            BOOKED JOBS
          </Text>
          <IconButton mt='4' aria-label="hide/show booked jobs" icon={showBookedJobs ? <ChevronUpIcon /> : <ChevronDownIcon />} variant='ghost' onClick={handleBookedJobsToggle} />
        </HStack>
        {showBookedJobs && <JobsCarousel jobs={past} />}

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

        <Text 
          fontSize="2xl"
          fontWeight="bold" 
          mt='4'
        >
          DOGGO HOUSE
        </Text>
        <Box 
          width='80vw' 
          padding={4} 
          rounded='2xl'
        >
          <HStack>
            {userPets?.map((dog) => {
              return (
                <Avatar size='lg' name={dog.name} key={dog.id} />
              )
            })}
            <Circle 
              cursor='pointer'
              size='40px' 
              bg='gray' 
              color='white' 
              onClick={handleClick}
            >
              <AddIcon />
            </Circle>
          </HStack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default OwnerDashboard