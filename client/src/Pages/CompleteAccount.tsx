import React from "react";
import { Flex, Heading, VStack, Center } from '@chakra-ui/react'
import AcctStepper from "../Components/AcctStepper";

const CompleteAccount = () => {

  return (
   <div>
    <Center>
      <Heading mt={10}>Complete Your Account</Heading>
    </Center>
      <AcctStepper />
   </div>
  )
}

export default CompleteAccount
