import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import "../style/header.css";
import Imglogo from "../images/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Header = ({ history }) => (
    <div className="header">
        <div className="header_left">
            <img src={Imglogo} alt="" />

            <h2> TRAVEL AGENCY</h2>
        </div>
        <div className=" header_right">
            {isAuthenticated() && isAuthenticated().user.role == 0 && (

                <Button type="submit" >
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </Button>

            )}

            {isAuthenticated() && isAuthenticated().user.role == 1 && (

                <Button type="submit" >
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/AdminSidebar"
                    >
                        Dashboard
                    </Link>
                </Button>

            )}


            {!isAuthenticated() && (
                <Fragment>
                    <Button type="submit" >
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Signin
                        </Link>
                    </Button>


                    <Button type="submit" >
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </Button>
                </Fragment>
            )}
            {isAuthenticated() && (

                <Button type="submit" >
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={() => signout(() => {
                            history.push("/");
                        })}
                    >
                        Signout
                    </span>
                </Button>


            )}

            <nav className="navbar-ligsht ">
                <div className="header_top">
                    <a className="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <MenuIcon />
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">TRAVEL AGENCY</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Stay</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tickets</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Ground Reservations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Packages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Documents</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Insurence</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">My Profile</a>
                                </li>

                                {isAuthenticated() && (

                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            style={{ cursor: "pointer", color: "Blue" }}
                                            onClick={() => signout(() => {
                                                history.push("/");
                                            })}
                                        >
                                            Signout
                                        </a>
                                    </li>


                                )}




                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    </div>
);

export default withRouter(Header);
