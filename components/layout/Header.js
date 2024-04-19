import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { advantages } from "../../repositories/api";
import { useTranslation } from "react-i18next";
import i18n from "../../util/i18n";
import SearchResult from "../elements/SearchResult";
import useDebounce from "../../util/useDebounce";
import client from "../../repositories/repository";

const Header = ({ handleOpen, handleRemove, openClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const [search, setSearch] = useState(null)
  const [searchResult, setSearchResult] = useState(null)
  const searchVal = useDebounce(search, 500)

  const router = useRouter();
  const { t } = useTranslation()

  const handleChangeLang = (lang) => {

    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  const globalSearch = async (key) => {
    const resp = await client.get(`common/global-search/?search=${key}`)
    setSearchResult(resp.data);

    if (router.pathname.split('/').includes('search')) {
      setSearchResult(null)
      router.push(`/search/${key}`)
    }

    if (resp.data?.length === 0) {
      setTimeout(() => {
        setSearchResult(null)
      }, 2000);
    }
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
    // globalSearch('')
    if (!searchVal || searchVal === "") {
      setSearch(null)
    } else {
      globalSearch(searchVal)
    }
  }, [searchVal]);

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
          <div className="main-header" style={{ position: 'relative' }}>
            <div className="header-logo">
              <Link className="d-flex align-itemd-start" href="/">
                <img
                  className="logo-day"
                  alt="GenZ"
                  src="/assets/imgs/page/logo/logo-1.png"
                />
              </Link>
            </div>
            <div className="header-nav d-flex align-items-center">
              <label className="global-search-label">
                <input className="global-search-input" onChange={(e) => setSearch(e.target.value)} placeholder="Qidirish..." />
              </label>
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
                  <li>
                    <Link
                      className={`${router.pathname.split('/').includes('maqolalar')
                        ? "active"
                        : "color-gray-500"
                        }`}
                      href="/maqolalar"
                    >
                      {t("Hujjatlar")}
                    </Link>
                  </li>
                </ul>
              </nav>

              {searchResult && !router.pathname.split('/').includes('search') && <SearchResult searchVal={searchVal} searchResult={searchResult} />}

            </div>
            <div className="header-right text-end d-flex align-items-center">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  <p className="d-inline" style={{ fontWeight: '500' }}> {i18n.language.toUpperCase()}</p>
                </button>
                <ul className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenu2">
                  <li><button onClick={() => handleChangeLang('uz')} className="dropdown-item" type="button">Uz</button></li>
                  <li><button onClick={() => handleChangeLang('ru')} className="dropdown-item" type="button">Ru</button></li>
                  <li><button onClick={() => handleChangeLang('en')} className="dropdown-item" type="button">En</button></li>
                </ul>
              </div>
              {/* <select className="form-select form-select-sm d-inline-block" value={i18n.language} onChange={(e) => handleChangeLang(e.target.value)}>
                <option value={'uz'}>uz</option>
                <option value={'ru'}>ru</option>
                <option value={'en'}>en</option>
              </select> */}
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
