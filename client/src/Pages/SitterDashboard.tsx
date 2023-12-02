import React, { useState } from "react";
import { Flex, HStack,  Text, Stack } from "@chakra-ui/react";
import JobsCarousel from "../Components/JobsCarousel";
import { useAtom } from "jotai";
import { userAuthAtom, User } from "../StateManagement/store";
import { useNavigate } from "react-router-dom";

const SitterDashboard = () => {
  const [showCompletedJobs] = useState(true)
  const [currentUser] = useAtom<User>(userAuthAtom)
  const navigate = useNavigate()
  const userJobs = currentUser.jobs
  const currentDate = new Date()
  const upcomingJobs = userJobs?.filter((job) => new Date(job.end_date) > currentDate)
  const completedJobs = userJobs?.filter((job) => new Date(job.end_date) < currentDate)

  if (currentUser.type === 'Owner') {
    navigate('/')
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
        <JobsCarousel jobs={upcomingJobs} variant={'sitter'} />

        <HStack>
          <Text 
            fontSize="2xl" 
            fontWeight="bold" 
            mt='4'
          >
            COMPLETED
          </Text>
        </HStack>
        {showCompletedJobs && <JobsCarousel jobs={completedJobs} variant={'sitter'} />}
        </Stack>
    </Flex>
  )
}

export default SitterDashboard