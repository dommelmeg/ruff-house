import React from "react";
import { Flex, Grid, GridItem, Image, HStack, Heading, Text, Divider, Alert, AlertTitle, AlertIcon } from "@chakra-ui/react";
import { userAuthAtom } from "../StateManagement/store";
import { useAtom } from "jotai";
import EditProfileModal from "../Components/EditProfileModal";

const Profile = () => {
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)
  const defaultImg = 'https://i.stack.imgur.com/l60Hf.png'

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
            maxW='600px'
          >
            <HStack>
            <Heading>Welcome, {currentUser.first_name} {currentUser.last_name}</Heading>
              <EditProfileModal />
            </HStack>
            {currentUser.city ? <Text>{currentUser.city}, {currentUser.state}</Text> 
            : 
            <Alert 
              mt='4' 
              status='error' 
              variant='top-accent' 
              rounded='md'
            >
              <AlertIcon />
                <AlertTitle>Use the edit button above to add your location!</AlertTitle>
            </Alert>}
            <Divider mt='4' />
            <Text mt='4'><b>Username:</b> {currentUser.username}</Text>
            <Text><b>Email: </b>{currentUser.email}</Text>
            {currentUser.type === 'Sitter' && 
              <>
                <Divider mt='4' />
                <Text mt='4'><b>Daily Rate:</b> ${currentUser.daily_rate}</Text>
              </>
            }
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
