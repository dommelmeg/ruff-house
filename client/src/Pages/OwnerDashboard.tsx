import React from "react";
import { Flex, Heading, Box, Card, VStack, Grid, Circle, Avatar, HStack, CardHeader, CardBody, Text, Stack } from "@chakra-ui/react";
import JobsCarousel from "../Components/JobsCarousel";
import { AddIcon } from '@chakra-ui/icons'

const OwnerDashboard = () => {
  const handleClick = () => {
    console.log('YAY, a new doggo!')
  }

  return (
    <Flex direction='row' maxW='100%'>
      <Stack>
        <Text mt='4'>Open Jobs</Text>
        <JobsCarousel />
        <Text mt='4'>Previous Jobs</Text>
        <JobsCarousel />
        <Text mt='4'>Doggo House</Text>
        <Box width='80vw' padding={4} rounded='2xl'>
          <HStack>
            <Avatar size='lg' name='Luke' />
            <Avatar size='lg' name='Leia Story' />
            <Avatar size='lg' name='Bella Sprunger' />
            <Circle 
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