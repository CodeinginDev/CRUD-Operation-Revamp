import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import FormField from "../pages/FormFields/FormFiled";
import Modal from "../components/Modal/Modal";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<FormField />} />
        <Route path="/edit/:id" element={<FormField />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
