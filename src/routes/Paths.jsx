import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "../Layout/PageLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<PageLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
