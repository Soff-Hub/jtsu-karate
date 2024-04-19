import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { advantages } from "../../repositories/api";

const Header = ({ handleOpen, handleRemove, openClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  //   const [advantage, setAdvantage] = useState(null);

  const router = useRouter();
  console.log(router.asPath);

  function navbarApi() {
    advantages()
      .then((ress) => setAdvantage(ress.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  useEffect(() => {
    navbarApi();
  }, []);

  return (
    <>
      <header
        className={
          scroll
            ? "header sticky-bar bg-gray-900 stick"
            : "header sticky-bar bg-gray-900"
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-logo">
              <Link className="d-flex" href="/">
                <img
                  className="logo-night"
                  alt="GenZ"
                  src="/assets/imgs/page/logo/Soff Study white logo.png"
                />
                <img
                  className="d-none logo-day"
                  alt="GenZ"
                  src="/assets/imgs/page/logo/Soff Study dark logo.png"
                />
              </Link>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li>
                    <Link
                      className={`${router.asPath === "/" ? "active" : "color-gray-500"
                        }`}
                      href="/"
                    >
                      Asosiy Sahifa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${router.asPath === "/maqolalar"
                        ? "active"
                        : "color-gray-500"
                        }`}
                      href="/maqolalar"
                    >
                      Maqolalar
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${router.asPath === "/videolar"
                        ? "active"
                        : "color-gray-500"
                        }`}
                      href="/videolar"
                    >
                      Video qo'llanmalar
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${router.asPath === "/darsliklar"
                        ? "active"
                        : "color-gray-500"
                        }`}
                      href="/darsliklar"
                    >
                      Darsliklar
                    </Link>
                  </li>
                </ul>
              </nav>

            </div>
            <div className="header-right text-end">
              <Link
                className={`${router.asPath === "/page-contact"
                  ? "active"
                  : "color-gray-500"
                  }`}
                href="/page-contact"
              >
                Aloqa
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
