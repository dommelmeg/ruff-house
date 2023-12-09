import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { Flex, Text, SimpleGrid, Stack } from "@chakra-ui/react";
import JobCard from "../Components/JobCard";

const Jobs = () => {
  const { data: allJobs } = useQuery({
    queryKey: ['allJobs'],
    queryFn: () => {
      return axios.get('/jobs')
    }
  })

  const unBookedJobs = allJobs.data.filter((job) => !job.sitter_id)

  return (
    <Flex w='100%'>
      <Stack>
      <Text 
          fontSize="2xl" 
          fontWeight="bold"
          >
          AVAILABLE JOBS
        </Text>
        <SimpleGrid columns={3} gap={4}>
          {unBookedJobs.map((job) => {
            return (
              <JobCard job={job} variant={'unbooked'} />
              )
            })}
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}

export default Jobs