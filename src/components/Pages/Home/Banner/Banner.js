import React from 'react';
import Grid from '@mui/material/Grid';
import chair from "../../../../images/chair.png";
import bg from "../../../../images/bg.png";
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,
  

}

const verticalCenter = {
    display: "flex",
    height:"450px",
    alignItems:"center"
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bannerBg}>
      <Grid container spacing={2}>

        <Grid item style={{...verticalCenter,textAlign:"left"}} xs={12} md={6}>
         <Box> 
         <Typography variant='h3'> 
            Your New Smile <br/>
            Starts Here
         </Typography>
         <Typography variant='h6' sx={{fontSize:13, color:'gray', fontWeight:"300"}}> 
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel reiciendis magnam tenetur optio ducimus a nemo, libero ea reprehenderit tempore.
         </Typography>
         <Button style={{backgroundColor:"rgb(25 211 176)"}} variant='contained'>Get Appiontment</Button> 
         </Box>
        </Grid>


        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width:"350px"}} src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;