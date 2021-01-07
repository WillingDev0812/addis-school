import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const StudentListView = () => {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);
  
  useEffect(() => { 
     getStudents()
  },[]);

  const getStudents = async() => {
    try {
      const students = await axios.get("http://127.0.0.1:5000/students")
      setCustomers( students.data)
    }catch {
      console.log("Err happened")
    }
  }
  const onSearch = async (search)=> {
    await getStudents();
    if(search.trim() !== ""){
      setCustomers(customers.filter(customer => customer.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())))
    }
  }

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar onReload={() => getStudents()} onSearch={onSearch}/>
        <Box mt={3}>
          <Results customers={customers} onReload={() => getStudents()} />
        </Box>
      </Container>
    </Page>
  );
};

export default StudentListView;
