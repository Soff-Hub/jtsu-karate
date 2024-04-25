import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Header = ({ handleOpen, handleRemove, openClass }) => {
  const [scroll, setScroll] = useState(0);
  const { textSize, theme } = useSelector((state) => state?.textClass);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  return (
    <>
      <header
        style={{
          margin: "0",
          filter: theme ? "grayscale(100%)" : "",
          borderTop:theme ? "1px solid #fff" : "",
          ...(scroll ? { position: "fixed", top: "50px", zIndex: "999" } : {}),
        }}
        className={`header sticky-bar bg-gray-900  `}
      >
        <div className="container">
          <div className="main-header d-flex justify-content-between">
            <div className="header-logo">
              <Link className="d-flex align-itemd-start" href="/">
                <img
                  className="logo-day"
                  alt="GenZ"
                  src="/assets/imgs/page/logo/logo-1.png"
                />
              </Link>
            </div>
            <nav className="nav-main-menu d-none d-xl-block">
              <ul
                className="main-menu"
                style={{ display: "flex", gap: "15px" }}
              >
                <li>
                  <Link
                    style={{ fontSize: textSize }}
                    className={`${
                      router.asPath === "/" ? "active " : "color-gray-500"
                    }`}
                    href="/"
                  >
                    {t("Asosiy Sahifa")}
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ fontSize: textSize }}
                    className={`${
                      router.pathname.split("/").includes("videolar")
                        ? "active"
                        : "color-gray-500"
                    }`}
                    href="/videolar"
                  >
                    {t("Video qo'llanmalar")}
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ fontSize: textSize }}
                    className={`${
                      router.pathname.split("/").includes("darsliklar")
                        ? "active"
                        : "color-gray-500"
                    }`}
                    href="/darsliklar"
                  >
                    {t("O'quv adabiyotlar")}
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ fontSize: textSize }}
                    className={`${
                      router.pathname.split("/").includes("maqolalar")
                        ? "active"
                        : "color-gray-500"
                    }`}
                    href="/maqolalar"
                  >
                    {t("Hujjatlar")}
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ fontSize: textSize }}
                    className={`${
                      router.asPath === "/page-contact"
                        ? "active"
                        : "color-gray-500"
                    }`}
                    href="/page-contact"
                  >
                    {t("Aloqa")}
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className={`burger-icon burger-icon-white ${
                openClass && "burger-close"
              }`}
              onClick={() => {
                openClass ? handleRemove() : handleOpen();
              }}
            >
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
