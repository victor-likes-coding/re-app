import React from "react";
import { Routes, Route } from "react-router-dom";
import { Nav, LandingPage, Login } from "./components/";

function App() {
    return (
        <div className="App">
            <Nav />
            {/* they see page when they're not logged in */}
            <Routes>
                <Route
                    path="/"
                    element={<LandingPage />}
                />
                <Route
                    path="login"
                    element={<Login />}
                />
            </Routes>
        </div>
    );
}

export default App;
