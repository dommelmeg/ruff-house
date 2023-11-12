import React from "react";
import { Flex, CardFooter, Heading, Card, Text, CardHeader, CardBody, Button, Avatar, SimpleGrid } from "@chakra-ui/react";

const DogHouse = () => {
  return (
    <SimpleGrid spacing={4} columns=
    {3}>
      <Card padding='2' align='center'>
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

      <Card padding='2' align='center'>
        <Avatar name='Bella Sprunger'></Avatar>
        <CardHeader>
          <Heading size='md'>
            Bella Sprunger
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>1 years old</Text>
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