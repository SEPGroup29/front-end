import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ProgressBar from "@ramonak/react-progress-bar";
import Typography from '@mui/material/Typography';




export default function LinearWithValueLabel() {

  return (
    <Box sx={{ flexGrow: 1, p: 5}}>
      <Typography mt={2} variant="h6" gutterBottom>
        Petrol
      </Typography>
      <ProgressBar completed={40} bgColor= '#00897b'/>
      <Typography mt={2} variant="h6" gutterBottom>
        Diesel
      </Typography>
      <ProgressBar completed={60} bgColor= '#00897b'/>
    </Box>
  );
}
