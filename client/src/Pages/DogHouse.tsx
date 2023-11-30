import React from "react";
import { CardFooter, Heading, Card, Text, CardHeader, CardBody, Button, Avatar, SimpleGrid, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, HStack, ButtonGroup, Stack } from "@chakra-ui/react";
import { userAuthAtom, User } from "../StateManagement/store";
import { useAtom } from "jotai";


const DogHouse = () => {
  const [currentUser, setCurrentUser] = useAtom<User>(userAuthAtom)
  const usersDogs = currentUser.pets

  return (
    <Accordion allowToggle>
      {usersDogs.map((dog) => {
        return (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  <HStack>
                  <Avatar size='lg' name={dog.name} />
                  <Heading size='md'>{dog.name}</Heading>
                  </HStack>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack>
                <Text>{dog.breed}</Text>
                <Text>{dog.gender.toUpperCase()}: {dog.age} Years Old</Text>
                <ButtonGroup>
                  <Button size='sm'>Edit Info</Button>
                  <Button size='sm'>Add Photos</Button>
                </ButtonGroup>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default DogHouse