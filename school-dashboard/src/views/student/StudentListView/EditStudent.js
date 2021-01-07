import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { 
    Modal, 
    Button,   
    Box,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
     } from "@material-ui/core";
import axios from 'axios';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 2, 2)
    },
    header: {
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(0, 2, 0, 2)
    },
    body: {
        minHeight: 60
    },
    foot: {
        height: "50px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 20
    },
    test__warn: {
        color: 'red'
    }
}));

export default function SimpleModal({...props}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(props.customer.name )
    const [phone, setPhone] = useState(props.customer.phone)
    const [location, setLocation] = useState(props.customer.address.country)
    const [email, setEmail] = useState(props.customer.email)
    const [password, setPassword] = useState("")
    const [policy, setPolicy] = useState(true)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        const data = {
            name,
            email,
            phone,
            address: {
                country: location,
                state: 'Nevada',
                city: 'Las Vegas',
                street: '1798  Hickory Ridge Drive'
            }

        }
        await axios.patch(`http://127.0.0.1:5000/students/${props.customer.id}`, data);
        setOpen(false)
        props.onReload();
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.header}>
            <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Edit Student
                  </Typography>
                <Button
                color="secondary"
                onClick={handleClose}
                >
                   Close
                </Button>
            </div>
            <div className={classes.body}>
            <form>
                
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  name="name"
                  onChange={name => setName(name.target.value)}
                  value={name}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="normal"
                  name="lastName"
                  onChange={phone_number => setPhone(phone_number.target.value)}
                  value={phone}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Location"
                  margin="normal"
                  name="location"
                  onChange={location => setLocation(location.target.value)}
                  value={location}
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onChange={ email => setEmail(email.target.value)}
                  type="email"
                  value={email}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    name="policy"
                    onChange={() => setPolicy(!policy)}
                    checked = {policy}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(policy) && (
                  <FormHelperText className={classes.test__warn} >
                    {"please accept terms and conditions"}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    Edit
                  </Button>
                </Box>
              </form>
           
            </div>
        </div>
    );

    return (
        <div>
            <Button
                color="primary"
                variant="contained"
                onClick={handleOpen}
                variant="outlined" color="primary" 

            >
                Edit
        </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    );
}
