import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function CircularLoader() {
  return (
    <>
      <Stack sx={ { color: 'grey.500' } } spacing={ 2 } direction="row">
        <CircularProgress color="primary" />
      </Stack>
    </>
  )
}

export default CircularLoader
