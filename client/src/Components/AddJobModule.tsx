import React, { useReducer, useState } from "react";
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Circle, ModalFooter, ButtonGroup, FormControl, VStack, FormLabel, Input, Textarea, Alert, UnorderedList, ListItem } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Job } from "../StateManagement/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AddJobModule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const queryClient = useQueryClient()
  const [showError, setShowError] = useState(false)
  const [jobError, setJobError] = useState([])

  const initialJobState: Job = {
    id: null,
    start_date: '',
    end_date: '',
    description: '',
    owner_id: null,
    sitter_id: null,
  }

  const jobFormReducer = (state, action) => {
    switch (action.type) {
      case 'HANDLE INPUT TEXT':
        return {
          ...state,
          [action.field]: action.payload,
        }
      case 'RESET':
        return initialJobState
      default:
        return state
    }
  }

  const [jobFormState, dispatch] = useReducer(jobFormReducer, initialJobState)

  const handleInputChange = (e) => {
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleClose = () => {
    onClose()
    setShowError(false)
    
    dispatch({
      type: 'RESET'
    })
  }

  const createJobRequest = useMutation({
    mutationFn: (newJob) => {
      return axios.post('/jobs', newJob)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userjobs'] })
      handleClose()
    }, 
    onError: (error) => {
      setShowError(true)
      //@ts-ignore response is on error
      setJobError(error.response.data.errors)
    }
  })

  const handleSubmitRequest = (e) => {
    e.preventDefault()
    createJobRequest.mutate(jobFormState)
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
          <ModalHeader>Create a Job Request</ModalHeader>
          <ModalCloseButton onClick={handleClose} />

          <ModalBody>
          {showError && 
            <Alert status='error' rounded='10'>
              <UnorderedList>
              {jobError.map((error) => {
                return (
                  <ListItem>{error}!</ListItem>
                  )
                })}
              </UnorderedList>
            </Alert>
          }
            <FormControl>
              <VStack align='left'>
                <FormLabel>Start Date</FormLabel>
                <Input
                  type='date'
                  name='start_date'
                  value={jobFormState.start_date}
                  onChange={handleInputChange}
                />

                <FormLabel mt='2'>End Date</FormLabel>
                <Input
                  type='date'
                  name='end_date'
                  value={jobFormState.end_date}
                  onChange={handleInputChange}
                />

                <FormLabel mt='2'>Description</FormLabel>
                <Textarea
                  name='description'
                  value={jobFormState.description}
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
              >Submit Request</Button>
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

export default AddJobModule