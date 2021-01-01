import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

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
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2)

    // display:"grid",
  },
  header: {
    backgroundColor: "red",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 2, 0, 2)
  },
  body: {
    backgroundColor: "yellow",
    minHeight: 60
  },
  foot: {
    backgroundColor: "green",
    height: "50px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 20
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.header}>
        <h2>{props.title ? props.title : "Modal Title"}</h2>
        <h2>
          <a onClick={handleClose}>Close</a>
        </h2>
      </div>
      <div className={classes.body}>
        <p>{props.body ? props.body : "Modal body"}</p>
      </div>
      <div className={classes.foot}>
        <h2>
          <a onClick={handleClose}>Submit</a>
        </h2>
      </div>

      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
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
