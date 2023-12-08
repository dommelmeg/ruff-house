import React from "react";
import { Card, CardHeader, CardBody, AvatarGroup, Avatar, CardFooter, ButtonGroup, Button, Heading } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { userAuthAtom, moment } from "../StateManagement/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const JobCard = ({ job, variant }) => {
  const { start_date, end_date } = job
  const [currentUser] = useAtom(userAuthAtom)
  const queryClient = useQueryClient()
  const userPets = currentUser.pets
  console.log(userPets)

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
  console.log(currentUser)

  return (
    <Card size='sm' padding={2} m={4} key={job.id}>
      <CardHeader>
        {currentUser.pets?.length > 1 ? 
        <Heading>{currentUser.last_name} Doggos</Heading>
        :
        null
      }
        
        {moment(job.start_date).format('ll')} - {moment(job.end_date).format('ll')}
      </CardHeader>
      <CardBody>
        {job.description}
          {/* {variant === 'booked' || 'completed' && <Avatar size='sm' name={job.job_sitter.first_name} src={job.job_sitter.image_url} />} */}
          <AvatarGroup size='sm' max={2} mt={2}>
            {userPets?.map((dog) => {
              return (
                <Avatar name={dog.name} key={dog.id} src={dog.image_url}/>
                )
              })}
          </AvatarGroup>
      </CardBody>
        {variant === 'requested' ? 
          <CardFooter>
            <ButtonGroup>
              <Button variant='outline' colorScheme="orange" onClick={() => deleteJob.mutate(job.id)}>Delete</Button>
            </ButtonGroup> 
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