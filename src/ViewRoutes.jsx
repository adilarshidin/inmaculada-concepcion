import { Routes, Route } from "react-router";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

const ViewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default ViewRoutes;
