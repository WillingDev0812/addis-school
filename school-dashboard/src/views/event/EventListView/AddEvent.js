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
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [policy, setPolicy] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        const data = {
            title,
            description,
            image

        }

        const response = await axios.post("http://127.0.0.1:5000/events", data)
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.header}>
            <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new event
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
                  label="Title"
                  margin="normal"
                  name="title"
                  onChange={title => setTitle(title.target.value)}
                  value={title}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Description"
                  margin="normal"
                  name="title"
                  onChange={description => setDescription(description.target.value)}
                  value={description}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Image"
                  margin="normal"
                  name="location"
                  onChange={image => setImage(image.target.value)}
                  value={image}
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
                    Add Event
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
                Add event
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
