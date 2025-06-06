import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "../Layout/PageLayout";
import Categorias from "../pages/Categorias";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Marcas from "../pages/Marcas";
import Produtos from "../pages/Produtos";
import SafePath from "./SafePath";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<SafePath><PageLayout /></SafePath>}>
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
