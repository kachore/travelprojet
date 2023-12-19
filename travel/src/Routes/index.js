import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TravelList from "../../pages/TravelList";
import TravelForm from "../../pages/TravelForm";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TravelList />} />
        <Route path="/form" element={<TravelForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
