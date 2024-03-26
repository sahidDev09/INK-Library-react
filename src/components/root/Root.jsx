import Footer from "../Header/Footer";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className=" container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Root;
