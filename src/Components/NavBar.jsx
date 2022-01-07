import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {makeStyles} from '@mui/styles'


export default function ButtonAppBar() {
    const useStyles  = makeStyles ({
        root:{
            backgroundColor: 'inherit !important',
            boxShadow: 'none !important',
            padding: '20px'
        },
        buttonStyle:{
            backgroundColor: 'white !important',
            color: 'black  !important',
            borderRadius:"30px !important",
            width:"160px",
        }
    });
const classes = useStyles();
  return (
      <AppBar className={classes.root}  position="static">
        <Toolbar>
          <Typography variant="img" component="div" sx={{ flexGrow: 1 }}>
            <img src="/images/logo.svg" alt="" />
          </Typography>
          <Button className={classes.buttonStyle}  variant="contained">Try It Free </Button>
        </Toolbar>
      </AppBar>
  );
}