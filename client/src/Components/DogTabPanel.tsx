import React, { useEffect, useState } from "react";
import { TabPanel, Grid, GridItem, Image, SimpleGrid, Heading, Button, ButtonGroup, IconButton, HStack, Text, Spacer, Divider, Box, VStack } from "@chakra-ui/react";
import { randomDogBreed } from "../StateManagement/store";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const DogTabPanel = ({ age, dog }) => {
  const [dogPic, setDogPic] = useState('')
  const queryClient = useQueryClient()
  console.log(age)
  
  useEffect(() => {
    setDogPic(randomDogBreed.imageURL)
  }, [])

  const deletePet = useMutation({
    mutationFn: (id) => {
      return axios.delete(`/pets/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userpets'] })
      queryClient.invalidateQueries({ queryKey: ['userjobs'] })
    }
  })

  const handleDeletePetBtn = () => {
    deletePet.mutate(dog.id)
  }

  return (
    <>
      <TabPanel>
        <Grid 
          templateColumns='repeat(3, 1fr)'
          templateRows='repeat(2, 1fr)'
          gap='8'
        >
          <GridItem
            colSpan={1}
            rowSpan={1}
            maxW='200px'
          >
            <Image 
              maxW='200px'
              src={dog.image_url || dogPic}
            />
          </GridItem>
          <GridItem 
            colSpan={2}
            rowSpan={1}
            maxW='400px'
          >
            <HStack>
              <Heading>{dog.name}</Heading>

              <IconButton
                variant='ghost'
                aria-label="delete pet"
                icon={<DeleteIcon />}
                onClick={handleDeletePetBtn}
              />
            </HStack>
            {
            age < 1 ? <Text>Puppy - {dog.gender} {dog.breed} </Text>
            : 
            <Text>{age} Years Old – {dog.gender} {dog.breed}</Text>
            }
            <Text>{dog.weight} lbs.</Text>
            <Divider mt={4} mb={4} />
            <Text>{dog.bio}</Text>
          </GridItem>
          <GridItem
            colSpan={3}
            rowSpan={1}
          >
            {/* For when I add Active storage */}

            {/* <Box w='630px'>
              <Heading size='lg'>The Cutest Doggo Award Goes To...</Heading>
              Cutie lil doggo images go here
            </Box> */}
          </GridItem>
        </Grid>
      </TabPanel>
    </>
  )
}

export default DogTabPanel