import  React from 'react';
//import Button from '@mui/material/Button';
//import SendIcon from '@mui/icons-material/Send';
//import Stack from '@mui/material/Stack';
import TextField from '@material-ui/core/TextField';
import "./Tophome.css";

function Tophome(){ 
  return (
    <div className="Tophome" >
      <TextField id="filled-read-only-input" label="Last Purchase:" defaultValue="4/1/2021" InputProps={{ readOnly: true,}} variant="filled" style={{marginBottom: `10px`,}} />
      <TextField id="filled-read-only-input" label="Last Sale:" defaultValue="2/1/2021" InputProps={{ readOnly: true,}} variant="filled" />
    </div>
  );
}
export default Tophome;
//icons: endIcon={<SendIcon />}
/*
<TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
*/
//import TextField from '@mui/material/TextField';
/*
button
<Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" sx={{ textTransform: 'none',}} >
          Last Purchase:
        </Button>
        <Button variant="contained" color="error" sx={{ textTransform: 'none',}} >
          Last Sale:
        </Button>
      </Stack>
      */