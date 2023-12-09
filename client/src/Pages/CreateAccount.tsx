import React from "react";
import { Box, Text, Button, Heading, VStack, Flex } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
import CreateAcctForm from "../Components/CreateAcctForm";

const CreateAccount = () => {
  const navigate = useNavigate()

  return (
    <Flex direction='row'>
      <Box h='100vh' position='fixed' display='flex' shadow='2xl' w='md' alignItems='center' justifyContent='center'>
        <VStack>
          <Heading>Welcome back!</Heading>
          <Text>Already have an account? Sign in below.</Text>
          <Button
            colorScheme='orange' 
            mt={4}
            rounded='3xl'
            onClick={() => navigate('/signin')}
          >
            Sign In
          </Button>
        </VStack>
      </Box>

      <Flex m='8' direction='column' grow='2' alignItems='center' overflow='scroll'>
        <VStack align='left'>
        <Heading color='orange.500'>Create an Account</Heading>
        <CreateAcctForm />
        </VStack>
      </Flex>
    </Flex>
  )
}

export default CreateAccount