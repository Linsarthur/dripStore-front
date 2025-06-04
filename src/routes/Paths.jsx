import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "../Layout/PageLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Usuarios from "../pages/Usuarios";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
          <Route path="/dashboard" element={<PageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/produtos" element={<Produtos />} />
            <Route path="/dashboard/usuarios" element={<Usuarios />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
