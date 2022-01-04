import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

interface IBackropComponentProps {
  open: boolean;
  children: React.ReactNode
}

export default function BackdropComponent({
  open = false,
  children
}: IBackropComponentProps) {
  return (
    <>
      <Backdrop
        sx={ { zIndex: (theme) => theme.zIndex.drawer + 1 } }
        open={ open }
      >
        { children }
      </Backdrop>
    </>
  );
}