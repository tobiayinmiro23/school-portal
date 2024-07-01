import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function PopUpMessageWithAutoCancel({displayPopUp,popUpMsg,type,duration}) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  React.useEffect(()=>{
   if(displayPopUp) setState({ ...state, open: true });
  },[displayPopUp])
 
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box >
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={duration}
        open={open}
        onClose={handleClose}
        message={popUpMsg}
        key={vertical + horizontal}
      >
        <Alert severity={type} onClose={handleClose}>{popUpMsg}</Alert>
      </Snackbar>
    </Box>
  );
}
