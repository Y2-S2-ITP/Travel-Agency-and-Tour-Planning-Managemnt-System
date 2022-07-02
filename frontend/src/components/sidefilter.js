import * as React from 'react';
import "../style/sidefilter.css";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ExploreIcon from '@mui/icons-material/Explore';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


function sidefilter() {
    return (
        <div>

            <section class="login-block">
                <div class="container2">
                    <div class="row">
                        <div className="timeline">
                        <Card sx={{ minWidth: 235 }}>
                            <CardContent>
                                <Timeline position="alternate">
                                    <TimelineItem>

                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot>
                                                <FastfoodIcon style={{ fontSize: 30, color: "red" }} />
                                            </TimelineDot>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '40px', px: 3 }}>
                                            <Typography style={{ fontWeight: 600 }} variant="h4" component="span" fontSize="20px">
                                                Eat
                                            </Typography>

                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>

                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot color="primary">
                                                <ExploreIcon style={{ fontSize: 30 }} />
                                            </TimelineDot>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '25px', px: 1 }}>
                                            <Typography style={{ fontWeight: 600 }} variant="h4" component="span" fontSize="20px">
                                                Travel
                                            </Typography>

                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot color="primary" variant="outlined">
                                                <HotelIcon style={{ fontSize: 30 }} />
                                            </TimelineDot>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '45px', px: 2.4 }}>
                                            <Typography style={{ fontWeight: 600 }} variant="h4" component="span" fontSize="20px">
                                                Sleep
                                            </Typography>

                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                            <TimelineDot color="secondary">
                                                <RepeatIcon style={{ fontSize: 30 }} />
                                            </TimelineDot>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '25px', px: 0.55 }}>
                                            <Typography style={{ fontWeight: 600 }} variant="h4" component="span" fontSize="20px">
                                                Repeat
                                            </Typography>

                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>


                            </CardContent>

                        </Card>
</div>

                        <div class="col-md-8 login-sec">
                            <div class="container3">
                                <div class="row3">
                                    <div id="carouselExampleControls" class="carousel slide slideshow1" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active imgShadow">
                                                <img style={{borderRadius:20}} src="https://a.cdn-hotels.com/gdcs/production27/d1203/fdc9472c-0a07-4eb7-88e2-877c43909c49.jpg" class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item imgShadow">
                                                <img style={{borderRadius:20}} src="https://www.olankatravels.com/wp-content/uploads/2019/04/1-1-300x195.jpg" class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item imgShadow">
                                                <img style={{borderRadius:20}} src="https://www.olankatravels.com/wp-content/uploads/2019/04/1-1-300x195.jpg" class="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default sidefilter
