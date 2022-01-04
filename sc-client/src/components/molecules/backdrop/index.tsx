import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface IBackropComponentProps {
  open: boolean;
}

export default function BackdropComponent({
  open = false
}: IBackropComponentProps) {
  return (
    <>
      <Backdrop
        sx={ { color: '#f58722', zIndex: (theme) => theme.zIndex.drawer + 1 } }
        open={ open }
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}