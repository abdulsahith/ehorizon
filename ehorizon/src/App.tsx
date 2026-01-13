import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EHorizon from "./pages/ehorizon";
import PitchRegister from "./pages/pitch";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EHorizon/>} />
        <Route path="/register/pitch" element={<PitchRegister />} />
        <Route path="*" element={<div style={{ color: "white" }}>404</div>} />
      </Routes>
    </Router>
  );
}
