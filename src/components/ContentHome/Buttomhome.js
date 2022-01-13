import  React from 'react';
//import Button from '@mui/material/Button';
//import SendIcon from '@mui/icons-material/Send';
//import Stack from '@mui/material/Stack';
import "./Buttomhome.css";
import TextField from '@material-ui/core/TextField';

function Buttomhome(){  
  return (
    <div className="Buttomhome" >
      <TextField id="filled-read-only-input" label="Last Login:" defaultValue="8/1/2021" InputProps={{ readOnly: true,}} variant="filled" />
    </div>
  );
}
export default Buttomhome;
// endIcon={<SendIcon />}
/*
  <Stack direction="row" spacing={2}>
        <Button variant="contained"   sx={{ textTransform: 'none',}}>
          Last Login:
        </Button>
      </Stack>
      */