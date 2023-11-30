import React, { useReducer } from "react";
import { FormControl, VStack, Button, FormLabel, Input, Select, Box } from '@chakra-ui/react'
import { useQuery, useMutation } from '@tanstack/react-query'

const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

const StepOne = ({ setActiveStep }) => {
  // const locationReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'HANDLE INPUT TEXT':
  //       return {
  //         ...state,
  //         [action.field]: action.payload,
  //       }
  //     default:
  //       return state
  //   }
  // }

  const handleChange = (e) => {
    // dispatch({
    //   type: 'HANDLE INPUT TEXT',
    //   field: e.target.name,
    //   payload: e.target.value,
    // })
  }
  
  const handleClick = (e) => {
    e.preventDefault()

    setActiveStep(prev => prev + 1)
  }

  const handleSelect = (value) => {
  }

  return (
    <Box display='flex' margin='auto' w='28rem' justifyContent='center'>
      <FormControl isRequired>
        <VStack align='left'>
        <FormLabel>City</FormLabel>
        <Input name='city' onChange={handleChange} placeholder='City' width='md' />

        <FormLabel marginTop='2'>State</FormLabel>
        <Select placeholder='Select state' name='state' onChange={handleChange} >
          {states.map((state) => {
            return(
              <option key={state} value={state}>{state}</option>
            )
          })}
        </Select>

        <Button 
          colorScheme='orange' 
          variant='outline' 
          rounded='3xl'
          marginTop='2'
          onClick={handleClick}
        >
          Next: Set Avatar
        </Button>

      </VStack>
      </FormControl>
    </Box>
  )
}

export default StepOne