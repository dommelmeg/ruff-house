import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, VStack } from "@chakra-ui/react";

const Sitters = () => {
  const [allSitters, setAllSitters] = useState([])

  useEffect(() => {
    fetch("/sitters")
      .then((r) => {
        if (r.ok) {
          r.json()
          .then((sitters) => setAllSitters(sitters))
        }
      }) 
  }, [])

  return (

    <SimpleGrid columns={3} gap={4} >
      {allSitters?.map((sitter) => {
        return (
          <Card padding='2' align='center' key={sitter.id}>
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