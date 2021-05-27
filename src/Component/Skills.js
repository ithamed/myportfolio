import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Progress from './Progress';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(7),
        padding: theme.spacing(3),
        width: theme.spacing(50),
        height: theme.spacing(55),
      },
    },
  }),
);

function Skills(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={6}>
        <div className="container">
          <p>HTML</p>
          <Progress totalProgress={90} />
          <p>CSS</p>
          <Progress totalProgress={80} />
          <p>JavaScript</p>
          <Progress totalProgress={85} />
          <p>Jquery</p>
          <Progress totalProgress={85} />
          <p>React</p>
          <Progress totalProgress={90} />
        </div>
      </Paper>
      <Paper elevation={6}>
        <div className="container">
          <p>Wordpress</p>
          <Progress totalProgress={80} />
          <p>Front End Frameworks</p>
          <Progress totalProgress={90} />
          <p>AJAX</p>
          <Progress totalProgress={95} />
          <p>Git/Github</p>
          <Progress totalProgress={85} />
        </div>
      </Paper>
    </div>
  )
}

export default Skills
