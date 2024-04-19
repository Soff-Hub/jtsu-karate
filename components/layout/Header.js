import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { advantages } from "../../repositories/api";
import { useTranslation } from "react-i18next";
import i18n from "../../util/i18n";

const Header = ({ handleOpen, handleRemove, openClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  const router = useRouter();
  const { t } = useTranslation()

  const handleChangeLang = (lang) => {

    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

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
                      {t("Asosiy Sahifa")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${router.pathname.split('/').includes('maqolalar')
                        ? "active"
                        : "color-gray-500"
                        }`}
                      href="/maqolalar"
                    >
                      {t("Maqolalar")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${router.pathname.split('/').includes('videolar')
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
                      className={`${router.pathname.split('/').includes('darsliklar')
                        ? "active"
                        : "color-gray-500"
                        }`}
                      href="/darsliklar"
                    >
                      {t("Darsliklar")}
                    </Link>
                  </li>
                </ul>
              </nav>

            </div>
            <div className="header-right text-end">
              <select value={i18n.language} onChange={(e) => handleChangeLang(e.target.value)}>
                <option value={'uz'}>uz</option>
                <option value={'ru'}>ru</option>
                <option value={'en'}>en</option>
              </select>
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
