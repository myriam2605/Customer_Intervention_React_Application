import axios from "axios";
//const API_URL = "https://rocketelevator.me/app/";

const login = (username, email, password) => {
    return axios
        .post("https://rocketelevator.me/app/users/login", {
            email: email,
            encrypted_password: password,
        })
        .then((response) => {
            if (response.data.jwt) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};
const logout = () => {
    localStorage.removeItem("user");
};
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
    // register,
    login,
    logout,
    getCurrentUser,
};
export default AuthService;
