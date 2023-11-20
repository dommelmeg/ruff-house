import React from "react";
import { Flex, Heading, Box, Card, VStack, Grid, Circle, Avatar, HStack, CardHeader, CardBody, Text, Stack } from "@chakra-ui/react";
import JobsCarousel from "../Components/JobsCarousel";
import { AddIcon } from '@chakra-ui/icons'
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const OwnerDashboard = () => {
  const user: any = useSelector((state: RootState) => state.reducer.auth)

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