import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';
import data from './data';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  // const [products] = useState(data);
  const [events, setEvents] = useState([]);
  
  useEffect(() => { 
     getEvents()
  },[]);

  const getEvents = async() => {
    try {
      const events = await axios.get("http://127.0.0.1:5000/events")
      setEvents( events.data)
    }catch {
      console.log("Err happened")
    }
  }

  return (
    <Page
      className={classes.root}
      title="Events"
    >
      <Container maxWidth={false}>
        <Toolbar onReload={getEvents}/>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {events.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  product={product}
                  onReload={getEvents}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
