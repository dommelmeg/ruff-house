import React, { useState } from "react";
import { Card, Box, CardHeader, CardBody, Avatar, AvatarGroup, CardFooter, Button, ButtonGroup } from "@chakra-ui/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const JobsCarousel = ({ jobStatus }) => {

  const jobsArray = [
    {id: 1, start_date: '9/3/2024', end_date: '9/5/2024', description: 'need overnight care for dogs', owner_id: 1, sitter_id: 3},
    {id: 2, start_date: '12/5/2023', end_date: '12/10/2023', description: 'need a sitter to walk dogs every 4-6 hours and feed them twice a day', owner_id: 2, sitter_id: 3},
    {id: 1, start_date: '9/3/2024', end_date: '9/5/2024', description: 'need overnight care for dogs', owner_id: 1, sitter_id: 3},
    {id: 2, start_date: '12/5/2023', end_date: '12/10/2023', description: 'need a sitter to walk dogs every 4-6 hours and feed them twice a day', owner_id: 2, sitter_id: 3},
    {id: 2, start_date: '12/5/2023', end_date: '12/10/2023', description: 'need a sitter to walk dogs every 4-6 hours and feed them twice a day', owner_id: 2, sitter_id: 3},
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Box width='80vw' bg='gray.300' padding={4} rounded='2xl'>
      <Carousel responsive={responsive}>
        {jobsArray.map((job) => {
          return(
            <Card size='sm' padding={2} m={4} key={job.id}>
              <CardHeader>
                {job.start_date} - {job.end_date}
              </CardHeader>
              <CardBody>
                {job.description}
                <AvatarGroup size='sm' max={2} mt={2}>
                  <Avatar name='Luke' />
                  <Avatar name='Leia Story' />
                  <Avatar name='Bella Sprunger' />
                </AvatarGroup>
              </CardBody>
              <CardFooter>
                  <ButtonGroup>
                    <Button variant='outline' colorScheme="orange">Edit</Button>
                    <Button variant='outline' colorScheme="orange">Delete</Button>
                  </ButtonGroup>
              </CardFooter>
            </Card>
          )
        })}
      </Carousel>
    </Box>
  )
}

export default JobsCarousel