import React from 'react'
import Home from './Home';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from '../assets/myimage.JPG'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image:{
        maxWidth : 300,
        borderRadius : 50+"%",
        margin : 25+"px"


    }
}));

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid container >
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                        <div>
                            <img className={classes.image} src={image} alt="Kapil_Chandrawal'sImage"></img>
                        </div>
                        <p>As a computer science student, I&#39;ve worked on several projects both academic as well as for
                            self-learning. These projects cover certain aspects of multiple technologies such as web
                            development and database. This portfolio is one of my
                            projects that was designed as a part of self learning.</p>

                        <p>I am currently seeking exciting internships and full time opportunities after my post graduation
                            in 2020 and would love to connect with you. <br /><br />
                        </p>
                    
          </Grid>
                    <Grid item xs={3}>

                    </Grid>
                
                </Grid>
            




        </div>

           
    )
}
