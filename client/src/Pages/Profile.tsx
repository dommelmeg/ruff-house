import React from "react";
import { Flex, Grid, GridItem, Image, HStack, Heading, IconButton, Text, Divider } from "@chakra-ui/react";

const Profile = () => {


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
          </GridItem>
          <GridItem 
            colSpan={2}
            rowSpan={1}
            maxW='400px'
          >
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
