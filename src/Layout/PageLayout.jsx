import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const PageLayout = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
