import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type NotificationPropsType = {
  severity: 'error' | 'warning' | 'info' | 'success';
  alertLabel: string;
  handleClose: () => void;
  open: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={ 6 } ref={ ref } variant="filled" { ...props } />;
});

const Notification = ({
  severity,
  alertLabel,
  handleClose,
  open
}: NotificationPropsType) => {
  return (
    <>
      <Stack spacing={ 2 } sx={ { width: '100%' } }>
        <Snackbar open={ open } autoHideDuration={ 3000 } onClose={ handleClose }>
          <Alert onClose={ handleClose } severity={ severity } sx={ { width: '100%', fontSize: '1.1rem' } }>
            {alertLabel}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  )
}

export default Notification
