import React, { useState } from "react";
import { Card, Box, CardHeader, CardBody, Avatar, AvatarGroup, CardFooter, Button, ButtonGroup } from "@chakra-ui/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Job } from "../StateManagement/store";

interface JobsCarouselProps {
  jobs: Job[]
}

const JobsCarousel = ({ jobs }: JobsCarouselProps) => {
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
  console.log(jobs)
  if (!jobs.length) return <Box>Nothing to see here</Box>

  return (
    <Box width='80vw' bg='gray.300' padding={4} rounded='2xl'>
      <Carousel responsive={responsive}>
        {jobs.map((job) => {
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