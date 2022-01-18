import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

interface IBackropComponentProps {
  open: boolean;
  children: React.ReactNode;
  handleClose?: () => void;
}

export default function BackdropComponent({
  open = false,
  children,
  handleClose
}: IBackropComponentProps) {
  return (
    <>
      <Backdrop
        sx={ { zIndex: (theme) => theme.zIndex.drawer + 1 } }
        open={ open }
        onClick={ handleClose }
      >
        { children }
      </Backdrop>
    </>
  );
}