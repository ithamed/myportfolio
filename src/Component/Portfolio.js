import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles({
  a: {
    height: window.innerHeight-250,
    fontSize: 30,
    margin: 50,
    paddingLeft: 100,
  },
});
function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.a}>
      <Grow timeout={1000} in={true}>
        <ul>
          <Grow timeout={1000} in={true}><li><a href="https://github.com/ithamed/algorithm">algorithm</a></li></Grow>
          <Grow timeout={1500} in={true}><li><a href="https://github.com/ithamed/JQuery">JQuery</a></li></Grow>
          <Grow timeout={2000} in={true}><li><a href="https://github.com/ithamed/React">React</a></li></Grow>
          <Grow timeout={2500} in={true}><li><a href="https://github.com/ithamed/react-challenge">react-challenge</a></li></Grow>
          <Grow timeout={3000} in={true}><li><a href="https://github.com/ithamed/calculator">calculator</a></li></Grow>
          <Grow timeout={3500} in={true}><li><a href="https://github.com/ithamed/Todo-list">Todo-list</a></li></Grow>
          <Grow timeout={4000} in={true}><li><a href="https://github.com/ithamed/Timer">Timer</a></li></Grow>
          <Grow timeout={4500} in={true}><li><a href="https://github.com/ithamed/Matrix-master-assignment">Matrix-master-assignment</a></li></Grow>
        </ul>
      </Grow>
    </div>
  )
}

export default Portfolio
