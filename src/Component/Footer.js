import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  icon: {
    background: 'white',
    borderRadius: 15,
    fontSize: 40,
    margin: 2,
  },
});


function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Link href='https://github.com/ithamed'>
        <GitHubIcon className={classes.icon} color="error"/>
      </Link>
      <Link href='https://www.linkedin.com/feed/'>
        <LinkedInIcon className={classes.icon} color="error" />
      </Link>
      <h2>HAMED DANESH</h2>
    </footer>
  )
}

export default Footer
