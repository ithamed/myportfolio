import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '80%',
  },
});

export default function Progress(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const {totalProgress} = props;
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress !== totalProgress) {
          return oldProgress + 1;
        } else {
          clearInterval(timer);
          return totalProgress
        }
      });
    }, 10);
  },[props]);

  return (
    <div className={classes.root}>
      <p><LinearProgress variant="determinate" value={progress} /><span>{progress}%</span></p>
    </div>
  );
}