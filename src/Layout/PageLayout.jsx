import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const PageLayout = () => {
  return (
    <>
      <div className="relative h-screen">
        <Navbar />
       <Outlet/>
      </div>
    </>
  );
};

export default PageLayout;
