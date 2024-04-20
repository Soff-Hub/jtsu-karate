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

const HeaderNav = () => {
  const [scroll, setScroll] = useState(0);
  const [search, setSearch] = useState(null);
  const { textSize, langauge } = useSelector((state) => state?.textClass);
  const [lang, setLang] = useState(langauge);
  const [searchResult, setSearchResult] = useState(null);
  const searchVal = useDebounce(search, 500);
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation();

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
          backgroundColor: "black",
          margin: "0",
          padding: "0",
          height: "50px",
        }}
        className={scroll ? "header sticky-bar stick" : "header sticky-bar "}
      >
        <div className="container" style={{ padding: "0" }}>
          <div className="main-header" style={{ position: "relative" }}>
            <div
              className="header-nav d-flex align-items-center"
              style={{ width: "100%" }}
            >
              <label className="global-search-label" style={{ width: "60%" }}>
                <input
                  style={{
                    fontSize: textSize,
                    width: "100%",
                    height: "35px",
                    borderRadius: "5px",
                    padding: "0 15px",
                  }}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={`${t("Qidirish")}...`}
                />
                {searchResult &&
                  !router.pathname.split("/").includes("search") && (
                    <SearchResult
                      searchVal={searchVal}
                      searchResult={searchResult}
                    />
                  )}
              </label>
            </div>
            <div className="d-flex gap-3">
              <select
                style={{
                  backgroundColor: "black",
                  border: "none",
                  color: "#fff",
                }}
                className="mx-2"
                onChange={(e) => handleChange(e.target.value)}
              >
                <option selected disabled>
                  Maxsus imkoniyatlar
                </option>
                <option value={"12px"}>A0</option>
                <option value={"14px"}>A1</option>
                <option value={"16px"}>A2</option>
                <option value={"18px"}>A3</option>
                <option value={"20px"}>A4</option>
              </select>
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
                  className="dropdown-menu dropdown-menu-sm"
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNav;
