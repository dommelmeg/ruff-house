import React from "react";
import { Box, Text, Button, Heading, FormControl, FormLabel, Input, Flex, HStack, VStack} from "@chakra-ui/react";
import { useNavigate, useLocation } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Flex direction='row' h='100vh'>
      <Box display='flex' bg='orange.200' w='md' alignItems='center' justifyContent='center'>
        <VStack>
          <Heading color='orange.500'>New to RUFF HOUSE?</Heading>
          <Text>Don't have an account yet? Create one below.</Text>
          <Button 
            colorScheme='orange' 
            variant='outline' 
            rounded='3xl'
            marginTop='4'
            onClick={() => navigate('/createaccount')}
          >
            Create an Account
          </Button>
        </VStack>
      </Box>

      <Flex direction='column' justify='center' grow='2' alignItems='center'>
        <VStack align='left'>
          <Heading color='orange.500'>Welcome Back!</Heading>
          <HStack>
            <FormControl>
              
              <FormLabel>Username</FormLabel>
              <Input placeholder='Email Address' width='md' />

              <FormLabel marginTop='2'>Password</FormLabel>
              <Input placeholder='Email Address' width='md' />

            </FormControl>
          </HStack>
          <Button 
            colorScheme='orange' 
            variant='outline' 
            marginTop='4' 
            rounded='3xl'
          >
            Sign In
          </Button>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default SignIn
