import React from 'react';
import {Paper, Button} from '@mui/material';
import {makeStyles} from '@mui/styles'
function Action() {
const ActionStyle = makeStyles({
    root:{
        width: '50%',
        height: "150px",
        position:"relative" ,
        top: '60px',
        zIndex: '1',
        backgroundColor:'hsl(193, 100%, 96%) !important',
        textAlign: 'center',
        margin:' 0 auto',
        padding:" 15px",
        borderRadius:" 20px !important"
    }
})
const  classes = ActionStyle();
    return (
        <Paper className={classes.root}  >
            <h2>Ready To Build Your Community?</h2>
            <Button variant="contained"   color='secondary'>Get Started For Free</Button>
        </Paper>
    )
}
export default Action