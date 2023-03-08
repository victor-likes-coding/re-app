import React from "react";

export default function Login() {
    return (
        <div className="login">
            <form className="login__form">
                <h2 className="login__title">Login</h2>
                <input
                    className="login__input"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="login__input"
                    type="password"
                    placeholder="Password"
                />
                <button
                    type="submit"
                    className="secondary-button">
                    Login
                </button>
            </form>
        </div>
    );
}
