import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../../images/fluoride.png";
import cavity from "../../../../images/cavity.png";
import whitening from "../../../../images/whitening.png";

const services = [
  {
    name: "Fluride Treatment", 
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ", 
    img:fluoride
  }, 
  {
    name : "Cavity Filling",
    description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries has been the industry's standard dummy ",
    img: cavity
  },
  {
    name :"Teeth Whitening",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap ",
    img : whitening
  }
]


const Services = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
       <Container> 
       <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
            services.map(service => <Service
                                      key={service.name}
                                      service={service}
                                     > </Service>)
          }
        </Grid>
       </Container>
      </Box>
    </div>
  );
};

export default Services;
