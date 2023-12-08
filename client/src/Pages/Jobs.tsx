import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { Card, CardHeader, Flex, SimpleGrid } from "@chakra-ui/react";
import { moment } from "../StateManagement/store";

const Jobs = () => {
  const { data: allJobs } = useQuery({
    queryKey: ['allJobs'],
    queryFn: () => {
      return axios.get('/jobs')
    }
  })

  const unBookedJobs = allJobs?.data.filter((job) => !job.sitter_id)

  return (
    <Flex w='100%'>
      <SimpleGrid columns={4} gap={4}>
        {unBookedJobs.map((job) => {
          const startDate = moment(job.start_date).format('ll')
          const endDate = moment(job.end_date).format('ll')
          return (
            <Card key={job.id}>
              <CardHeader>{startDate} - {endDate}</CardHeader>
            </Card>
          )
        })}
      </SimpleGrid>
    </Flex>
  )
}

export default Jobs