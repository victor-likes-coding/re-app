import React from "react";
import image from "../assets/no-background-logo.png";

export default function Nav() {
    return (
        <nav className="navbar">
            <h3 className="navbar__logo-container">
                <img
                    className="navbar__logo"
                    src={image}
                    alt="re-app logo"
                />
            </h3>
            <div className="navbar__links">
                <div className="navbar__auth primary-button">Sign In</div>
            </div>
        </nav>
    );
}
