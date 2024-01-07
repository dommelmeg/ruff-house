import React, { useState } from "react";
import { Flex, HStack,  Text, Stack } from "@chakra-ui/react";
import JobsCarousel from "../Components/JobsCarousel";
import { useAtom } from "jotai";
import { userAuthAtom, User } from "../StateManagement/store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SitterDashboard = () => {
  const navigate = useNavigate()
  const [currentUser] = useAtom<User>(userAuthAtom)
  const [showCompletedJobs] = useState(true)

  const { data: sitterJobs } = useQuery({
    queryKey: ['sitterjobs'],
    queryFn: () => {
      return axios.get('/sitterjobs')
    }
  })

  const currentDate = new Date()
  const upcomingJobs = sitterJobs?.data.filter((job) => new Date(job.end_date) > currentDate)
  const completedJobs = sitterJobs?.data.filter((job) => new Date(job.end_date) < currentDate)

  if (currentUser?.type === 'Owner') {
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