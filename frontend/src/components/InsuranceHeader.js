import React from 'react';
import "../style/tourheader.css";
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function CustomSeparator() {


    return (
        <div className="breadcrumb">
            <Breadcrumbs style={{ fontSize: "15px",marginLeft: "20px" }} separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/" >
                    Home
                </Link>

                <Typography style={{ fontSize: "15px" }} color="textPrimary">Tour Packages</Typography>
            </Breadcrumbs>

            
            <div className="container">
            
            </div>
        </div>
    );
}