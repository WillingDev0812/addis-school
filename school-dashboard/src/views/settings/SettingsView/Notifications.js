import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Notifications = ({ className, ...rest }) => {

  const [email_notification, setEmail_notification] = useState(false);
  const [email_push_notification, setEmail_push_notification] = useState(false);
  const [phone_calls, setPhone_calls] = useState(false);
  const [message_notifications, setMessage_notifications] = useState(false);
  const [message_push_notifications, setMessage_push_notifications] = useState(false);

  useEffect(async ()=>{
    await getSettings()
  },[])

  const getSettings = () => {
    axios.get("http://127.0.0.1:5000/settings")
  }
  const handleSave = async () => {
    console.log("handle save called", email_notification)
    let data = {
      email_notification,
      email_push_notification,
      phone_calls,
      message_notifications,
      message_push_notifications
    }
    await axios.post("http://127.0.0.1:5000/settings", data)
  }
  const classes = useStyles();

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Manage the notifications"
          title="Notifications"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Notifications
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox 
                  checked={email_notification}
                  onClick={()=> setEmail_notification(!email_notification)}
                   />
                )}
                label="Email"
              />
              <FormControlLabel
                control={(
                  <Checkbox 
                  checked={email_push_notification}
                  onClick={()=> setEmail_push_notification(!email_push_notification)}
                   />
                )}
                label="Push Notifications"
              />
              {/* <FormControlLabel
                control={<Checkbox />}
                label="Text Messages"
              /> */}
              <FormControlLabel
                control={(
                  <Checkbox 
                  checked={phone_calls}
                  onClick={()=> setPhone_calls(!phone_calls)}
                   />
                )}
                label="Phone calls"
              />
            </Grid>
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Messages
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox 
                  checked={message_notifications}
                  onClick={()=> setMessage_notifications(!message_notifications)}
                   />
                )}
                label="Message"
              />
              <FormControlLabel
                control={<Checkbox
                checked={message_push_notifications}
                onClick={()=>{setMessage_push_notifications(!message_push_notifications)}}
                
                 />}
                label="Push Notifications"
              />
              {/* <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Phone calls"
              /> */}
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
