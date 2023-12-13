import React, { useReducer, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, VStack, FormLabel, Input, ModalFooter, ButtonGroup, Button, useDisclosure, IconButton, Select, NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, Alert } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { states, userAuthAtom } from "../StateManagement/store";
import { useAtom } from "jotai";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const EditProfileModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)
  const { first_name, last_name, city, state, image_url, daily_rate } = currentUser
  const [imageError, setImageError] = useState('')
  const [showImageError, setShowImageError] = useState(false)

  const initialEditProfileState = {
    first_name: first_name,
    last_name: last_name,
    city: city,
    state: state,
    image_url: image_url,
    daily_rate: daily_rate
  }

  const editProfileFormReducer = (state, action) => {
    switch (action.type) {
      case 'HANDLE INPUT TEXT':
        return {
          ...state,
          [action.field]: action.payload,
        }
      case 'HANDLE SELECT INPUT':
        return {
          ...state,
          state: action.payload
        }
      case 'HANDLE NUMBER INPUT':
        return {
          ...state,
          daily_rate: action.payload
        }
      case 'RESET':
        return initialEditProfileState
      default:
        return state
    }
  }

  const [profileFormState, dispatch] = useReducer(editProfileFormReducer, initialEditProfileState)

  const handleClose = () => {
    onClose()
    setShowImageError(false)
    dispatch({ type: 'RESET' })
  }
  
  const handleInputChange = (e) => {
    setShowImageError(false)
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value,
    })
  }
  
  const handleSelectChange = (e) => {
    dispatch({
      type: 'HANDLE SELECT INPUT',
      field: 'state',
      payload: e.target.value,
    })
  }
  
  const editProfile = useMutation({
    mutationFn: (editedProfile) => {
      return axios.patch(`/profiles/${currentUser.id}`, editedProfile)
      .then((r) => setCurrentUser(r.data))
    }
  })

  const isImageUrl = (url) => {
    const urlRegex = /^http.+(png|jpeg|gif|jpg)$/
    const testResult = urlRegex.test(url)
    // Check if the URL matches the regex
    if (!testResult) {
      setImageError('Image URL is not valid')
      return false;
    } else {
      return true
    }
  }

  const handleFormSubmitClick = (e) => {
    e.preventDefault()

    const { image_url } = profileFormState
    const isValidUrl = isImageUrl(image_url)

    if (isValidUrl) {
      editProfile.mutate(profileFormState)
      handleClose()
    } else {
      setShowImageError(true)
    }
  }
  
  const handleNumberInput = (e) => {
    dispatch({
      type: 'HANDLE NUMBER INPUT',
      field: 'daily_rate',
      payload: e
    })
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
              <FormLabel mt='2'>First Name</FormLabel>
              <Input
                type='text'
                name='first_name'
                placeholder={first_name}
                value={profileFormState.first_name}
                onChange={handleInputChange}
                />

              <FormLabel>Last Name</FormLabel>
              <Input
                type='text'
                name='last_name'
                value={profileFormState.last_name}
                placeholder={last_name}
                onChange={handleInputChange}
                />

              <FormLabel>City</FormLabel>
              <Input
                type='text'
                name='city'
                placeholder={city}
                value={profileFormState.city}
                onChange={handleInputChange}
              />

              <FormLabel marginTop='2'>State</FormLabel>
              <Select 
                defaultValue={state || 'Select state'} 
                name='state' 
                onChange={handleSelectChange} >
                {states.map((state) => {
                  return(
                    <option key={state} value={state}>{state}</option>
                    )
                  })}
              </Select>

              <FormLabel mt='2'>Profile Picture</FormLabel>
              <Input
                type='text'
                name='image_url'
                placeholder={image_url}
                value={profileFormState.image_url}
                onChange={handleInputChange}
              />
              {currentUser.type === 'Sitter' && 
              <>
                <FormLabel mt='2'>Daily Rate</FormLabel>
                <NumberInput
                  onChange={handleNumberInput}
                >
                  <NumberInputField 
                    value={profileFormState.daily_rate}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </>
                  }
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

export default EditProfileModal
