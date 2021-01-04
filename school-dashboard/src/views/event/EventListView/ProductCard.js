import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios';
import EditEvent from './EditEvent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  image : {
    objectFit:'cover',
    width:'100%',
    height:'200px'
  }
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  const deleteEvent = async (eventId) => {
    try {
      const students = await axios.delete("http://127.0.0.1:5000/events/"+eventId);
      rest.onReload();
      
    }catch {
      console.log("Err happened");
    }
  }

  const editEvent = async (event) => {
    console.log("Event ", event);
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box>
          <Avatar
            className={classes.image}
            alt="Product"
            src={product.image}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
               <EditEvent 
               reReload={() =>  rest.onReload()}
               event={{...product}}/>
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
   
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              <Button variant="outlined" color="primary"  
              onClick={() => deleteEvent(product.id)}>Delete</Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
