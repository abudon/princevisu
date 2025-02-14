import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Routers from '../routes/Routers'
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Routers /> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layouts;
