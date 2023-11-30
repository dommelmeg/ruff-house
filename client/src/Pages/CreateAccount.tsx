import React from "react";
import { Box, Text, Button, Heading, VStack, Flex } from "@chakra-ui/react";
import { useNavigate, useLocation } from 'react-router-dom'
import CreateAcctForm from "../Components/CreateAcctForm";

const CreateAccount = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Flex direction='row' h='100vh'>
      <Box display='flex' bg='orange.200' w='md' alignItems='center' justifyContent='center'>
        <VStack>
          <Heading color='orange.500'>Welcome back!</Heading>
          <Text>Already have an account? Sign in below.</Text>
          <Button 
            colorScheme='orange' 
            // variant='outline' 
            mt={4}
            rounded='3xl'
            onClick={() => navigate('/signin')}
          >
            Sign In
          </Button>
        </VStack>
      </Box>
      <Flex direction='column' justify='center' grow='2' alignItems='center'>
        <VStack align='left'>
        <Heading color='orange.500'>Create an Account</Heading>
        <CreateAcctForm />
        </VStack>
      </Flex>
    </Flex>
  )
}

export default CreateAccount