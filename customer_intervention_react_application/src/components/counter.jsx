import React, { Component } from "react";
class Counter extends Component {
    state = {
        count: 0,
        // address: {
        //     street: ''
        // }
    };
    styles = {
        fontSize: 50,
        fontWeight: "bold",
    };

    render() {
        return (
            <React.Fragment>
                <span style={this.styles}>{this.state.count}</span>
                <button>Sign In</button>
            </React.Fragment>
        );
    }
}

export default Counter;
