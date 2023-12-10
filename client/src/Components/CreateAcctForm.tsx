import React, { useReducer, useState } from "react";
import { FormControl, Button, RadioGroup, HStack, Radio, FormLabel, VStack, Input, useToast, Select, NumberInput, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, NumberInputField } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { userAuthAtom, states } from "../StateManagement/store";
import { useAtom } from "jotai";

const CreateAcctForm = () => {
  const [showDailyRate, setShowDailyRate] = useState(false)

  const initialFormState = {
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    city: '',
    state: '',
    daily_rate: null,
    type: 'Owner',
  }

  const navigate = useNavigate()
  const toast = useToast()
  const toastIdRef: any = React.useRef()
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)
  
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
        case 'HANDLE SELECT INPUT':
          return{
            ...state,
            state: action.payload
          }
        case 'HANDLE NUMBER INPUT':
          return {
            ...state,
            daily_rate: action.payload
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
    e === 'Sitter' ? setShowDailyRate(true) : setShowDailyRate(false)

    dispatch({
      type: 'HANDLE RADIO CHANGE',
      field: 'type',
      payload: e,
    })
  }

  const handleSelectChange = (e) => {
    dispatch({
      type: 'HANDLE SELECT INPUT',
      field: 'state',
      payload: e.target.value
    })
  }

  const handleNumberInput = (e) => {
    dispatch({
      type: 'HANDLE NUMBER INPUT',
      field: 'daily_rate',
      payload: e
    })
  }
  
  const createProfile = useMutation({
    mutationFn: (newProfile) => {
      return axios.post('/signup', newProfile)
      .then((res) => {
        setCurrentUser(res.data)
      })
    }
    
  })
  
  console.log(showDailyRate)
  
  const handleFormSubmitClick = async (e) => {
    //need to clear any errors
    e.preventDefault()
    
    createProfile.mutate(formState)
    if (currentUser.type === 'Owner') {
      navigate('/')
    } else {
      navigate('/sitter-dashboard')
    }
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

      <FormControl isRequired>
        <VStack align='left'>
          <FormLabel mt='2'>City</FormLabel>
          <Input name='city' placeholder='City' value={formState.city} onChange={handleInputChange} width='md' />

          <FormLabel marginTop='2'>State</FormLabel>
          <Select placeholder='Select state' name='state' onChange={handleSelectChange} >
            {states.map((state) => {
              return(
                <option key={state} value={state}>{state}</option>
              )
            })}
          </Select>
        </VStack>
      </FormControl>

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

      {showDailyRate && 
        <>
          <FormLabel>Daily Rate</FormLabel>
          <NumberInput
            onChange={handleNumberInput}
            >
            <NumberInputField 
              value={formState.daily_rate}
              />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      }

      <Button 
        colorScheme='orange' 
        variant='outline' 
        rounded='3xl'
        marginTop='2'
        onClick={handleFormSubmitClick}
        mb='8'
      >
        Create Account
      </Button>

      </VStack>
    </FormControl>
  )
}

export default CreateAcctForm
