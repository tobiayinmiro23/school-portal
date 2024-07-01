import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function PositionedSnackbar({noticeMessage}) {
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box sx={{ width: 500}}>
      <Snackbar
      sx={{boxShadow:'0px 0px 2px 0px #252222'}}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message={noticeMessage}
        key={vertical + horizontal}
      >
         <Alert severity="warning" onClose={handleClose}>
            {noticeMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
