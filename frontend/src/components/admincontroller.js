import React from 'react';
import "../style/admincontroller.css";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className="adminbtn">
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddCircleIcon />}
      ><Link to="/admintour"><b>Packages</b></Link>

      </Button>
      
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<ReceiptIcon />}
      >
        <Link to="/admintourReservations"><b>Reservations</b></Link>
      </Button>
      
    </div>
  );
}