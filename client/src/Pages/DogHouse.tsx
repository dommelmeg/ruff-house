import React from "react";
import { CardFooter, Heading, Card, Text, CardHeader, CardBody, Button, Flex, Avatar, SimpleGrid, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, HStack, ButtonGroup, Stack, IconButton, Tabs, TabList, Tab, TabPanels, TabPanel, VStack } from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { userAuthAtom, User } from "../StateManagement/store";
import { useAtom } from "jotai";
import AddPetModule from "../Components/AddPetModule";
import DogTabPanel from "../Components/DogTabPanel";


const DogHouse = () => {
  const [currentUser, setCurrentUser] = useAtom<User>(userAuthAtom)
  const usersDogs = currentUser.pets
  const currentDate = new Date()

  return (
    <Flex w='100%'>
      <Stack>

      <HStack>
        <Text 
          fontSize="2xl" 
          fontWeight="bold"
          >
          DOGGO HOUSE
        </Text>
        <AddPetModule />
      </HStack>

      <Tabs variant='enclosed' mt='4'>
        <TabList mb='1em'>
          {usersDogs?.map((dog) => {
            return (
              <Tab>
                  <Avatar size='xs' />
                  <Text ml='2'>{dog.name}</Text>
              </Tab>
              )
            })}
        </TabList>
        <TabPanels>
        {usersDogs?.map((dog) => {
        const birthDate = new Date(dog.birth_date)
        // @ts-ignore
        const diff = Math.abs(birthDate - currentDate)
        const age = (diff/(1000 * 3600 * 24)/365).toFixed(1)
        return (
          <DogTabPanel age={age} dog={dog} />
        )
      })}
        </TabPanels>
      </Tabs>
            </Stack>
    </Flex>
  )
}

export default DogHouse