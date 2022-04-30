import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://rocketelevator.me/app/";
const getPublicContent = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("--------------------");
    console.log(user);
    console.log("--------------------");
    return axios.get(API_URL + "interventions/", {
        headers: {
            jwt: user.jwt,
        },
    });
};
const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};
const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};
export default UserService;
