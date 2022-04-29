import React, { useState, useEffect } from "react";
import axios from "axios";
import UserService from "../services/user.service";

class Intervention extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buildings: [],
            batteries: [],
            columns: [],
            elevators: [],
        };
    }

    componentDidMount() {
        const API_URL = "https://rocketelevator.me/app/buildings/";
        let user = JSON.parse(localStorage.getItem("user"));
        axios
            .get(API_URL, {
                headers: {
                    jwt: user.jwt,
                },
            })
            .then((response) => {
                let buildings = response.data;
                let buildingList = [{ id: "item[0]", name: "--Select--" }];
                for (let i = 0; i < buildings.length; i++) {
                    buildingList.push({ id: buildings[i].id, name: `Building ID: ${buildings[i].id}` });
                }
                this.setState({
                    // Call api https://rocketelevator.me/app/buildings/
                    buildings: buildingList,
                });
            });
    }

    getBatteries(building_id) {
        console.log(building_id);
        const API_URL = `https://rocketelevator.me/app/batteries/building/${building_id}`;
        let user = JSON.parse(localStorage.getItem("user"));
        axios
            .get(API_URL, {
                headers: {
                    jwt: user.jwt,
                },
            })
            .then((response) => {
                let batteries = response.data;
                let batteryList = [{ id: "item[0]", name: "--Select--" }];
                if (batteries.length === undefined) {
                    batteryList.push({ id: batteries.id, name: `Battery ID: ${batteries.id}` });
                } else {
                    for (let i = 0; i < batteries.length; i++) {
                        batteryList.push({ id: batteries[i].id, name: `Battery ID: ${batteries[i].id}` });
                    }
                }

                this.setState({
                    // Call api https://rocketelevator.me/app/batteries/building/id
                    batteries: batteryList,
                });
            });
    }

    getColumns(battery_id) {
        console.log(battery_id);
        const API_URL = `https://rocketelevator.me/app/columns/battery/${battery_id}`;
        let user = JSON.parse(localStorage.getItem("user"));
        axios
            .get(API_URL, {
                headers: {
                    jwt: user.jwt,
                },
            })
            .then((response) => {
                let columns = response.data;
                let columnList = [{ id: "item[0]", name: "--Select--" }];
                if (columns.length === undefined) {
                    columnList.push({ id: columns.id, name: `Column ID: ${columns.id}` });
                } else {
                    for (let i = 0; i < columns.length; i++) {
                        columnList.push({ id: columns[i].id, name: `Column ID: ${columns[i].id}` });
                    }
                }

                this.setState({
                    // Call api https://rocketelevator.me/app/columns/battery/id
                    columns: columnList,
                });
            });
    }

    getElevators(column_id) {
        console.log(column_id);
        const API_URL = `https://rocketelevator.me/app/elevators/column/${column_id}`;
        let user = JSON.parse(localStorage.getItem("user"));
        axios
            .get(API_URL, {
                headers: {
                    jwt: user.jwt,
                },
            })
            .then((response) => {
                let elevators = response.data;
                let elevatorList = [{ id: "item[0]", name: "--Select--" }];
                if (elevators.length === undefined) {
                    elevatorList.push({ id: elevators.id, name: `Elevator ID: ${elevators.id}` });
                } else {
                    for (let i = 0; i < elevators.length; i++) {
                        elevatorList.push({ id: elevators[i].id, name: `Elevator ID: ${elevators[i].id}` });
                    }
                }

                this.setState({
                    // Call api https://rocketelevator.me/app/elevators/column/id
                    elevators: elevatorList,
                });
            });
    }

    render() {
        const { buildings, batteries, columns, elevators } = this.state;

        let buildingList =
            buildings.length > 0 &&
            buildings.map((item, i) => {
                return (
                    <option key={i} value={item.id}>
                        {item.name}
                    </option>
                );
            }, this);

        let batteryList =
            batteries.length > 0 &&
            batteries.map((item, i) => {
                return (
                    <option key={i} value={item.id}>
                        {item.name}
                    </option>
                );
            }, this);

        let columnList =
            columns.length > 0 &&
            columns.map((item, i) => {
                return (
                    <option key={i} value={item.id}>
                        {item.name}
                    </option>
                );
            }, this);

        let elevatorList =
            elevators.length > 0 &&
            elevators.map((item, i) => {
                return (
                    <option key={i} value={item.id}>
                        {item.name}
                    </option>
                );
            }, this);

        return (
            <div>
                <select onChange={(event) => this.getBatteries(event.target.value)}>{buildingList}</select>
                <select onChange={(event) => this.getColumns(event.target.value)}>{batteryList}</select>
                <select onChange={(event) => this.getElevators(event.target.value)}>{columnList}</select>
                <select onChange={(event) => this.getEmployee(event.target.value)}>{elevatorList}</select>
            </div>
        );
    }
}

export default Intervention;
