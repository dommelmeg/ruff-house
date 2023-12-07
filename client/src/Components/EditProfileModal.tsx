import React, { useReducer } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, VStack, FormLabel, Input, RadioGroup, HStack, Radio, Textarea, ModalFooter, ButtonGroup, Button, useDisclosure, IconButton, Select } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { states, userAuthAtom } from "../StateManagement/store";
import { useAtom } from "jotai";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const EditProfileModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const [currentUser, setCurrentUser] = useAtom(userAuthAtom)
  const { first_name, last_name, city, state, image_url } = currentUser

  const initialEditProfileState = {
    first_name: first_name,
    last_name: last_name,
    city: city,
    state: state,
    image_url: image_url
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
      case 'RESET':
        return initialEditProfileState
      default:
        return state
    }
  }

  const [profileFormState, dispatch] = useReducer(editProfileFormReducer, initialEditProfileState)

  const handleClose = () => {
    onClose()
    
    dispatch({
      type: 'RESET'
    })
  }
  
  
  const handleInputChange = (e) => {
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
      .then((r) => {
        setCurrentUser(r.data)
      })
    }
  })

  const handleFormSubmitClick = (e) => {
    e.preventDefault()

    editProfile.mutate(profileFormState)
    handleClose()
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
            </VStack>
          </FormControl>
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
