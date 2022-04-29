import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const Login = () => {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [encrypted_password, setEncrypted_Password] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangeEncrypted_Password = (e) => {
        const encrypted_password = e.target.value;
        setEncrypted_Password(encrypted_password);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, email, encrypted_password).then(
                () => {
                    navigate("/home");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };
    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card" />
                <Form onSubmit={handleLogin} ref={form}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="encrypted_password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={encrypted_password}
                            onChange={onChangeEncrypted_Password}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" disabled={loading}>
                            {loading && <span className="spinner-border spinner-border-sm"></span>}
                            <span>Login</span>
                        </button>
                    </div>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};
export default Login;
