import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
const Home = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                console.log("response is:", response);
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

    console.log("content is :", content);
    return (
        <div className="container">
            <header className="jumbotron">
                <table className="table align-middle table-hover">
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
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content.length !== 0 &&
                            content.map((item) => (
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
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </header>
        </div>
    );
};
export default Home;
