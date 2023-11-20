import React from "react";
import { StepIndicator, useSteps, Step, StepStatus, StepIcon, StepNumber, Box, StepTitle, StepDescription, StepSeparator, Stepper, Text, FormControl, VStack, Button, FormLabel, Input, Select } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../app/store";
import { updateField } from "../app/createAcctFormSlice";
import { useUpdateProfileMutation } from "../app/services/profiles";
import { FileUpload } from 'primereact/fileupload';
        

const StepTwo = ({ setActiveStep }) => {
  const user: any = useSelector((state: RootState) => state.reducer.auth)
  const handleClick = (e) => {
    e.preventDefault()

    // updateProfile(form)
    setActiveStep(prev => prev + 1)
  }

  return (
    <div>
      <div className="card">
        <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
      </div>

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

export default StepTwo
