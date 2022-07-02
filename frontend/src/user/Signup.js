import React, { useState } from 'react'
import Layout from '../components/Layout';
import { signup } from '../auth';
import { Link } from 'react-router-dom';


const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        date: "",
        address: "",
        number: "",
        zip: "",
        country: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const { name, date, address, number, zip, country, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, date, address, number, zip, country, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: "",
                    date: "",
                    address: "",
                    number: "",
                    zip: "",
                    country: "",
                    email: "",
                    password: "",
                    error: "",
                    success: true
                });
            }
        });
    };

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Full Name</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Date of Birth</label>
                <input
                    onChange={handleChange("date")}
                    type="date"
                    className="form-control"
                    value={date}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Address</label>
                <input
                    onChange={handleChange("address")}
                    type="text"
                    className="form-control"
                    value={address}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Phone Number</label>
                <input
                    onChange={handleChange("number")}
                    type="text"
                    className="form-control"
                    value={number}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Zip/Postal Code</label>
                <input
                    onChange={handleChange("zip")}
                    type="text"
                    className="form-control"
                    value={zip}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Country</label>
                <input
                    onChange={handleChange("country")}
                    type="text"
                    className="form-control"
                    value={country}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-success mt-3">
                REGISTER
            </button>
        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: success ? "" : "none" }}
        >
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
        <Layout
            title="CREATE ACCOUNT"
            description="Signup to TRAVEL AGENCY"
            className="container col-md-8 offset-md-2"
        >
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    );
};

export default Signup;