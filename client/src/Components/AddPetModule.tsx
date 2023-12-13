import React, { useReducer, useState } from "react";
import { useDisclosure, RadioGroup, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Circle, ModalFooter, ButtonGroup, FormControl, VStack, FormLabel, Input, Textarea, Select, HStack, Radio, Alert, UnorderedList, ListItem, NumberInput, NumberDecrementStepper, NumberIncrementStepper, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Pet, allDogBreeds, userAuthAtom } from "../StateManagement/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";

const AddPetModule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const queryClient = useQueryClient()
  const [showError, setShowError] = useState(false)
  const [petError, setPetError] = useState([])
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)

  const initialPetState: Pet = {
    id: null,
    name: '',
    gender: '',
    birth_date: '',
    breed: '',
    bio: '',
    weight: null,
    owner_id: null,
    image_url: '',
  }

  const petFormReducer = (state, action) => {
    switch (action.type) {
      case 'HANDLE INPUT TEXT':
        return {
          ...state,
          [action.field]: action.payload,
        }
      case 'HANDLE SELECT INPUT':
        return {
          ...state,
          breed: action.payload
        }
      case 'HANDLE RADIO CHANGE':
        return {
          ...state,
          gender: action.payload
        }
      case 'HANDLE NUMBER INPUT':
        return {
          ...state,
          weight: action.payload
        }
      case 'RESET':
        return initialPetState
      default:
        return state
    }
  }

  const [petFormState, dispatch] = useReducer(petFormReducer, initialPetState)

  const handleNumberInput = (e) => {
    dispatch({
      type: 'HANDLE NUMBER INPUT',
      field: 'weight',
      payload: e,
    })
  }

  const handleInputChange = (e) => {
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value,
    })
  }

  const handleSelectInputChange = (e) => {
    dispatch({
      type: 'HANDLE SELECT INPUT',
      field: 'breed',
      payload: e.target.value,
    })
  }

  const handleRadioChange = (e) => {
    dispatch({
      type: 'HANDLE RADIO CHANGE',
      field: 'gender',
      payload: e,
    })
  }

  const handleClose = () => {
    onClose()
    setShowError(false)
    
    dispatch({
      type: 'RESET'
    })
  }

  const createPet = useMutation({
    mutationFn: (newPet) => {
      return axios.post('/pets', newPet)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['userpets'] })
      queryClient.invalidateQueries({ queryKey: ['userjobs'] })
      setCurrentUser(prevState => ({ ...prevState, pets: [ ...prevState.pets, data.data ] }))
      handleClose()
    },
    onError: (error) => {
      setShowError(true)
      //@ts-ignore response is on error
      setPetError(error.response.data.errors)
    }
  })

  const handleSubmitRequest = (e) => {
    e.preventDefault()
    createPet.mutate(petFormState)
  }

  return (
    <>
      <Circle 
        cursor='pointer'
        size='40px' 
        bg='gray' 
        color='white' 
        onClick={onOpen}
      >
        <AddIcon />
      </Circle>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} colorScheme="orange">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Doggo</ModalHeader>
          <ModalCloseButton onClick={handleClose} />

          <ModalBody>
              <VStack align='left'>
                <FormControl isRequired>
                  <FormLabel mt='2'>Name</FormLabel>
                  <Input
                    type='name'
                    name='name'
                    value={petFormState.name}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl as='fieldset' isRequired>
                  <FormLabel as='legend' marginTop='4'>
                    Gender:
                  </FormLabel>
                  <RadioGroup 
                    defaultValue='female' 
                    onChange={handleRadioChange} 
                    colorScheme='orange'
                    >
                    <HStack spacing='24px'>
                      <Radio type='type' name='female' value='Female'>Female</Radio>
                      <Radio type='type' name='male' value='Male'>Male</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              <FormControl>
                <FormLabel mt='2'>Date of Birth</FormLabel>
                <Input
                  type='date'
                  name='birth_date'
                  value={petFormState.birth_date}
                  onChange={handleInputChange}
                />

                <FormLabel mt='2'>Weight (in lbs.)</FormLabel>
                  <NumberInput
                    onChange={handleNumberInput}
                    >
                    <NumberInputField 
                      value={petFormState.weight}
                      />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                <FormLabel marginTop='2'>Breed</FormLabel>
                <Select placeholder='Select breed' name='breed' onChange={handleSelectInputChange} >
                  <option value={'Mixed Breed'}>Mixed Breed</option>
                  <option value={'Other'}>Other</option>
                  {allDogBreeds.map((breed) => {
                    return(
                      <option key={breed.name} value={breed.name}>{breed.name}</option>
                    )
                  })}
                </Select>

                <FormLabel mt='2'>Profile Picture</FormLabel>
                <Input
                  type='text'
                  name='image_url'
                  value={petFormState.image_url}
                  onChange={handleInputChange}
                />

                <FormLabel mt='2'>Bio</FormLabel>
                <Textarea
                  name='bio'
                  placeholder='Tell us more about your 4-legged friend!'
                  value={petFormState.description}
                  onChange={handleInputChange}
                  />

            </FormControl>
              </VStack>
            {showError && 
              <Alert status='error' rounded='10' mt='2'>
                <UnorderedList>
                {petError.map((error) => {
                  return (
                    <ListItem key={error}>{error}!</ListItem>
                    )
                  })}
                </UnorderedList>
              </Alert>
            }
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button 
                colorScheme="orange" 
                onClick={handleSubmitRequest}
              >
                Save
              </Button>
              <Button variant='ghost' mr={3} onClick={handleClose}>
                Cancel
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddPetModule
