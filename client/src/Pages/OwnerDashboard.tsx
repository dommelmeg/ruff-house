import React from "react";
import { Flex, Heading, Box, Card, VStack, Grid, GridItem, HStack, CardHeader, CardBody, Text, Stack } from "@chakra-ui/react";

const OwnerDashboard = () => {
  return (
    <Flex w='100%'>
      <Box w='50%' padding='2'>
        <Stack>
          <Heading>Hey, Meg.</Heading>
          <Text mt='4'>Open Jobs</Text>
          <Box bg='gray.300' maxW='100%' rounded='2xl'>
            <HStack m='2'>
              <Card>
                <CardHeader>Open Jobs</CardHeader>
                <CardBody>
                  Job #1
                </CardBody>
              </Card>

              <Card>
                <CardHeader>Open Jobs</CardHeader>
                <CardBody>
                  Job #2
                </CardBody>
              </Card>
            </HStack>
          </Box>
        </Stack>

        <Stack>
          <Text mt='4'>Completed Jobs</Text>
          <Box bg='gray.300' maxW='100%' rounded='2xl'>
            <HStack m='2'>
              <Card>
                <CardHeader>Completed Jobs</CardHeader>
                <CardBody>
                  Old Job #1
                </CardBody>
              </Card>

              <Card>
                <CardHeader>Completed Jobs</CardHeader>
                <CardBody>
                  Old Job #2
                </CardBody>
              </Card>

              <Card>
                <CardHeader>Completed Jobs</CardHeader>
                <CardBody>
                  Old Job #3
                </CardBody>
              </Card>

              <Card>
                <CardHeader>Completed Jobs</CardHeader>
                <CardBody>
                  Old Job #4
                </CardBody>
              </Card>
            </HStack>
          </Box>
        </Stack>
      </Box>

      <Box w='50%' p='2'>
      <Text m='2'>Dog House</Text>
        <Box maxW='100%' rounded='2xl'>
          <HStack m='2'>
            <Card>
              <CardHeader>Doggo #1</CardHeader>
              <CardBody>
                The Goodest Boy
              </CardBody>
            </Card>
          </HStack>
        </Box>
      </Box>
    </Flex>
  )
}

export default OwnerDashboard