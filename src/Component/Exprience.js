import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MechanicalEngineer from '../Assets/MechanicalEngineer.jpg';
import BussinessAdministration from '../Assets/BussinessAdministration.jpg';
import { Grow } from '@material-ui/core';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'fles-start',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      margin: 80,
    },
    paper: {
      margin: 10,  
    },
    cardContent: {
      maxWidth: 340,  
    },
    media: {
      height: 200,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
);
function Exprience() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  return (
    <div className={classes.root}>
      <Grow timeout={1500} in={true}>
        <Paper className={classes.paper} elevation={6}>
          <Card >
            <CardMedia
              className={classes.media}
              image={BussinessAdministration}
              title="Bussiness Administration"
            />
            <CardContent>
              <Typography variant="body2" component="p">
                Tehran - Iran
              </Typography>
              <Typography variant="body1" component="p">
                FC Esteghlal 
              </Typography>
              <Typography variant="body1" component="p">
                Supervisor of the accounting department
              </Typography>
              <Typography variant="body1" component="p">
                2011-2019
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent className={classes.cardContent}>
                <Typography paragraph>
                  <p>2011-2019 Supervisor of the accounting department of FC Esteghlal Tehran (2nd (professional) club of the Iranian Premier League, stadium for 100,000 visitors);</p>
                  <p>Functions and Activities:</p>
                  <div>
                    <ul>
                      <li>Manager finance and accountancy departments, approx. 10 employees</li>
                      <li>member of the annual meeting of the creditors' committee of the football club</li>
                      <li>responsible for communication and information from the club to the Ministry of Economic and Financial Affairs</li>
                      <li>member of the club's sales and tender committee</li>
                      <li>responsible for recording financial documents</li>
                      <li>reporting the club's financial transactions annually</li>
                      <li>responsible for calculating and paying salaries, taxes and insurance of club staff and football players</li>
                      <li>preparing financial reports for the club's CEO and the board of shareholders</li>
                      <li>preparing financial reports for the Iranian Premier League, the Football Federation of Iran, the Ministry of Sports Affairs and the Asian Football Confederation</li>
                      <li>responsible for reviewing financial interactions between the club and sponsors as well as companies providing services to the club and resolving disputes</li>
                    </ul>
                  </div>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Paper>
      </Grow>
      <Grow timeout={3000} in={true}>
        <Paper className={classes.paper} elevation={6}>
          <Card >
            <CardMedia
              className={classes.media}
              image={MechanicalEngineer}
              title="Mechanical Engineer"
            />
            <CardContent>
            <Typography variant="body2" component="p">
                Tehran - Iran
              </Typography>
              <Typography variant="body1" component="p">
                Pegah techno-company 
              </Typography>
              <Typography variant="body1" component="p">
                Supervisor of mechanical installations
              </Typography>
              <Typography variant="body1" component="p">
                2010-2011 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded2,
                })}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <CardContent className={classes.cardContent}>
                <Typography paragraph>
                  <p>2010-2011 Supervisor of mechanical installations at Pegah techno-company in Tehran;</p>
                  <p>Functions and Activities:</p>
                  <div>
                    <ul>
                      <li>Manager of the mechanical engineering department in a construction workshop</li>
                      <li>responsible for checking correct installation of the mechanical engineering equipment according to plan</li>
                      <li>member of the Iranian Organization of Mechanical Engineering Systems</li>
                    </ul>
                  </div>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Paper>
      </Grow>
    </div>
  )
}

export default Exprience
