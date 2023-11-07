import React from "react";
import { Card, Box, Flex, CardHeader, CardBody, Avatar, AvatarGroup } from "@chakra-ui/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const JobsCarousel = () => {
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
        <Card size='sm' padding={2} m={4}>
          <CardHeader>
            Job #1
          </CardHeader>
          <CardBody>
            This is an upcoming jerb for:
            <AvatarGroup size='md' max={2}>
              <Avatar name='Luke' />
              <Avatar name='Leia Story' />
              <Avatar name='Bella Sprunger' />
            </AvatarGroup>
          </CardBody>
        </Card>

        <Card padding={2} m={4}>
          <CardHeader>
            Job #2
          </CardHeader>
          <CardBody>
            This is an upcoming jerb
          </CardBody>
        </Card>

        <Card padding={2} m={4}>
          <CardHeader>
            Job #3
          </CardHeader>
          <CardBody>
            This is an upcoming jerb
          </CardBody>
        </Card>

        <Card padding={2} m={4}>
          <CardHeader>
            Job #4
          </CardHeader>
          <CardBody>
            This is an upcoming jerb
          </CardBody>
        </Card>
      </Carousel>
    </Box>
  )
}

export default JobsCarousel