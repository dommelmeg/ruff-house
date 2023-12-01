import React from "react";
import { StepIndicator, useSteps, Step, StepStatus, StepIcon, StepNumber, Box, StepTitle, StepDescription, StepSeparator, Stepper } from '@chakra-ui/react'
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const ownerSteps = [
  { title: 'First', description: 'Location' },
  { title: 'Second', description: 'Profile Pic' },
  { title: 'Third', description: 'Add a Doggo' },
]

const sitterSteps = [
  { title: 'First', description: 'Location' },
  { title: 'Second', description: 'Profile Pic' },
  { title: 'Third', description: 'Set Your Rate' },
]

const AcctStepper = () => {

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: 3,
  })

  return (
    <div>
    <Stepper index={activeStep} padding='10' colorScheme='orange'>
      {ownerSteps.map((step, index) => (
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
      activeStep === 2 ? <StepTwo setActiveStep={setActiveStep} /> :
      <StepThree /> }
    </div>
  )
}

export default AcctStepper