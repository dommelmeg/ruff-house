import React from "react";
import { CardHeader, AvatarGroup, Avatar, Heading, Text } from "@chakra-ui/react";
import { moment } from "../StateManagement/store";

const SitterJobCardHeader = ({ job, owner }) => {
  const { job_pets } = job

  return (
    <>
      <CardHeader>
        <Text fontSize='xs'><b>REQUESTED BY {owner.username.toUpperCase()}</b></Text>
        <AvatarGroup size='sm' max={2} mt={2}>
          {job_pets?.map((dog) => {
            return (
            <Avatar name={dog.name} key={dog.id} src={dog.image_url}/>
            )
          })}
        </AvatarGroup>
        <Heading color='orange' mt='2' fontSize='2xl' >{owner?.last_name} Doggos</Heading>
        {moment(job.start_date).format('ll')} – {moment(job.end_date).format('ll')}
      </CardHeader>
    </>
  )
}

export default SitterJobCardHeader
