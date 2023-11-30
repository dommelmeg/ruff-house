import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, VStack } from "@chakra-ui/react";

const Sitters = () => {
  const [allSitters, setAllSitters] = useState([])

  const getSitters = useQuery({
    queryKey: ['getSitters'],
    queryFn: () => {
      return axios.get('/sitters')
      .then((r) => setAllSitters(r.data))
    }
  })

  return (
    <SimpleGrid columns={3} gap={4} >
      {allSitters.map((sitter) => {
        return (
          <Card padding='2' align='center'>
            <CardHeader>
              <Heading size='md'>
                {sitter.first_name} {sitter.last_name}
              </Heading>
            </CardHeader>
            <CardBody>
              <VStack>

                <Text>City, State</Text>
                <Text>A rating would be cool too...</Text>
              </VStack>
            </CardBody>
          </Card>
        )
      })}
    </SimpleGrid>
  )
}

export default Sitters