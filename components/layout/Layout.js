import React, { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import HeaderNav from "./HeaderNav";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Layout = ({ children }) => {
  const [openClass, setOpenClass] = useState("");
  const { theme } = useSelector((state) => state?.textClass);
  const { t } = useTranslation();

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };

  return (
    <>
      {openClass && <div className="body-overlay-1" onClick={handleRemove} />}

      <HeaderNav />
      <Header
        handleOpen={handleOpen}
        handleRemove={handleRemove}
        openClass={openClass}
      />
      <Sidebar openClass={openClass} />
      <main className={theme ? "main theme-day" : "main"}>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
