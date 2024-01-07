import React from "react";
import { CardHeader, Avatar, Heading } from "@chakra-ui/react";
import { moment } from "../StateManagement/store";

const OwnerJobCardHeader = ({ job, variant }) => {
  const { job_sitter } = job

  return (
    <>
      <CardHeader>
        {variant === 'booked' || variant === 'completed' ?
          <>
            <Avatar size='md' name={job_sitter?.first_name} key={job_sitter?.id} src={job_sitter?.image_url}/>
                
            <Heading color='orange' mt='2' fontSize='xl' >{job_sitter?.first_name} {job_sitter?.last_name} is Your Sitter!</Heading>
          </>
         :
         <>
          <Heading color='orange' fontSize='xl'>No Sitter Booked!</Heading>
         </>
        }

        {moment(job.start_date).format('ll')} – {moment(job.end_date).format('ll')}
      </CardHeader>
    </>
  )
}

export default OwnerJobCardHeader
