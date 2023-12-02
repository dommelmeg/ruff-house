import React, { useState } from "react";
import { Card, Box, CardHeader, CardBody, Avatar, AvatarGroup, CardFooter, Button, ButtonGroup } from "@chakra-ui/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Job, userAuthAtom, User } from "../StateManagement/store";
import JobCard from "./JobCard";

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

  if (!jobs.length) return <Box>Nothing to see here</Box>

  return (
    <Box width='80vw' bg='gray.300' padding={4} rounded='2xl'>
      <Carousel responsive={responsive}>
        {jobs?.map((job) => {
          return(
            <JobCard job={job} key={job.id} />
          )
        })}
      </Carousel>
    </Box>
  )
}

export default JobsCarousel