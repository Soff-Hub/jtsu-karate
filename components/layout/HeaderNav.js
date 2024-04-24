import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useTranslation } from "react-i18next";
import i18n from "../../util/i18n";
import SearchResult from "../elements/SearchResult";
import useDebounce from "../../util/useDebounce";
import client from "../../repositories/repository";
import { useDispatch, useSelector } from "react-redux";
import { setLanguageData, setTextSize } from "../../store";
import SwitchButton from "../elements/SwitchButton";

const HeaderNav = () => {
  const [scroll, setScroll] = useState(0);
  const [search, setSearch] = useState(null);
  const { textSize, langauge, theme } = useSelector((state) => state?.textClass);
  const [lang, setLang] = useState(langauge);
  const [searchResult, setSearchResult] = useState(null);
  const searchVal = useDebounce(search, 500);
  const [open, setOPen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation();
  const [openCancel, setOpenCancel] = useState(true);

  const handleChangeLang = (lang) => {
    setLang(lang);
    dispatch(setLanguageData(lang));
  };

  const handleChange = (text) => {
    dispatch(setTextSize(text));
  };

  const globalSearch = async (key) => {
    const resp = await client.get(`common/global-search/?search=${key}`);
    setSearchResult(resp.data);

    if (router.pathname.split("/").includes("search")) {
      setSearchResult(null);
      router.push(`/search/${key}`);
    }

    if (resp.data?.length === 0) {
      setTimeout(() => {
        setSearchResult(null);
      }, 2000);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  useEffect(() => {
    if (!searchVal || searchVal === "") {
      setSearch(null);
    } else {
      globalSearch(searchVal);
    }
  }, [searchVal]);

  useEffect(() => {
    i18n.changeLanguage(langauge);
  }, [lang]);

  return (
    <>
      <header
        style={{
          backgroundColor:!theme ?  "black" : "#3d3e3f ",
      
          margin: "0",
          padding: "0",
          height: "50px",
          ...(scroll
            ? { position: "fixed", top: "0", zIndex: "1000" }
            : {}),
        }}
        className="header sticky-bar"
      >
        <div className="container">
          <div
            className="main-header d-flex justify-content-xl-between justify-content-center"
            style={{ position: "relative" }}
          >
            <div className="header-nav d-flex align-items-center">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="d-flex  gap-5 align-items-center">
                  <li>
                    <a
                      className="text-white"
                      href="https://jtsu.uz/uz"
                      target="_blank"
                    >
                      <strong className="color-linear">{t("JTSU.UZ")}</strong>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+998707171776" target="_blank">
                      <span className="text-white">
                        <i className="fa-solid fa-phone-volume mx-1"></i>{" "}
                        <strong>+998707171776</strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto: info@jtsu.uz" target="_blank">
                      <span className="text-white">
                        <i className="fa-solid fa-envelope mx-1"></i>{" "}
                        <strong> info@jtsu.uz</strong>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="d-flex gap-2 mx-3  w-full align-items-center justify-content-center ">
              <SwitchButton /> 
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#fff", padding: "10px 0" }}
                >
                  <p
                    className="d-inline"
                    style={{ fontWeight: "500", fontSize: textSize }}
                  >
                    <i className="fa-solid fa-glasses mx-1"></i>{" "}
                    {textSize === "12px"
                      ? "A" + " " + 12 + " " + "PX"
                      : textSize === "14px"
                      ? "A" + " " + 14 + " " + "PX"
                      : textSize === "16px"
                      ? "A" + " " + 16 + " " + "PX"
                      : textSize === "18px"
                      ? "A" + " " + 18 + " " + "PX"
                      : textSize === "20px"
                      ? "A" + " " + 20 + " " + "PX"
                      : t("Maxsus imkoniyatlar")}
                  </p>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-sm "
                  aria-labelledby="dropdownMenu2"
                >
                  <li>
                    <button
                      onClick={() => handleChange("12px")}
                      className="dropdown-item"
                      type="button"
                      style={{ fontSize: "12px", padding: "5px 10px" }}
                    >
                      A 12PX
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleChange("14px")}
                      className="dropdown-item"
                      type="button"
                      style={{ fontSize: "14px", padding: "6px 10px" }}
                    >
                      A 14PX
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleChange("16px")}
                      className="dropdown-item"
                      type="button"
                      style={{ fontSize: "16px", padding: "7px 10px" }}
                    >
                      A 16PX
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleChange("18px")}
                      className="dropdown-item"
                      type="button"
                      style={{ fontSize: "18px", padding: "8px 10px" }}
                    >
                      A 18PX
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleChange("20px")}
                      className="dropdown-item"
                      type="button"
                      style={{ fontSize: "20px", padding: "9px 10px" }}
                    >
                      A 20PX
                    </button>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#fff" }}
                >
                  <p
                    className="d-inline"
                    style={{ fontWeight: "500", fontSize: textSize }}
                  >
                    {" "}
                    {langauge?.toUpperCase()}
                  </p>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-sm dropdown-menu_width "
                  aria-labelledby="dropdownMenu2"
                >
                  <li>
                    <button
                      onClick={() => handleChangeLang("uz")}
                      className="dropdown-item"
                      type="button"
                      style={{ fontSize: textSize }}
                    >
                      UZ
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleChangeLang("ru")}
                      className="dropdown-item"
                      type="button"
                      style={{ fontSize: textSize }}
                    >
                      RU
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleChangeLang("en")}
                      className="dropdown-item"
                      type="button"
                      style={{ fontSize: textSize }}
                    >
                      EN
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <strong
                  style={{ cursor: "pointer" }}
                  onClick={() => setOPen(true)}
                >
                  <i className="fa-solid fa-search text-white"></i>
                </strong>
              </div>
              <div className="nav-main-menu d-none d-xl-block">
                <div
                  className="btn btn-linear hover-up hover-shadow"
                  style={{ padding: "5px 10px", fontSize: "13px" }}
                >
                  <strong
                    className="d-flex align-items-center gap-1 text-white"
                    style={{ cursor: "not-allowed", fontSize: textSize }}
                  >
                    {t("Kirish")}{" "}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={open ? "background_color_Input" : "d-none"}>
        <p onClick={() => setOPen(false)}>
          <i className="fa-solid fa-xmark text-white fa-2x class_xmark"></i>
        </p>

        <div
          onClick={() => setOPen(true)}
          className="container d-flex justify-content-center"
        >
          <label className="label_input ">
            <input
              onInput={(e) => {
                const value = e.target.value.trim();
                setSearch(value);
              }}
              onChange={() => setOpenCancel(true)}
              onFocus={() => setOpenCancel(true)}
              onBlur={() => {
                setTimeout(() => {
                  setOpenCancel(false);
                }, 1000);
              }}
              className="global-search-input"
              placeholder={`${t("Qidirish")}...`}
            />
            <span className="icon_search cursor-pointer">
              <i className="fa-solid fa-search"></i>
            </span>

            {openCancel && search && (
              <SearchResult searchVal={searchVal} searchResult={searchResult} />
            )}
          </label>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
