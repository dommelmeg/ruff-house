import React, { useReducer, useState } from "react";
import { useDisclosure, RadioGroup, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Circle, ModalFooter, ButtonGroup, FormControl, VStack, FormLabel, Input, Textarea, Select, HStack, Radio, Alert, UnorderedList, ListItem } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { userAuthAtom, Pet, allDogBreeds } from "../StateManagement/store";
import { useAtom } from "jotai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AddPetModule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const queryClient = useQueryClient()
  const [showError, setShowError] = useState(false)
  const [petError, setPetError] = useState([])

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
      case 'RESET':
        return initialPetState
      default:
        return state
    }
  }

  const [petFormState, dispatch] = useReducer(petFormReducer, initialPetState)

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userpets'] })
      queryClient.invalidateQueries({ queryKey: ['userjobs'] })
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
            {showError && 
              <Alert status='error' rounded='10'>
                <UnorderedList>
                {petError.map((error) => {
                  return (
                    <ListItem>{error}!</ListItem>
                    )
                  })}
                </UnorderedList>
              </Alert>
            }
            <FormControl>
              <VStack align='left'>
                <FormLabel mt='2'>Name</FormLabel>
                <Input
                  type='name'
                  name='name'
                  value={petFormState.name}
                  onChange={handleInputChange}
                />

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

                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type='date'
                  name='birth_date'
                  value={petFormState.birth_date}
                  onChange={handleInputChange}
                />

                <FormLabel>Weight (in lbs.)</FormLabel>
                <Input
                  type='number'
                  name='weight'
                  value={petFormState.weight}
                  onChange={handleInputChange}
                />

                <FormLabel marginTop='2'>Breed</FormLabel>
                <Select placeholder='Select breed' name='breed' onChange={handleSelectInputChange} >
                  {allDogBreeds.map((breed) => {
                    return(
                      <option key={breed.id} value={breed.name}>{breed.name}</option>
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

              </VStack>
            </FormControl>
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