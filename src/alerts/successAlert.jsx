import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SuccessAlert({custom_message}) {
  return (
    <Stack sx={{ width: '100%', mb: 2  }} spacing={2}>
      <Alert variant="filled" severity="success">
        {custom_message}
      </Alert>
    </Stack>
  );
}
