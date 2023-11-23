import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WelcomePage from "./Pages/welcome-page";
import GestPage from "./Pages/gest-page";

const App: React.FC = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/gest" element={<GestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;