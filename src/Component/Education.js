import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WebDeveloping from '../Assets/WebDeveloping.jpg';
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
    card: {  
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  return (
    <div className="root">
      <div className={classes.root}>
        <Grow timeout={1000} in={true}>
          <Paper className={classes.card} elevation={6}>
            <Card >
              <CardMedia
                className={classes.media}
                image={WebDeveloping}
                title="Web developing"
              />
              <CardContent>
                <Typography variant="body2" component="p">
                  Rotterdam - Netherlands
                </Typography>
                <Typography variant="body1" component="p">
                  Februarie 2021 - July 2021
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
                  <Typography paragraph>Februarie 2021 - July 2021</Typography>
                  <Typography paragraph>
                    Matrix Master and mano institude
                  </Typography>
                  <Typography paragraph>
                    six mounth full stuck Mern program in Matrix Master and mano institude in Rotterdam.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Paper>
        </Grow>
        <Grow timeout={2000} in={true}>
        <Paper className={classes.card} elevation={6}>
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
                September 2010 - Januarie 2013
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
                <Typography paragraph>September 2010 - Januarie 2013</Typography>
                <Typography paragraph>
                Institute of Higher Education Mehr Alborz
                </Typography>
                <Typography paragraph>
                master program of bussinnes administration in Institute of Higher Education Mehr Alborz in Tehran Iran.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Paper>
        </Grow>
        <Grow timeout={3000} in={true}>
          <Paper className={classes.card} elevation={6}>
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
                  September 2005 - February 2009
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded3,
                  })}
                  onClick={handleExpandClick3}
                  aria-expanded={expanded3}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded3} timeout="auto" unmountOnExit>
                <CardContent className={classes.cardContent}>
                  <Typography paragraph>September 2005 - February 2009</Typography>
                  <Typography paragraph>
                  Islamic Azad university
                  </Typography>
                  <Typography paragraph>
                  Bachlor of mechanical engineering in Islamic Azad university in Tehran Iran.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}

