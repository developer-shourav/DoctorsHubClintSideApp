import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from "../../../../images/chair.png";
import bg from "../../../../images/bg.png";
import { Button, Typography } from '@mui/material';


const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
         <Typography variant='h4'> 
            Your New Smile <br/>
            Starts Here
         </Typography>
         <Typography variant='h6' sx={{fontSize:14, color:'gray', fontWeight:"300"}}> 
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel reiciendis magnam tenetur optio ducimus a nemo, libero ea reprehenderit tempore.
         </Typography>
         <Button variant='contained'>Get Appiontment</Button> 
        </Grid>
        <Grid item xs={12} md={7}>
          <img src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Banner;