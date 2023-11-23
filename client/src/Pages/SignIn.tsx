import React, { useReducer } from "react";
import { Box, Text, Button, Heading, FormControl, FormLabel, Input, Flex, HStack, VStack} from "@chakra-ui/react";
import { useNavigate, useLocation } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query';
import axios, {isCancel, AxiosError} from 'axios';

const SignIn = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const initialSignInState = {
    username: '',
    password: '',
  }

  const signInReducer = (state, action) => {
    switch (action.type) {
      case 'HANDLE INPUT TEXT':
        return {
          ...state,
          [action.field]: action.payload,
        }
      default:
        return state 
    }
  }

  const [signInState, dispatch] = useReducer(signInReducer, initialSignInState)

  const handleInputChange = (e) => {
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value,
    })
  }

  const signInUser = useMutation({
    mutationFn: (user) => {
      return axios.post('/login', user)
    }
  })

  const handleSignInClick = (e) => {
    e.preventDefault()

    signInUser.mutate(signInState)
  }

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
              <Input 
                type='username'
                name='username' 
                value={signInState.username}
                onChange={handleInputChange} placeholder='Username' 
                width='md' 
              />

              <FormLabel marginTop='2'>Password</FormLabel>
              <Input 
                type='password'
                name='password' 
                value={signInState.password}
                onChange={handleInputChange}placeholder='Password' 
                width='md' 
              />

            </FormControl>
          </HStack>
          <Button 
            colorScheme='orange' 
            variant='outline' 
            marginTop='4' 
            rounded='3xl'
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default SignIn
