import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { Flex, Text, SimpleGrid, Stack } from "@chakra-ui/react";
import JobCard from "../Components/JobCard";

const Jobs = ({allJobs}) => {
  const currentDate = new Date()

  console.log(allJobs)

  const unBookedJobs = allJobs?.data.filter((job) => {
    const startDate = new Date(job.start_date)
    return !job.sitter_id && startDate > currentDate
  })

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
          {unBookedJobs?.map((job) => {
            return (
              <JobCard key={job.id} job={job} variant={'unbooked'} />
              )
            })}
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}

export default Jobs