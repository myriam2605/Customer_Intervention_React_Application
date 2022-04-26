// import React from "react";
// import { ReactComponent as Logo } from "../../../../../../Desktop/Rocket-Elevator-Foundation-main/app/assets/images/R2.png";
// class Login extends React.Component {
//     state = {
//         email: "",
//         pwd: "",
//     };
//     handelChange = (e) => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value });
//     };

//     handelSubmit = (e) => {
//         e.preventDefault();
//     };
//     render() {
//         return (
//             <div>
//                 <div>
//                     <Logo />
//                     <div>
//                         <form onSubmit={this.handelSubmit}>
//                             <input type="email" name="email" placeholder="email..." required onChange={this.handelChange} />
//                             <input type="password" name="pwd" placeholder="password..." required onChange={this.handelChange} />
//                             <button onSubmit={this.handelSubmit}>Log In</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Login;
