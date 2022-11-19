import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ProgressBar from "@ramonak/react-progress-bar";
import Typography from '@mui/material/Typography';

export default function StockDetails({ fuelStation }) {

  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Typography mt={2} variant="h6" gutterBottom>
        Petrol {fuelStation.fuelStationId.rpstock}L remaining of {fuelStation.fuelStationId.pstock}L
      </Typography>
      <ProgressBar completed={fuelStation.fuelStationId.pstock > 0 ? Math.floor((fuelStation.fuelStationId.rpstock / fuelStation.fuelStationId.pstock) * 100) : 0} bgColor='#00897b' />
      <Typography mt={2} variant="h6" gutterBottom>
        Diesel {fuelStation.fuelStationId.rdstock}L remaining of {fuelStation.fuelStationId.dstock}L
      </Typography>
      <ProgressBar completed={fuelStation.fuelStationId.dstock > 0 ? Math.floor((fuelStation.fuelStationId.rdstock / fuelStation.fuelStationId.dstock) * 100) : 0} bgColor='#00897b' />
    </Box>
  );
}
