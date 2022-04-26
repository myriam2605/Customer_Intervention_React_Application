// // login.js
// import * as React from "react";

// function Login() {
//     const [state, setState] = React.useReducer((s, a) => ({ ...s, ...a }), {
//         resolved: false,
//         loading: false,
//         error: null,
//     });

//     function handleSubmit(event) {
//         event.preventDefault();
//         const { usernameInput, passwordInput } = event.target.elements;

//         setState({ loading: true, resolved: false, error: null });

//         window
//             .fetch("/api/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     username: usernameInput.value,
//                     password: passwordInput.value,
//                 }),
//             })
//             .then((r) => r.json())
//             .then(
//                 (user) => {
//                     setState({ loading: false, resolved: true, error: null });
//                     window.localStorage.setItem("token", user.token);
//                 },
//                 (error) => {
//                     setState({ loading: false, resolved: false, error: error.message });
//                 }
//             );
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="usernameInput">Username</label>
//                     <input id="usernameInput" />
//                 </div>
//                 <div>
//                     <label htmlFor="passwordInput">Password</label>
//                     <input id="passwordInput" type="password" />
//                 </div>
//                 <button type="submit">Submit{state.loading ? "..." : null}</button>
//             </form>
//             {state.error ? <div role="alert">{state.error.message}</div> : null}
//             {state.resolved ? <div role="alert">Congrats! You're signed in!</div> : null}
//         </div>
//     );
// }

// export default Login;

// // __tests__/login.js
// // again, these first two imports are something you'd normally handle in
// // your testing framework configuration rather than importing them in every file.
// import "@testing-library/jest-dom/extend-expect";

// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import * as React from "react";

// import Login from "../login";

// test("allows the user to login successfully", async () => {
//     // mock out window.fetch for the test
//     const fakeUserResponse = { token: "fake_user_token" };
//     jest.spyOn(window, "fetch").mockImplementationOnce(() => {
//         return Promise.resolve({
//             json: () => Promise.resolve(fakeUserResponse),
//         });
//     });

//     render(<Login />);
//     // fill out the form
//     userEvent.type(screen.getByLabelText(/username/i), "chuck");
//     userEvent.type(screen.getByLabelText(/password/i), "norris");

//     userEvent.click(screen.getByText(/submit/i));

//     // just like a manual tester, we'll instruct our test to wait for the alert
//     // to show up before continuing with our assertions.
//     const alert = await screen.findByRole("alert");

//     // .toHaveTextContent() comes from jest-dom's assertions
//     // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
//     // but jest-dom will give you better error messages which is why it's recommended
//     expect(alert).toHaveTextContent(/congrats/i);
//     expect(window.localStorage.getItem("token")).toEqual(fakeUserResponse.token);
// });
