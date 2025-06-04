import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PageLayout;
