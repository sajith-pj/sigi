import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup/Signup";
const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
