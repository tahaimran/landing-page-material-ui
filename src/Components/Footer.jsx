import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

function Footer() {
    const footerStyles = makeStyles({
        root:{}
    })
const classes = footerStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={3}>

            </Grid>
            <Grid item xs={12} sm={3}>

            </Grid>
            <Grid item xs={12} sm={3}>

            </Grid>
            <Grid item xs={12} sm={3}>

            </Grid>
        </Grid>
    )
}

export default Footer
