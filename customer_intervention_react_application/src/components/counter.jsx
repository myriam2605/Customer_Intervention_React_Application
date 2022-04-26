import React, { Component } from "react";
class Login extends Component {
    state = {
        email: "",
        pwd: "",
        // count: 0,
        // address: {
        //     street: ''
        // }
    };
    handelChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handelSubmit = (e) => {
        e.preventDefault();
    };
    styles = {
        fontSize: 50,
        fontWeight: "bold",
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    {/* <div id="header" class="navbar-toggleable-md sticky header-md clearfix">

                        <header id="topNav">
                            <div class="container">

                                <div class="navbar-collapse collapse float-right nav-main-collapse submenu-dark">
                                    <div class="nav-main">
                                        <ul id="topMain" class="nav nav-pills nav-main nav-onepage">
                                            <li class="active">
                                                <a href="/">
                                                    HOME
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#services">
                                                    SERVICES
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#portfolio">
                                                    PORTFOLIO
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#news">
                                                    NEWS
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#clients">
                                                    CLIENTS
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#contact">
                                                    CONTACT
                                                </a>
                                            </li>
                                                                                        
                                                
                                                <li>
                                                    <button_to  "SIGN OUT", destroy_user_session_path, method: delete, class "nav nav-pills nav-main nav-onepage" >
                                                </li>
                                            < else >
                                                <li>
                                                    < link_to "SIGN UP"
                                                    new_user_registration_path >
                                                </li>
                                                <li><!-- SIGN IN -->
                                                    < link_to "SIGN IN"
                                                    new_user_session_path >
                                                </li>
                                            < end >



                                                
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </header>
                    <div> */}
                    <form onSubmit={this.handelSubmit}>
                        <input style={this.style} type="email" name="email" placeholder="email..." required onChange={this.handelChange} />
                        <input
                            style={this.style}
                            type="password"
                            name="pwd"
                            placeholder="password..."
                            required
                            onChange={this.handelChange}
                        />
                        {/* <span style={this.styles}>{this.state.count}</span> */}
                        <button onSubmit={this.handelSubmit}>Log In</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
