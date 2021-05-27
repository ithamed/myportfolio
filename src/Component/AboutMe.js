import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5),
        width: theme.spacing(60),
        height: theme.spacing(95),
      },
    },
    paper: {
      padding: theme.spacing(3),
    },
    span: {
      paddingLeft: theme.spacing(5),
    }
  }),
);

function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slide timeout={1500} direction="up" in={true} mountOnEnter unmountOnExit>
        <Paper className={classes.paper} elevation={6}>
        <h3>About Me</h3>
        <p>I am Hamed. I am addicted to challenge myself and learn new things in my life, in my work and in every fields.I am very hard worker and tried to achieve every goals that i had in my life. I love learning new things and sports and tarvel. </p>
        <p>I am a web developer and i realize every things in your mind and turn them into a real website so if you have an idea and want to implement that or if you have already a website and you want to add somthing to it or make it more efficient or faster then feel free and contact me.</p>
        <p>i have exprience in many diffrent fields actually i started with mechanical engineering and i studied bachlor of that field and i have also two years work exprience in it and after that i studied master of Bussiness Administration and worked as an accountant and after that financial manager for eight years but it can not satisfied me, i always liked coding and when i come to netherlands i had a chance to go through this field and this make me happy and i made progress in this field every day.</p>
        <p>These are my competencies:</p>
        <p>A team player, can work and make decisions under stress, loves challenges, has a sense of responsibility and can stimulate others to get the best out of themselves.</p>
        <p>If you want to know more about me feel free and use my information in right side of the page and make contact with me.</p>
        </Paper>
      </Slide>
      <Slide timeout={3000} direction="up" in={true} mountOnEnter unmountOnExit>
        <Paper className={classes.paper} elevation={6}>
        <h3>Basic information</h3>
        <p><MailIcon color="primary"/><span className={classes.span}>daneshhamed@yahoo.com</span></p>
        <p><PhoneIcon color="primary"/><span className={classes.span}>(+31)685178087</span></p>
        <p><HomeIcon color="primary"/><span className={classes.span}>Vlaardingen, Netherlands</span></p>
        <p><LanguageIcon color="primary"/><span className={classes.span}>English, Dutch, Persian(Farsi)</span></p>
        </Paper>
      </Slide>
    </div>
  )
}

export default AboutMe
