import React from "react";
import { Flex, Box, Circle, Avatar, HStack,  Text, Stack } from "@chakra-ui/react";
import JobsCarousel from "../Components/JobsCarousel";
import { AddIcon } from '@chakra-ui/icons'

const OwnerDashboard = () => {
  //jobs that have not happened yet
  const current = []
  //completed jobs
  const past = []

  const handleClick = () => {
    console.log('YAY, a new doggo!')
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
        <JobsCarousel jobStatus={current} />

        <Text 
          fontSize="2xl" 
          fontWeight="bold" 
          mt='4'
        >
          COMPLETED JOBS
        </Text>
        <JobsCarousel jobStatus={past} />

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