import React, { useState } from "react";
import { Flex, Box, Avatar, HStack,  Text, Stack, IconButton } from "@chakra-ui/react";
import JobsCarousel from "../Components/JobsCarousel";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useAtom } from "jotai";
import { userAuthAtom, User } from "../StateManagement/store";
import { useNavigate } from "react-router-dom";
import AddJobModule from "../Components/AddJobModule";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AddPetModule from "../Components/AddPetModule";

const OwnerDashboard = () => {
  const navigate = useNavigate()

  const [currentUser] = useAtom<User>(userAuthAtom)

  const currentDate = new Date()

  const [showCompletedJobs, setShowCompletedJobs] = useState(true)
  const [showBookedJobs, setShowBookedJobs] = useState(true)
  const [showRequestedJobs, setShowRequestedJobs] = useState(true)
  
  const { data: userJobs } = useQuery({
    queryKey: ['userjobs'],
    queryFn: () => {
      return axios.get('/userjobs')
    }
  })

  const { data: userPets } = useQuery({
    queryKey: ['userpets'],
    queryFn: () => {
      return axios.get('/userpets')
    }
  })

  if (currentUser?.type === 'Sitter') {
    navigate('/sitter-dashboard')
  }

  const requestedJobs = userJobs?.data.filter((job) => !job.sitter_id)
  const bookedJobs = userJobs?.data.filter((job) => job.sitter_id && new Date(job.end_date) > currentDate)
  const completedJobs = userJobs?.data.filter((job) => new Date(job.end_date) < currentDate)

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
          <IconButton aria-label="hide/show requested jobs" icon={showRequestedJobs ? <ChevronUpIcon /> : <ChevronDownIcon />} variant='ghost' onClick={() => setShowRequestedJobs((prevState) => !prevState)} />
          <AddJobModule />
        </HStack>
        {showRequestedJobs && <JobsCarousel jobs={requestedJobs} variant={'requested'} />}

        <HStack>
          <Text 
            fontSize="2xl" 
            fontWeight="bold" 
            mt='4'
          >
            BOOKED JOBS
          </Text>
          <IconButton mt='4' aria-label="hide/show booked jobs" icon={showBookedJobs ? <ChevronUpIcon /> : <ChevronDownIcon />} variant='ghost' onClick={() => setShowBookedJobs((prevState) => !prevState)} />
        </HStack>
        {showBookedJobs && <JobsCarousel jobs={bookedJobs} variant={'booked'} />}

        <HStack>
          <Text 
            fontSize="2xl" 
            fontWeight="bold" 
            mt='4'
          >
            COMPLETED
          </Text>
          <IconButton mt='4' aria-label="hide/show completed jobs" icon={showCompletedJobs ? <ChevronUpIcon /> : <ChevronDownIcon />} variant='ghost' onClick={() => setShowCompletedJobs((prevState) => !prevState)} />
        </HStack>
        {showCompletedJobs && <JobsCarousel jobs={completedJobs} variant={'completed'} />}

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
            {userPets?.data.map((dog) => {
              return (
                <Avatar size='lg' name={dog.name} key={dog.id} src={dog.image_url} />
              )
            })}
            <AddPetModule />
          </HStack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default OwnerDashboard