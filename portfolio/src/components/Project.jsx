import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Project.css'
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({

    root: {
        minWidth: 275,
        background: 'none',
        margin: 10+"%",
        padding: '30px',
        boxShadow: '4px 4px grey, -5px -7px green'
        
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
    
});

export default function Project() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        
        <Grid container >
            <Grid item xs={1} lg={2}>
            </Grid>
            <Grid container xs={10} lg={8}>
                
            <Grid item xs={12} lg={6}>
                <Card className={classes.root}>
                    <CardContent className={classes.card}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h3>Shopping Cart</h3>
                            <div className="tags"><small>HTML | CSS | JAVASCRIPT | Reactjs | NODEJS</small></div>
                            <p className="project-desc">A Single page application in Java that incorporates an AI agent which works on minimax algorithm to play against humans. The game is commonly known as Mancala which is a two player turn based strategy game and features perfect information
                                just like chess, tic-tac-toe, or Go. The game is developed using Java and Swing.</p>
                            
                        </Typography>
                        
                    </CardContent>
                    <CardActions  className="btn">
                        <Button size="small" href="https://github.com/kapilchandrawal/React-Cart">Github</Button>
                    </CardActions>
                </Card>
                
            </Grid>
            <Grid item xs={12} lg={6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h3>Color Website</h3>
                            <div class="tags"><small>HTML | CSS</small></div>
                            <p className="project-desc">A website built by using gradient colors.</p>
                            
                        </Typography>
                        
                    </CardContent>
                    <CardActions className="btn">
                        <Button size="small" href="https://github.com/kapilchandrawal/Responsive-website-gradient-color">Github</Button>
                    </CardActions>
                </Card>
                
            </Grid>
            <Grid item xs={12} lg={6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h3>Giphy Search Engine</h3>
                            <div class="tags"><small>HTML | CSS | JAVASCRIPT | Reactjs  </small></div>
                            <p className="project-desc">A GIF search engine that uses the Giphy API to search for the desired GIFs and display them.</p>
                            
                        </Typography>
                        <Typography>

                        </Typography>
                        
                    </CardContent>
                    <CardActions className="btn">
                    <Button size="small" href="https://github.com/kapilchandrawal/Giphy-search-engine">Github</Button>
                        
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h3>Food Bites</h3>
                            <div class="tags" style={{}}><small>HTML | CSS | JAVASCRIPT | Reactjs</small></div>
                            <p className="project-desc">A online food ordering system built as an thesis project. This web application maintains the restaurant's functionality such as add an item to current order, review the order, remove an item, provides payment details and place the orders.</p>
                            
                        </Typography>
                        <Typography>

                        </Typography>
                        
                    </CardContent>
                    <CardActions className="btn">
                        
                    <Button size="small" href="https://github.com/kapilchandrawal/Giphy-search-engine">Github</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            <h3>My Portfolio</h3>
                            <div class="tags"><small>HTML | CSS | MaterialUI | JAVASCRIPT</small></div>
                            <p  className="project-desc">A website built to showcase my portfolio to recruiters.</p>
                            
                        </Typography>
                        <Typography>

                        </Typography>
                        
                    </CardContent>
                    <CardActions className="btn">
                        
                    <Button size="small" href="https://github.com/kapilchandrawal/Giphy-search-engine">Github</Button>
                    </CardActions>
                </Card>
            </Grid>
            </Grid>
            <Grid item xs={1} lg={2}>
                
            </Grid>

        </Grid>


    );
}