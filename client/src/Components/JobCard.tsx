import React from "react";
import { Card, CardHeader, CardBody, AvatarGroup, Avatar, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { userAuthAtom, User } from "../StateManagement/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const JobCard = ({ job }) => {
  const [currentUser, setCurrentUser] = useAtom<User>(userAuthAtom)
  const userPets = currentUser.pets
  const queryClient = useQueryClient()

  const deleteJob = useMutation({
    mutationFn: (id) => {
      return axios.delete(`/jobs/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userjobs'] })
    }
  })

  const handleDeleteButton = () => {
    deleteJob.mutate(job.id)
  }

  return (
    <Card size='sm' padding={2} m={4} key={job.id}>
      <CardHeader>
        {job.start_date} - {job.end_date}
      </CardHeader>
      <CardBody>
        {job.description}
        <AvatarGroup size='sm' max={2} mt={2}>
          {userPets?.map((dog) => {
            return (
              <Avatar name={dog.name} key={dog.id}/>
            )
          })}
        </AvatarGroup>
      </CardBody>
      <CardFooter>
        {currentUser.type === 'Owner' && 
          <ButtonGroup>
            <Button variant='outline' colorScheme="orange">Edit</Button>
            <Button variant='outline' colorScheme="orange" onClick={handleDeleteButton}>Delete</Button>
          </ButtonGroup> 
        }
      </CardFooter>
    </Card>
  )
}

export default JobCard