import Header from "./components/Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import HomePage from "./components/pages/HomePage";


function App() {
  return (
    <Router>
      <Header text="Feedback UI" />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
