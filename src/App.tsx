import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import BusinessModel from './pages/BusinessModel';
import Tokenomics from './pages/Tokenomics';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tokenomics" element={<Tokenomics />} /> {/* ✅ fixed path */}
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/business-model" element={<BusinessModel />} />
            {/* Optional: fallback for undefined routes */}
            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default App;
