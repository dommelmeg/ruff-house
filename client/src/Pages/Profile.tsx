import React from "react";
import { Flex, Grid, GridItem, Image, HStack, Heading, IconButton, Text, Divider } from "@chakra-ui/react";
import { userAuthAtom } from "../StateManagement/store";
import { useAtom } from "jotai";
import { EditIcon } from "@chakra-ui/icons";

const Profile = () => {
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)
  const defaultImg = 'https://i.stack.imgur.com/l60Hf.png'

  const handleEditUserBtn = () => {
    console.log('hook me up bby')
  }

  return (
    <Flex direction='row' maxW='100%'>
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
              src={currentUser.image_url || defaultImg} 
            />
          </GridItem>
          <GridItem 
            colSpan={2}
            rowSpan={1}
            maxW='400px'
          >
            <HStack>
              <Heading>Welcome, {currentUser.first_name}!</Heading>
              <IconButton
                variant='ghost'
                aria-label="edit user"
                icon={<EditIcon />}
                onClick={handleEditUserBtn}
              />
            </HStack>
          </GridItem>
          <GridItem
            colSpan={3}
            rowSpan={1}
          >
          </GridItem>
        </Grid>
    </Flex>
  )
}

export default Profile
