import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import NavbarSide from "../components/NavbarSide";

const PageLayout = () => {
  return (
    <>
      <div className="relative h-screen flex">
        <NavbarSide />
        <div className="flex-1">
          <Navbar />
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
