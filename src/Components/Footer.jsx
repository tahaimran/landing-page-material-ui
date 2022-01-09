import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { LocationOn, PhoneInTalk, Email, Facebook, Instagram, Twitter } from '@mui/icons-material'
function Footer() {
    const footerStyles = makeStyles({
        root: {
            backgroundColor: " hsl(192, 100%, 9%)",
            color: 'hsl(193, 100%, 96%) !important',
            padding: '80px 20px 25px  20px  !important',
        },
        img: {
            filter: "invert()",
            marginBottom: "10px"
        }, icon: {
            color: 'white !important',
        }, span: {
            justifyContent:'end  !important', display:'flex !important'
        }
    })
const classes = footerStyles();
return (
    <Grid container className={classes.root}>
        <img className={classes.img} src="images/logo.svg" alt="" srcset="" />
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <List>
                    <ListItem >
                        <ListItemIcon className={classes.icon} >
                            <LocationOn />
                        </ListItemIcon>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</ListItem>
                    <ListItem>
                        <ListItemIcon className={classes.icon}>
                            <PhoneInTalk />
                        </ListItemIcon>
                        +1-543-123-4567</ListItem>
                    <ListItem>
                        <ListItemIcon className={classes.icon}>
                            <Email />
                        </ListItemIcon>
                        example@huddle.com
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={2}>
                <List>
                    <ListItem>
                        <ListItemText>About Us</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>What We Do</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>FAQ</ListItemText>
                    </ListItem>

                </List>
            </Grid>
            <Grid item xs={12} sm={3}>
                <List>
                    <ListItem>
                        <ListItemText>Career</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Blog</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItem>

                </List>
            </Grid>
            <Grid item xs={12} sm={1} >
                <List >
                    <ListItem>
                        <ListItemIcon><Facebook /></ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Instagram /></ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Twitter /></ListItemIcon>
                    </ListItem>

                </List>
            </Grid>
        </Grid>
        <Grid item sx={{flexGrow:'1', marginTop:'85px'}}>
        <span sx={{justifyContent:'end  !important', display:'flex !important'}}  className={classes.span}>© Copyright 2018 Huddle. All rights reserved.</span>
        </Grid>
    </Grid>

)
}

export default Footer
