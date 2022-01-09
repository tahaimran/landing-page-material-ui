import { Grid, Paper } from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles'

function Features() {
    const featureStyle = makeStyles({
        featureCont:{
            marginTop: '100px',
            margin:' 0 auto'
        },
        img:{
            width: "80%",
            float: 'right'
        },
        innerCont:{
            border:' 2px solid  hsl(193, 100%, 96%)',
            width:' 85% !important',
            padding:' 20px',
            borderRadius: "20px",
            marginBottom: "30px",
            boxShadow: '5px 5px 5px 5px  hsl(193, 100%, 96%)',
            alignItems: 'center',
            flexWrap: 'wrap-reverse !important',
        }
    })

const classes = featureStyle()
    return (
        <Grid container className={classes.featureCont}  sx={{justifyContent: 'center' }} >
            <Grid  container className={classes.innerCont}>
                <Grid item xs={12} sm={6}  >
                    <h2 > Grow Together</h2>
                    <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <img className={classes.img}  src="images/illustration-grow-together.svg" alt="" srcset="" />
                </Grid>
            </Grid>




            <Grid container className={classes.innerCont} >
                <Grid item xs={12} sm={6}>
                    <h2>Flowing Conversations</h2>
                    <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img className={classes.img} src="images/illustration-flowing-conversation.svg" alt="" srcset="" />
                </Grid>
            </Grid>

            <Grid container className={classes.innerCont} >
                <Grid item xs={12} sm={6}>
                    <h2>Your Users</h2>
                    <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img className={classes.img} src="images/illustration-your-users.svg" alt="" srcset="" />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Features
