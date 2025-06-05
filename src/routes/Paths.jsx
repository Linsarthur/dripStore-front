import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "../Layout/PageLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Categorias from "../pages/Categorias";
import Marcas from "../pages/Marcas";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<PageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="categorias" element={<Categorias />} />
            <Route path="marcas" element={<Marcas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
