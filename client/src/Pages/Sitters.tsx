import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, VStack, Avatar } from "@chakra-ui/react";

const Sitters = () => {
  const { data: allSitters } = useQuery({
    queryKey: ['allSitters'],
    queryFn: () => {
      return axios.get('/sitters')
    }
  })

  return (
    <SimpleGrid columns={4} gap={4} >
      {allSitters?.data.length > 0 ? allSitters.data.map((sitter) => {
        return (
          <Card padding='2' align='center' key={sitter.id}>
            <CardHeader>
              <VStack>
                <Avatar name={sitter.name} src={sitter.image_url} />
                <Heading size='md'>
                  {sitter.first_name} {sitter.last_name}
                </Heading>
              </VStack>
            </CardHeader>
            <CardBody>
              <VStack align='center'>
                {sitter.city ? 
                  <Text>{sitter.city}, {sitter.state}</Text> 
                : null
                }
              </VStack>
            </CardBody>
          </Card>
        )
      })
      :
      <Text>No sitters available</Text>
    }
    </SimpleGrid>
  )
}

export default Sitters