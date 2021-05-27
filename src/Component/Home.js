import React from 'react';
import FirstPage from '../Assets/FirstPage.jpg';
import AvatarImage from '../Assets/Avatar.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Grow } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CV from '../Assets/CV.docx';

const useStyles = makeStyles({
  card: {
    height: 500,
  },
  avatar: {
    height: 200,
    width: 200,
  },
  p:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bolder',
    paddingLeft: 20,
    margin: 5,
  },
  p1: {
    position:'absolute',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bolder',
    paddingLeft: '80%',
    margin: '5%',
  },
  button: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    margin: 20,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div >
      <Grid container justify="center">
        <Grid item xs={12}>
          <Card >
            <CardMedia className={classes.card} image={FirstPage}>
                <div className={classes.p1}>
                  <Grow timeout={2500} in="true"><p>Doubt</p></Grow>
                  <Grow timeout={3000} in="true"><p>kills</p></Grow>
                  <Grow timeout={3500} in="true"><p>more dream</p></Grow>
                  <Grow timeout={4000} in="true"><p>than</p></Grow>
                  <Grow timeout={4500} in="true"><p>failer</p></Grow>
                  <Grow timeout={5000} in="true"><p>ever will</p></Grow>             
                </div>
              <Avatar className={classes.avatar} src={AvatarImage} alt="AvatarImage"/>
              <p className={classes.p}>Hamed Danesh</p>
              <p className={classes.p}>Front End Developer</p>
              <Button className={classes.button} variant="contained" color="primary">
                <a class="btn btn-primary aos-init aos-animate" href={CV} data-aos="zoom-in" data-aos-anchor="data-aos-anchor" download="">Download CV</a>
              </Button>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>  
    </div>
  )
}

export default Home
