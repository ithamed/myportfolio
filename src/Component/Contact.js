import React, { useState} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import SubjectIcon from '@material-ui/icons/Subject';
import MailIcon from '@material-ui/icons/Mail';
import { Input, TextField } from '@material-ui/core';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5),
        width: theme.spacing(50),
        height: theme.spacing(50),
      },
    },
    contactForm: {
      padding: theme.spacing(3),
    },
    map: {
      width: theme.spacing(50),
      height: theme.spacing(50)
    },
    input: {
      margin: theme.spacing(2)
    },
  }),
);

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");
  const classes = useStyles();
  console.log(name ,subject ,email,massage)
  return (
      <div className={classes.root}>
        <Grow timeout={3000} in={true}>
          <Paper elevation={6}>
            <iframe title="map" className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39374.34433178194!2d4.3067000126238515!3d51.91759903199297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44b2048625d7f%3A0xabc6456f0996d88a!2sVlaardingen!5e0!3m2!1snl!2snl!4v1620824426414!5m2!1snl!2snl" ></iframe>
          </Paper>
        </Grow>
        <Grow timeout={1000} in={true}>
          <Paper className={classes.contactForm} elevation={6}>
            <div className="container">
              <h5>Feel free to contact me</h5>
              <div className="mb-6">
                <form action="https://formspree.io/f/xzbyrepz" method="POST">
                  <div className="mb-6">
                    <Input startAdornment={<PersonIcon color='primary' />} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name"/>
                  </div>
                  <div className="mb-6">
                      <Input startAdornment={<SubjectIcon color='primary' />} type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control" placeholder="Subject"/>
                  </div>
                  <div className="mb-6">
                    <Input startAdornment={<MailIcon color='primary' />} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="name@example.com"/>
                  </div>
                  <div className="mb-6">
                    <TextField multiline rows={4} variant="filled" className={classes.input} name="massage" value={massage} onChange={(e) => setMassage(e.target.value)} placeholder="Your massage" ></TextField>
                  </div>
                  <div>
                    <Button type="submit" variant="contained" color="primary" className={classes.input}>
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Paper>
        </Grow>
      </div>
  )
}

export default Contact
