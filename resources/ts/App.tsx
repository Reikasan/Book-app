import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WelcomePage from "./Pages/welcome-page";
import IndexPage from "./Pages/index-page";
import PopularPage from "./Pages/popular-page";
import RecentPage from "./Pages/recent-page";

const App: React.FC = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/guest" element={<IndexPage />} />
        <Route path="/guest/popular" element={<PopularPage />} />
        <Route path="/guest/recent-added" element={<RecentPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;