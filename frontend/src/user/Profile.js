import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { read, update, updateUser } from './apiUser'

const Profile = ({ match }) => {
    const [values, setValues] = useState({
        name: "",
        date: "",
        address: "",
        zip: "",
        country: "",
        number: "",
        email: "",
        password: "",
        error: false,
        success: false

    });
    const { token } = isAuthenticated()
    const { name, date, address, zip, country, number, email, password, error, success } = values
    const init = (userId) => {
        //console.log(userId)
        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true })
            } else {
                setValues({ ...values, name: data.name, date: data.date, address: data.address, zip: data.zip, country: data.country, number: data.number, email: data.email });
            }
        })
    };
    useEffect(() => {
        init(match.params.userId)
    }, [])


    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });

    }
    const clickSubmit = e => {
        e.preventDefault();
        update(match.params.userId, token, { name, email, password, date, address, zip, country, number }).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    updateUser(data, () => {
                        setValues({
                            ...values,
                            date: data.date,
                            address: data.address,
                            zip: data.zip,
                            country: data.country,
                            number: data.number,
                            name: data.name,
                            email: data.email,
                            success: true
                        });
                    });
                }
            }
        );
    };


    const redirectUser = (success) => {
        if (success) {
            return <Redirect to="/user/dashboard" />
        }
    }



    const profileUpdate = (name, email, password, date, address, zip, country, number) => (
        <form>
            <div className="form-group" style={{width:'60%'}}>
                <lable className="text-muted">Full Name</lable>
                <input type="text" onChange={handleChange('name')} className="form-control" value={name} />
            </div>
            <div className="form-group" style={{width:'60%'}}>
                <lable className="text-muted">Email</lable>
                <input type="email" onChange={handleChange('email')} className="form-control" value={email} />
            </div>
            <div className="form-group" style={{width:'60%'}}>
                <lable className="text-muted">Date of Birth</lable>
                <input type="text" onChange={handleChange('date')} className="form-control" value={date} />
            </div>
            <div className="form-group" style={{width:'60%'}}>
                <lable className="text-muted">Address</lable>
                <input type="text" onChange={handleChange('address')} className="form-control" value={address} />
            </div>
            <div className="form-group" style={{width:'60%'}}>
                <lable className="text-muted">Zip/Postal Code</lable>
                <input type="text" onChange={handleChange('zip')} className="form-control" value={zip} />
            </div>
            <div className="form-group" style={{width:'60%'}}>
                <lable className="text-muted">Country</lable>
                <input type="text" onChange={handleChange('country')} className="form-control" value={country} />
            </div>
            <div className="form-group" style={{width:'60%'}}>
                <lable className="text-muted">Phone Number</lable>
                <input type="text" onChange={handleChange('number')} className="form-control" value={number} />
            </div>

            <button onClick={clickSubmit} className="btn btn-primary mt-3">
                UPDATE
            </button>
        </form>
    )


    return (
        <Layout title="Profile"
            description=""
            className="container-fluid"
        >
            <h2 className="mb-4">EDIT PROFILE</h2>
            {profileUpdate(name, email, password, date, address, zip, country, number)}
            {redirectUser(success)}
        </Layout>
    )

};

export default Profile;