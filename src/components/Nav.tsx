import React from "react";
import image from "../assets/no-background-logo.png";
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <h3
                className="navbar__logo-container"
                onClick={() => navigate("/", { replace: true })}>
                <img
                    className="navbar__logo"
                    src={image}
                    alt="re-app logo"
                />
            </h3>
            <div className="navbar__links">
                <div
                    onClick={() => navigate("/login", { replace: true })}
                    className="navbar__auth primary-button">
                    Sign In
                </div>
            </div>
        </nav>
    );
}
