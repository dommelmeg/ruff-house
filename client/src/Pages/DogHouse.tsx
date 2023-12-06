import React from "react";
import { CardFooter, Heading, Card, Text, CardHeader, CardBody, Button, Flex, Avatar, SimpleGrid, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, HStack, ButtonGroup, Stack, IconButton, Tabs, TabList, Tab, TabPanels, TabPanel, VStack } from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { userAuthAtom, User } from "../StateManagement/store";
import { useAtom } from "jotai";
import AddPetModule from "../Components/AddPetModule";
import DogTabPanel from "../Components/DogTabPanel";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const DogHouse = () => {
  const [currentUser, setCurrentUser] = useAtom<User>(userAuthAtom)
  const usersDogs = currentUser.pets
  const currentDate = new Date()

  const { data: userPets } = useQuery({
    queryKey: ['userpets'],
    queryFn: () => {
      return axios.get('/userpets')
    }
  })

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
          {userPets?.data.map((dog) => {
            return (
              <Tab key={dog.id}>
                  <Avatar size='xs' src={dog.image_url} name={dog.name} />
                  <Text ml='2'>{dog.name}</Text>
              </Tab>
              )
            })}
        </TabList>
        <TabPanels>
        {userPets?.data.map((dog) => {
        const birthDate = new Date(dog.birth_date)
        // @ts-ignore
        const diff = Math.abs(birthDate - currentDate)
        const ageNum = (diff/(1000 * 3600 * 24)/365)
        const age = Math.trunc(ageNum)
        return (
          <Box><DogTabPanel age={age} dog={dog} /></Box>
        )
      })}
        </TabPanels>
      </Tabs>
      </Stack>
    </Flex>
  )
}

export default DogHouse