import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { LocationOn, PhoneInTalk, Email, Facebook, Instagram, Twitter } from '@mui/icons-material'
function Footer() {
    const footerStyles = makeStyles({
        root: {}
    })
    const classes = footerStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={3}>
            <img src="images/logo.svg" alt="" srcset="" />
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <LocationOn />
                        </ListItemIcon>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalk />
                        </ListItemIcon>
                        +1-543-123-4567</ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        example@huddle.com</ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={3}>
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
            <Grid item xs={12} sm={3} >
            <List sx={{display : 'flex' }}>
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
    )
}

export default Footer
