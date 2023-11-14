import React from "react";
import { StepIndicator, useSteps, Step, StepStatus, StepIcon, StepNumber, Box, StepTitle, StepDescription, StepSeparator, Stepper, Text, FormControl, VStack, Button, FormLabel, Input, Select } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../app/store";
import { updateField } from "../app/createAcctFormSlice";
import { useUpdateProfileMutation } from "../app/services/profiles";
import StepOne from "./StepOne";

const steps = [
  { title: 'First', description: 'Location' },
  { title: 'Second', description: 'Profile Pic' },
  { title: 'Third', description: 'Add Pet' },
]

const AcctStepper = () => {

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <div>
    <Stepper index={activeStep} padding='10' colorScheme='orange'>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>

    {activeStep === 1 ? <StepOne setActiveStep={setActiveStep} /> :
      activeStep === 2 ? <div>2</div> :
      <div>3</div> }
    </div>
  )
}

export default AcctStepper