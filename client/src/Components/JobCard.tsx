import React from "react";
import { Card, CardHeader, CardBody, AvatarGroup, Avatar, CardFooter, ButtonGroup, Button, Heading, Divider } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { userAuthAtom, moment } from "../StateManagement/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import SitterJobCardHeader from "./SitterJobCardHeader";
import OwnerJobCardHeader from "./OwnerJobCardHeader";

const JobCard = ({ job, variant }) => {
  const { start_date, end_date } = job
  const [currentUser] = useAtom(userAuthAtom)
  const queryClient = useQueryClient()
  const userPets = currentUser.pets

  //@ts-ignore
  const numberOfDays = Math.abs(new Date(end_date) - new Date(start_date))
  const lengthOfJob = numberOfDays/(1000 * 3600 * 24)

  const deleteJob = useMutation({
    mutationFn: (id) => {
      return axios.delete(`/jobs/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userjobs'] })
    }
  })

  const handleClaimJobBtn = () => {
    
  }

  return (
    <Card size='sm' padding={2} m={4} key={job.id}>
      {currentUser.type === 'Owner' ? 
        <OwnerJobCardHeader job={job} variant={variant} />
        :
        currentUser.type === 'Sitter' ?
          <SitterJobCardHeader job={job} owner={job.owner} />
        :
        null
      }
      <Divider />
      <CardBody>
        {job.description}
      </CardBody>
        {variant === 'requested' ? 
          <CardFooter>
            <ButtonGroup>
              <Button variant='outline' colorScheme="orange" onClick={() => deleteJob.mutate(job.id)}>Delete</Button>
            </ButtonGroup> 
          </CardFooter>
          :
          variant === 'unbooked' ?
            <CardFooter>
              <Button variant='outline' colorScheme="orange">Claim Job</Button>
            </CardFooter>
          // :
          // variant === 'completed' ?
          //   <CardFooter>
          //     <ButtonGroup>
          //       <Button variant='outline' colorScheme="orange">Rate Your Sitter</Button>
          //     </ButtonGroup> 
          //   </CardFooter> 
          :
          null
        }
    </Card>
  )
}

export default JobCard