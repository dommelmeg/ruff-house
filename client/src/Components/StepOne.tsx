import React from "react";
import { StepIndicator, useSteps, Step, StepStatus, StepIcon, StepNumber, Box, StepTitle, StepDescription, StepSeparator, Stepper, Text, FormControl, VStack, Button, FormLabel, Input, Select } from '@chakra-ui/react'

const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

const StepOne = ({ setActiveStep }) => {

  const handleChange = (e) => {
    const { name, value } = e.target
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
        <Input value={profile.city} name='city' onChange={handleChange} placeholder='City' width='md' />

        <FormLabel marginTop='2'>State</FormLabel>
        <Select placeholder='Select state' name='state' onChange={handleChange} value={profile.state}>
          {states.map((state) => {
            return(
              <option key={state} value={state}>{state}</option>
            )
          })}
        </Select>
        {/* <Input name='state' onChange={handleChange} placeholder='State' width='md' /> */}

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