import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../../images/doctor.png";
import bg from "../../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";


const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, .85)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: "175px",
};
const AppiontmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={doctor}
            style={{ width: "400px", marginTop: "-110px" }}
            alt="DoctorsPhoto"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", textAlign:"left"}}>
          <Box>
            <Typography sx={{mb:3}} style={{ color: "#19D3B0", textTransform:"uppercase" }} variant="h6">
              Appointment
            </Typography>

            <Typography style={{ color: "#fff" }} variant="h4">
              Make an Appointment Today
            </Typography>
            <Typography
              style={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: "300",
               
              }}
              variant="h6"
              sx={{my:3}}
            >
              It is a long established fact thatareoder will be distracted by the
              readable content ofapage when looking at its.
            </Typography>
            <Button style={{ backgroundColor: "#19D3B0", color:"#fff" }} variant="contained"> Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppiontmentBanner;
