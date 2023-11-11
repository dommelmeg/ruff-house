import React from "react";
import { Flex, CardFooter, Heading, Card, Text, CardHeader, CardBody, Button, Avatar, SimpleGrid } from "@chakra-ui/react";

const DogHouse = () => {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card align='center'>
        <Avatar name='Luke'></Avatar>
        <CardHeader>
          <Heading size='md'>
            Luke Story
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>2 years old</Text>
        </CardBody>
        <CardFooter>
          <Button size='sm'>Edit Info</Button>
          <Button size='sm'>Add Photos</Button>
        </CardFooter>
      </Card>

      <Card padding='2' align='center'>
        <Avatar name='Leia Story'></Avatar>
        <CardHeader>
          <Heading size='md'>
            Leia Story
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>3 years old</Text>
        </CardBody>
        <CardFooter>
          <Button size='sm'>Edit Info</Button>
          <Button size='sm'>Add Photos</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  )
}

export default DogHouse