import React, {useState} from "react";
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

export default function SimpleModal(props) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [policy, setPolicy] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        console.log("data ", name, phone, location, email, password, policy)
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

        const response = await axios.post("http://127.0.0.1:5000/students", data)
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.header}>
            <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new account
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
                //   onBlur={handleBlur}
                  onChange={name => setName(name.target.value)}
                  value={name}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                //   helperText={touched.lastName && errors.lastName}
                  label="Phone Number"
                  margin="normal"
                  name="lastName"
                //   onBlur={handleBlur}
                  onChange={phone_number => setPhone(phone_number.target.value)}
                  value={phone}
                  variant="outlined"
                />
                <TextField
                //   error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                //   helperText={touched.lastName && errors.lastName}
                  label="Location"
                  margin="normal"
                  name="location"
                //   onBlur={handleBlur}
                  onChange={location => setLocation(location.target.value)}
                  value={location}
                  variant="outlined"
                />

                <TextField
                //   error={Boolean(touched.email && errors.email)}
                  fullWidth
                //   helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                //   onBlur={handleBlur}
                  onChange={ email => setEmail(email.target.value)}
                  type="email"
                  value={email}
                  variant="outlined"
                />
                <TextField
                //   error={Boolean(touched.password && errors.password)}
                  fullWidth
                //   helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                //   onBlur={handleBlur}
                  onChange={password => setPassword(password.target.value)}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    // checked={values.policy}
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
                    //   component={RouterLink}
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
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    Add Student
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
            >
                Add student
        </Button>
            {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
            <Modal
                open={open}
                onClose={handleClose}
            // aria-labelledby="simple-modal-title"
            // aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}