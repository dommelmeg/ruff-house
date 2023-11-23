import React, { useReducer } from "react";
import { FormControl, Button, RadioGroup, HStack, Radio, FormLabel, VStack, Input, useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const CreateAcctForm = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const toastIdRef: any = React.useRef()

  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    type: 'Owner',
  }
  
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

  const handleFormSubmitClick = async (e) => {
    e.preventDefault()
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
        name='firstName' 
        value={formState.firstName} 
        onChange={handleInputChange} 
        placeholder='First Name' 
        width='md' 
      />

      <FormLabel marginTop='2'>Last Name</FormLabel>
      <Input 
        type='lastName'
        name='lastName' 
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
