import React from "react";
import { Routes, Route } from "react-router-dom";

import SamplePage from "./pages/SamplePage";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SamplePage />} />
            </Routes>
        </div>
    );
}
