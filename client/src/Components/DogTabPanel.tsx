import React from "react";
import { TabPanel, Grid } from "@chakra-ui/react";

const DogTabPanel = ({ age, dog }) => {

  return (
    <>
      <TabPanel>
        <Grid>
          
          {dog.name}
        </Grid>
      </TabPanel>
    </>
  )
}

export default DogTabPanel