import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../../images/doctor.png";
import bg from "../../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, .85)",
  backgroundBlendMode:"darken, luminosity",
  marginTop: "175px"
};
const AppiontmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={doctor} style={{ width: "400px", marginTop:"-110px" }} alt="DoctorsPhoto" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography style={{color:"#19D3B0"}} variant="h6">Appointment</Typography>

          <Typography  style={{color:"#fff"}} variant="h4">Make an Appointment Today</Typography>
          <Typography   style={{color:"#fff", fontSize:"18px", fontWeight:"300", textAlign:"left"}} variant="h6">It is a long established fact thatareoder will be distractedby the readable content ofapage when looking at its.</Typography>
          <Button variant="contained"> Learn More</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppiontmentBanner;
