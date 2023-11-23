import React from "react";
import { Text, Button } from '@chakra-ui/react'
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