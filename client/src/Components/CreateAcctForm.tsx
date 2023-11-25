import React, { useReducer } from "react";
import { FormControl, Button, RadioGroup, HStack, Radio, FormLabel, VStack, Input, useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useQuery, useMutation } from '@tanstack/react-query';
import axios, {isCancel, AxiosError} from 'axios';
import { initialFormState, userAuthAtom, errorsAtom } from "../State Management/store";
import { useAtom } from "jotai";

const CreateAcctForm = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const toastIdRef: any = React.useRef()
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)
  const [errors, setErrors] = useAtom(errorsAtom)
  
  const formReducer = (state, action) => {
    switch (action.type) {
      case 'HANDLE INPUT TEXT':
        return {
          ...state,
          [action.field]: action.payload,
        }
        case 'HANDLE RADIO CHANGE':
          return {
            ...state,
            type: action.payload,
          }
        default:
          return state
    }
  }
  
  const [formState, dispatch] = useReducer(formReducer, initialFormState)
  
  const handleInputChange = (e) => {
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value,
    })
  }
  
  const handleRadioChange = (e) => {
    dispatch({
      type: 'HANDLE RADIO CHANGE',
      field: 'type',
      payload: e,
    })
  }
  
  const createProfile = useMutation({
    mutationFn: (newProfile) => {
      return axios.post('/signup', newProfile)
      .then((res) => {
        //set user here
        setCurrentUser(res.data)
        navigate('/')
      })
      .catch((error) => {
        //set errors here
        setErrors(error.response.data.errors)
      });
    }
    
  })
  
  const handleFormSubmitClick = async (e) => {
    //need to clear any errors
    e.preventDefault()
    
    createProfile.mutate(formState)
    setCurrentUser(formState)
    // toastIdRef.current = toast({
      //   title: 'Account Pending',
      //   status: 'loading',
      //   duration: null
      // })

    // try {
    //   toast.update(toastIdRef.current, {
    //     title: 'Account Created',
    //     status: 'success',
    //     duration: 2000,
    //     isClosable: true,
    //   })
    // } catch {
    //   toast.update(toastIdRef.current, {
    //     title: 'An error occurred',
    //     status: 'error',
    //     duration: 2000,
    //     isClosable: true,
    //   })
    // }
  }

  // console.log(currentUser)
  console.log(errors)

  return (
    <FormControl isRequired>
      <VStack align='left'>
      <FormLabel>First Name</FormLabel>
      <Input 
        type='firstName' 
        name='first_name' 
        value={formState.firstName} 
        onChange={handleInputChange} 
        placeholder='First Name' 
        width='md' 
      />

      <FormLabel marginTop='2'>Last Name</FormLabel>
      <Input 
        type='lastName'
        name='last_name' 
        value={formState.lastName} 
        onChange={handleInputChange} 
        placeholder='Last Name' 
        width='md' 
      />

      <FormLabel marginTop='2'>Email Address</FormLabel>
      <Input 
        type='email'
        name='email' 
        value={formState.email}
        onChange={handleInputChange} 
        placeholder='Email Address' 
        width='md' 
      />

      <FormLabel marginTop='2'>Username</FormLabel>
      <Input 
        type='username'
        name='username' 
        value={formState.username} 
        onChange={handleInputChange} 
        placeholder='Username' 
        width='md' 
      />

      <FormLabel marginTop='2'>Password</FormLabel>
      <Input
        type='password' 
        name='password' 
        value={formState.password} 
        onChange={handleInputChange}
        placeholder='Password' 
        width='md' 
      />

      <FormControl as='fieldset' isRequired>
        <FormLabel as='legend' marginTop='4'>
          Are you a:
        </FormLabel>
        <RadioGroup 
          defaultValue='Owner' 
          onChange={handleRadioChange} 
          colorScheme='orange'
        >
          <HStack spacing='24px'>
            <Radio type='type' name='Owner' value='Owner'>Pet Owner</Radio>
            <Radio type='type' name='Sitter' value='Sitter'>Pet Sitter</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <Button 
        colorScheme='orange' 
        variant='outline' 
        rounded='3xl'
        marginTop='2'
        onClick={handleFormSubmitClick}
      >
        Create Account
      </Button>

    </VStack>
    </FormControl>
  )
}

export default CreateAcctForm
