import React, { useState } from 'react'
import Layout from '../components/Layout';
import { signin, authenticate, isAuthenticated } from '../auth';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Menu';


const Signin = () => {
    const [values, setValues] = useState({

        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false,
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated()

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(
                    data,
                    () => {
                        setValues({
                            ...values,


                            redirectToReferrer: true,
                        });
                    });
            }
        });
    };

    const signUpForm = () => (
        <form>


            <div className="form-group" style={{width:'40%'}}>
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group" style={{width:'40%'}}>
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary mt-3">
                LOGIN
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

    const showLoading = () => (
        loading && (<div className="alert alert-info"><h2>Loading..</h2></div>)
    );


    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/AdminSidebar"/>;
            } else {
                return <Redirect to="/" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    };


    return (
        <div>
            <Menu/>
        <Layout
            title="Login"
            description="Signin to Travel Agency"
            className="container col-md-8 offset-md-2"
        >
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
        </Layout>
        </div>
    );
};

export default Signin;