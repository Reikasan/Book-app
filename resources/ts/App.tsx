import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./Pages/welcome-page";
import IndexPage from "./Pages/index-page";
import PopularPage from "./Pages/popular-page";
import RecentPage from "./Pages/recent-page";
import AddReviewPage from "./Pages/add-review";

const App: React.FC = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/guest" element={<IndexPage />} />
        <Route path="/guest/popular" element={<PopularPage />} />
        <Route path="/guest/recently-added" element={<RecentPage />} />
        <Route path="/guest/add-review" element={<AddReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;