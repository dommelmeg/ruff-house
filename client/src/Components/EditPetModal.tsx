import React, { useReducer, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, VStack, FormLabel, Input, ModalFooter, ButtonGroup, Button, useDisclosure, IconButton, Select, NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, Alert } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { states, userAuthAtom } from "../StateManagement/store";
import { useAtom } from "jotai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const EditPetModal = ({ pet }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)
  const queryClient = useQueryClient()
  const { image_url } = pet
  const [imageError, setImageError] = useState('')
  const [showImageError, setShowImageError] = useState(false)

  const initialEditPetState = {
    image_url: image_url
  }

  const editPetFormReducer = (state, action) => {
    switch (action.type) {
      case 'HANDLE INPUT TEXT':
        return {
          ...state,
          image_url: action.payload,
        }
      case 'RESET':
        return initialEditPetState
      default:
        return state
    }
  }

  const [petFormState, dispatch] = useReducer(editPetFormReducer, initialEditPetState)

  const handleClose = () => {
    onClose()
    setShowImageError(false)
    dispatch({ type: 'RESET' })
  }

  const handleInputChange = (e) => {
    setShowImageError(false)
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: image_url,
      payload: e.target.value,
    })
  }

  const editPet = useMutation({
    mutationFn: (editedPet) => {
      return axios.patch(`/pets/${pet.id}`, editedPet)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userpets'] })
      queryClient.invalidateQueries({ queryKey: ['userjobs'] })
    }
  })

  const isImageUrl = (url) => {
    const urlRegex = /^http.+(png|jpeg|gif|jpg)$/
    const testResult = urlRegex.test(url)
    // Check if the URL matches the regex
    if (!testResult) {
      setImageError('Image URL must begin with http and end .png, .jpeg, .gif, or .jpg.')
      return false;
    } else {
      return true
    }
  }

  const handleFormSubmitClick = (e) => {
    e.preventDefault()
    console.log(petFormState.image_url)

    const { image_url: image } = petFormState
    const isValidUrl = isImageUrl(image)

    if (isValidUrl) {
      editPet.mutate(petFormState)
      handleClose()
    } else {
      setShowImageError(true)
    }
  }

  return (
    <>
      <IconButton
        variant='ghost'
        aria-label="edit user"
        icon={<EditIcon />}
        onClick={onOpen}
      />

    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} colorScheme="orange">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Your Profile</ModalHeader>
        <ModalCloseButton onClick={handleClose} />

        <ModalBody>
          <FormControl>
            <VStack align='left'>
              <FormLabel mt='2'>Profile Picture</FormLabel>
              <Input
                type='text'
                name='image_url'
                placeholder={image_url}
                value={petFormState.image_url}
                onChange={handleInputChange}
              />
            </VStack>
          </FormControl>
          {showImageError && <Alert mt='2' rounded='10' status='error'>{imageError}</Alert>}
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button 
              colorScheme="orange" 
              onClick={handleFormSubmitClick}
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

export default EditPetModal