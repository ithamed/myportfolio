import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  },
  title: {
    flexGrow: 1,
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to='/'>MY PORTFOLIO</Link>
            </Typography>
            <Button color="inherit"><Link className={classes.link} to='/AboutMe'>About Me</Link></Button>
            <Button color="inherit"><Link className={classes.link} to='/Skills'>Skills</Link></Button>
            <Button color="inherit"><Link className={classes.link} to='/Portfolio'>Portfolio</Link></Button>
            <Button color="inherit"><Link className={classes.link} to='/Exprience'>Exprience</Link></Button>
            <Button color="inherit"><Link className={classes.link} to='/Education'>Education</Link></Button>
            <Button color="inherit"><Link className={classes.link} to='/Contact'>Contact</Link></Button>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
}