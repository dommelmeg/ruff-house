import React from "react";
import { FormControl, Button, RadioGroup, HStack, Radio, FormLabel, VStack, Input } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../app/store";
import { updateField } from "../app/createAcctFormSlice";

const CreateAcctForm = () => {
  const form: any = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(updateField({ field: name, value }));
  }

  return (
    <FormControl isRequired>
      <VStack align='left'>
      <FormLabel>First Name</FormLabel>
      <Input value={form.firstName} name='firstName' onChange={handleChange} placeholder='First Name' width='md' />

      <FormLabel marginTop='2'>Last Name</FormLabel>
      <Input value={form.lastName} name='lastName' onChange={handleChange} placeholder='Last Name' width='md' />

      <FormLabel marginTop='2'>Email Address</FormLabel>
      <Input value={form.email} name='email' onChange={handleChange} placeholder='Email Address' width='md' />

      <FormLabel marginTop='2'>Username</FormLabel>
      <Input value={form.username} name='username' onChange={handleChange} placeholder='Username' width='md' />

      <FormLabel marginTop='2'>Password</FormLabel>
      <Input value={form.password} name='password' onChange={handleChange} placeholder='Password' width='md' />

      <FormControl as='fieldset' isRequired>
        <FormLabel as='legend' marginTop='4'>
          Are you a:
        </FormLabel>
        <RadioGroup defaultValue='owner' onChange={handleChange} colorScheme='orange'>
          <HStack spacing='24px'>
            <Radio name='owner' value='owner'>Pet Owner</Radio>
            <Radio name='sitter' value='sitter'>Pet Sitter</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <Button 
        colorScheme='orange' 
        variant='outline' 
        rounded='3xl'
        marginTop='2'
        onClick={() => console.log(form)}
      >
        Create Account
      </Button>

    </VStack>
    </FormControl>
  )
}

export default CreateAcctForm