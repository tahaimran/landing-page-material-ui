import React from 'react'
import { Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ButtonAppBar from './NavBar'

function Main() {
    const mainStyles = makeStyles({
        root: {
            backgroundImage: 'url(images/bg-hero-desktop.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'hsl(193, 100%, 96%)'

        },
        mainGrid: {
            margin: "40px auto  !important"
        },
        img: {
            width: ' 90%'
        },
        infoText: {
            padding: "50px !important",
        },
        btn: {
            backgroundColor: 'hsl(322, 100%, 66%) !important',
            borderRadius: '30px !important',
            fontSize: ' 15px !important',
            width: '250px',
            height: '50px',
            " &:hover": {
                opacity: '0.6',
                transitionDuration: ' all 1s ease-in !important',
                transform: 'scale(1.1) !important'
            }
        }
    })
    const classes = mainStyles();
    return (
        <>
            <Grid container className={classes.root}>
                <ButtonAppBar />
                <Grid sx={{ justifyContent: 'center', flexWrap: 'wrap-reverse' }} className={classes.mainGrid} container spacing={2}>
                    <Grid item xs={12} sm={6} className={classes.infoText} >
                        <h1> Build The Community Your Fans Will Love </h1>
                        <p> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
                        <Button className={classes.btn} variant="contained" >Get Started For Free</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img className={classes.img} src="images/illustration-mockups.svg" alt="" srcset="" />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Main
