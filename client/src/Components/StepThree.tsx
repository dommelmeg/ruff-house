import React from "react";
import { StepIndicator, useSteps, Step, StepStatus, StepIcon, StepNumber, Box, StepTitle, StepDescription, StepSeparator, Stepper, Text, FormControl, VStack, Button, FormLabel, Input, Select } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const StepThree = () => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()

    navigate('/')
  }

  return (
    <div>
      <Text>Add a Doggo</Text>

      <Button 
        colorScheme='orange' 
        variant='outline' 
        rounded='3xl'
        marginTop='2'
        onClick={handleClick}
        >
        Next: Add a Doggo
      </Button>
    </div>
  )
}

export default StepThree