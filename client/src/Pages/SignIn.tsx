import React, { useReducer, useState } from "react";
import { Box, Text, Button, Heading, FormControl, FormLabel, Input, Flex, HStack, VStack, Alert} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { userAuthAtom } from "../StateManagement/store";
import { useAtom } from "jotai";

const SignIn = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)
  const [showError, setShowError] = useState(false)
  const [loginError, setLoginError] = useState('')

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
    setShowError(false)
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value,
    })
  }

  const signUserIn = useMutation({
    mutationFn: (user) => {
      return axios.post('/signin', user)
      .then((res) => {
        setCurrentUser(res.data)
      })
    },
    onSuccess: () => {
        navigate('/')
      },
    onError: (error) => {
      //@ts-ignore response is definitely on error...
      setLoginError(error.response.data.error.login)
      setShowError(true)
    }
  })
  
  const handleSignInClick = (e) => {
    e.preventDefault()
    signUserIn.mutate(signInState)
  }

  return (
    <Flex direction='row' h='100vh'>
      <Box display='flex' shadow='2xl' w='md' alignItems='center' justifyContent='center'>
        <VStack>
          <Heading >New to RUFF HOUSE?</Heading>
          <Text>Don't have an account yet? Create one below.</Text>
          <Button 
            colorScheme='orange'
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
            {showError && <Alert status='error'>{loginError}</Alert>}
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
