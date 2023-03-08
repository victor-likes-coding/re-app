import React from "react";
import { Nav, LandingPage } from "./components/";

function App() {
    return (
        <div className="App">
            <Nav />
            {/* they see page when they're not logged in */}
            <LandingPage />
        </div>
    );
}

export default App;
