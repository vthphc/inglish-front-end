import React from "react";
import { Routes, Route } from "react-router-dom";

import SamplePage from "./pages/SamplePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SignupPage />} />
                <Route path="/signin" element={<SigninPage />} />
            </Routes>
        </div>
    );
}
