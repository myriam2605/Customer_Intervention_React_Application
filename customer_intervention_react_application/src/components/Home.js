import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
const Home = () => {
    const [content, setContent] = useState();
    console.log("Test");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                let array = [];
                for (var k in response.data) {
                    var obj = [];
                    for (var p in response.data[k]) {
                        obj.push(response.data[k][p]);
                    }
                    array.push(obj);
                }
                setContent(array);
            },
            (error) => {
                const _content = (error.response && error.response.data) || error.message || error.toString();
                setContent(_content);
            }
        );
    }, []);
    return (
        <div className="container">
            <header className="jumbotron">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Intervention</th>
                            <th scope="col">Building</th>
                            <th scope="col">Battery</th>
                            <th scope="col">Column</th>
                            <th scope="col">Elevator</th>
                            <th scope="col">Result</th>
                            <th scope="col">Report</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content?.map((item) => (
                            <tr>
                                <td>{item[0]}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                <td>{item[6]}</td>
                                <td>{item[7]}</td>
                                <td>{item[8]}</td>
                                <td>{item[9]}</td>
                                <td>{item[10]}</td>
                                <td>
                                    <button>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </header>
            <button>Create New Intervention</button>
        </div>
    );
};
export default Home;
