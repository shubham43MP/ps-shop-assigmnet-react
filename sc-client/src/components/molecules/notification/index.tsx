import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

type NotificationPropsType = {
  severity: 'error' | 'warning' | 'info' | 'success';
  alertLabel: string
}

const Notification = ({ severity, alertLabel }: NotificationPropsType) => {
  return (
    <>
      <Stack sx={ { width: '100%' } } spacing={ 2 }>
        <Alert severity={ severity }>
          <AlertTitle>{severity}</AlertTitle>
          { alertLabel }
        </Alert>
      </Stack>
    </>
  )
}

export default Notification
