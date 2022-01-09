import React from 'react';
import {Paper, Button} from '@mui/material';
import {makeStyles} from '@mui/styles'
function Action() {
const ActionStyle = makeStyles({
    root:{
        width: '50%',
        height: "auto",
        position:"relative" ,
        top: '60px',
        zIndex: '1',
        backgroundColor:'hsl(193, 100%, 96%) !important',
        textAlign: 'center',
        margin:' 0 auto',
        padding:" 15px",
        borderRadius:" 20px !important"
    }, btn:{
        backgroundColor:'hsl(322, 100%, 66%) !important',
        borderRadius: '30px !important',
        fontSize:' 15px !important',
        width: '250px',
        height: '50px',
       " &:hover":{
           opacity:'0.6' ,
           transitionDuration:'1s ease-in !important',
           transform: 'scale(1.1) !important'
       }
    }
})
const  classes = ActionStyle();
    return (
        <Paper className={classes.root}  >
            <h2>Ready To Build Your Community?</h2>
            <Button className={classes.btn}  variant="contained"   color='secondary'>Get Started For Free</Button>
        </Paper>
    )
}
export default Action