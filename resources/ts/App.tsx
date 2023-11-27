import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WelcomePage from "./Pages/welcome-page";
import IndexPage from "./Pages/index-page";

const App: React.FC = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/guest" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;