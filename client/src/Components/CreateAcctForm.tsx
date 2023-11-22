import React from "react";
import { FormControl, Button, RadioGroup, HStack, Radio, FormLabel, VStack, Input, useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const CreateAcctForm = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const toastIdRef: any = React.useRef()

  const handleChange = (e) => {
    e.preventDefault() 
    const { name, value } = e.target
  }

  const handleRadio = (value) => {
  }


  const handleClick = async (e) => {
    e.preventDefault()
    toastIdRef.current = toast({
      title: 'Account Pending',
      status: 'loading',
      duration: null
    })

    try {
      toast.update(toastIdRef.current, {
        title: 'Account Created',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } catch {
      toast.update(toastIdRef.current, {
        title: 'An error occurred',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  return (
    <FormControl isRequired>
      <VStack align='left'>
      <FormLabel>First Name</FormLabel>
      <Input value={e.target.value} name='firstName' onChange={handleChange} placeholder='First Name' width='md' />

      <FormLabel marginTop='2'>Last Name</FormLabel>
      <Input value={lastName} name='lastName' onChange={handleChange} placeholder='Last Name' width='md' />

      <FormLabel marginTop='2'>Email Address</FormLabel>
      <Input value={email} name='email' onChange={handleChange} placeholder='Email Address' width='md' />

      <FormLabel marginTop='2'>Username</FormLabel>
      <Input value={profileForm.username} name='username' onChange={handleChange} placeholder='Username' width='md' />

      <FormLabel marginTop='2'>Password</FormLabel>
      <Input value={profileForm.password} name='password' onChange={handleChange} placeholder='Password' width='md' />

      <FormControl as='fieldset' isRequired>
        <FormLabel as='legend' marginTop='4'>
          Are you a:
        </FormLabel>
        <RadioGroup defaultValue='Owner' onChange={handleRadio} colorScheme='orange'>
          <HStack spacing='24px'>
            <Radio name='Owner' value='Owner'>Pet Owner</Radio>
            <Radio name='Sitter' value='Sitter'>Pet Sitter</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <Button 
        colorScheme='orange' 
        variant='outline' 
        rounded='3xl'
        marginTop='2'
        onClick={handleClick}
      >
        Create Account
      </Button>

    </VStack>
    </FormControl>
  )
}

export default CreateAcctForm
