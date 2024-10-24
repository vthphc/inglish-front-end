import React from "react";
import { Routes, Route } from "react-router-dom";

import SamplePage from "./pages/SamplePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </div>
    );
}
