import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MarketingMaterials from './pages/MarketingMaterials';
import InPipelineCustomers from './pages/InPipelineCustomers';
import Renewals from './pages/Renewals';
import InforceStatus from './pages/InforceStatus';
import Navigation from './components/Navigation';
import SearchBox from './pages/SearchBox'; 

function App() {
  return (
    <Router>
      <Navigation />
      <SearchBox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<MarketingMaterials />} />
        <Route path="/pipeline" element={<InPipelineCustomers />} />
        <Route path="/renewals" element={<Renewals />} />
        <Route path="/inforce" element={<InforceStatus />} />
        <Route path="/search" element={<SearchBox />} />
      </Routes>
    </Router>
  );
}

export default App;
