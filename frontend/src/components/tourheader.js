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

            <h2 style={{ fontSize: "25px" }}>Tour Packages</h2>
            <div className="container">
            <p style={{ fontSize: "15px" }}>Package tours are excursions or holidays which “package” a variety of services together to make a single “combined” trip. Commonly they combine such things as transport, accommodation and meals. They may also include the provision of a tour guide and/or leader. Tours can be long or short in duration and distance. They may be a one-day or overnight package, or they could be a period of a month or more.</p>
            </div>
        </div>
    );
}