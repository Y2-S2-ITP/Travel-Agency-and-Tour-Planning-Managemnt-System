import React from 'react';
import "../style/homeFeed.css";

function homeFeed() {
    return (
        <div>
            <div class="accordian">
                <ul>
                    <li>
                        <div class="image_title">
                            <a href="#">Travel Insurence</a>
                        </div>
                        <a href="#">
                            <img src="https://daxueconsulting.com/wp-content/uploads/2019/11/daxue-consulting_travel-insurance-market-in-China_strong-demands-for-travel-insurance-in-China.png" />
                        </a>
                    </li>
                    <li>
                        <div class="image_title">
                            <a href="#">Toy Story 2</a>
                        </div>
                        <a href="#">
                            <img src="https://c1.wallpaperflare.com/preview/668/281/210/passport-flag-travel-visa.jpg" />
                        </a>
                    </li>
                    <li>
                        <div class="image_title">
                            <a href="#">Wall-E</a>
                        </div>
                        <a href="#">
                            <img src="https://runningwithyourheartcom.files.wordpress.com/2020/08/pixars-up-movie-balloons-sky-house.jpg" />
                        </a>
                    </li>
                    <li>
                        <div class="image_title">
                            <a href="#">Up</a>
                        </div>
                        <a href="#">
                            <img src="https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/d558fbb0-e4a4-f18b-d657-12d5055b84d9/630x355.jpg" />
                        </a>
                    </li>
                    <li>
                        <div class="image_title">
                            <a href="#">Cars 2</a>
                        </div>
                        <a href="#">
                            <img src="https://m.southalltravel.co.uk/assets/images/tours/worldwide-tour-st.jpg" />
                        </a>
                    </li>
                </ul>
            </div>
            <h1>Best Tour Packages</h1>
            <div class="container">


                <div class="row mb-5">
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-4 cardcol">
                        <div class="card card-inverse card-info">
                            <img class="card-img-top" src="https://a.cdn-hotels.com/gdcs/production27/d1203/fdc9472c-0a07-4eb7-88e2-877c43909c49.jpg" />
                            <div class="card-block">
                                
                                <h4 class="card-title">Universal Studios Singapore</h4>
                                <div class="card-text">
                                8 Sentosa Gateway, Sentosa Island, Singapore 098269, Singapore
                                </div>
                            </div>
                            <div class="card-footer">
                            <a href="/tour"><button class="btn btn-info btn-sm">Visit</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                        <div class="card card-inverse card-info">
                            <img class="card-img-top" src="https://www.olankatravels.com/wp-content/uploads/2019/04/1-1-300x195.jpg" />
                            <div class="card-block">
                                
                                <h4 class="card-title">Adaaran Club Rannalhi – South Male’ Atoll</h4>
                                <div class="card-text">
                                scuba diving
                                </div>
                                <br/><br/>
                            </div>
                            <div class="card-footer">
                            <a href="/tour"><button class="btn btn-info btn-sm">Visit</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                        <div class="card card-inverse card-info">
                            <img class="card-img-top" src="https://picsum.photos/200/150/?random" />
                            <div class="card-block">
                                
                                <h4 class="card-title">Tawshif Ahsan Khan</h4>
                                <div class="card-text">
                                    Tawshif is a web designer living in Bangladesh.
                                </div>
                            </div>
                            <div class="card-footer">
                            <a href="/tour"><button class="btn btn-info btn-sm">Visit</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default homeFeed
