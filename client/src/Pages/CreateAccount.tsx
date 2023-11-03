import React from "react";
import { Box, Text, Button, Heading, FormControl, FormLabel, Input, Flex, RadioGroup, HStack, Radio, VStack} from "@chakra-ui/react";
import { useNavigate, useLocation } from 'react-router-dom'

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
            variant='outline' 
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
          <HStack> 
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input placeholder='First Name' width='md' />

              <FormLabel marginTop='2'>Last Name</FormLabel>
              <Input placeholder='Last Name' width='md' />

              <FormLabel marginTop='2'>Email Address</FormLabel>
              <Input placeholder='Email Address' width='md' />

              <FormLabel marginTop='2'>Username</FormLabel>
              <Input placeholder='Email Address' width='md' />

              <FormLabel marginTop='2'>Password</FormLabel>
              <Input placeholder='Email Address' width='md' />

              <FormControl as='fieldset' isRequired>
                <FormLabel as='legend' marginTop='2'>Are you a:</FormLabel>
                <RadioGroup defaultValue='Pet Owner' colorScheme='orange'>
                  <HStack spacing='24px'>
                    <Radio value='Pet Owner'>Pet Owner</Radio>
                    <Radio value='Pet Sitter'>Pet Sitter</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </FormControl>
          </HStack>
            <Button
              colorScheme='orange' 
              variant='outline' 
              marginTop='4' 
              rounded='3xl' 
            >
              Create Account
            </Button>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default CreateAccount