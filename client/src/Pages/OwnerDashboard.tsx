import React, { useState } from "react";
import { Flex, Box, Circle, Avatar, HStack,  Text, Stack, IconButton, Icon } from "@chakra-ui/react";
import JobsCarousel from "../Components/JobsCarousel";
import { AddIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useAtom } from "jotai";
import { userAuthAtom, User } from "../StateManagement/store";

const OwnerDashboard = () => {
  const [showCompletedJobs, setShowCompletedJobs] = useState(true)
  const [currentUser, setCurrentUser] = useAtom<User>(userAuthAtom)
  const userJobs = currentUser.jobs


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
        <HStack>

        <Text 
          fontSize="2xl" 
          fontWeight="bold"
          >
          UPCOMING JOBS
        </Text>
        <IconButton aria-label="add job" icon={<AddIcon />} variant='ghost' onClick={handleAddJobBtn} />
        </HStack>
        <JobsCarousel jobs={userJobs} />

        <HStack>
          <Text 
            fontSize="2xl" 
            fontWeight="bold" 
            mt='4'
          >
            COMPLETED JOBS
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
            <Avatar size='lg' name='Luke' />
            <Avatar size='lg' name='Leia Story' />
            <Avatar size='lg' name='Bella Sprunger' />
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