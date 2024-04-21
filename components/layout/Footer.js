import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import client from "../../repositories/repository";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const { langauge, textSize } = useSelector((state) => state?.textClass);
  const { t } = useTranslation();

  const [values, setValues] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const resp = await client.post("/common/connection/", values, {
        headers: {
          "Accept-language": langauge,
        },
      });
      toast(t("Muvaffaqiyatli"), {
        type: "success",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { marginTop: "30px" },
      });
    } catch (err) {
      toast(err?.response?.data?.msg, {
        type: "error",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { marginTop: "30px" },
      });
    }
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-1 bg-gray-850 border-gray-800">
            <div className="row">
              <div className="col-lg-4 mb-30">
                <Link
                  className="wow animate__animated animate__fadeInUp"
                  href="/"
                >
                  <img
                    className="logo-night"
                    alt="GenZ"
                    src="/assets/imgs/page/logo/logo-1.png"
                  />
                  <img
                    className="d-none logo-day"
                    alt="GenZ"
                    src="/assets/imgs/page/logo/logo-1.png"
                  />
                </Link>
                <h6
                  style={{ fontSize: textSize, lineHeight: "24px" }}
                  className="color-white mb-5 mt-30 "
                >
                  {t("Manzil")}
                </h6>
                <a
                  href="https://maps.app.goo.gl/eL577Z9vywX4CCJC6"
                  style={{ fontSize: textSize, lineHeight: "24px" }}
                  className="color-gray-500 "
                  target="_blank"
                >
                  {t(
                    "Toshkent viloyati, Chirchiq shahri, Sportchilar ko'chasi, 19-uy"
                  )}
                </a>
                <div className="mt-30 d-flex gap-4">
                  <span style={{ fontSize: "24px" }}>
                    {" "}
                    <a
                      target="_blank"
                      href="https://www.facebook.com/uzdjtsu.uzdjtsu"
                    >
                      <i className="fa-brands fa-instagram text-danger "></i>
                    </a>
                  </span>

                  <span style={{ fontSize: "24px" }}>
                    {" "}
                    <a href="https://t.me/uzdjtsu_rasmiy" target="_blank">
                      <i
                        style={{ color: "#0088cc" }}
                        className="fa-brands fa-telegram "
                      ></i>
                    </a>
                  </span>

                  <span style={{ fontSize: "24px" }}>
                    {" "}
                    <a href="https://twitter.com/uzdjtsu" target="_blank">
                      <i
                        style={{ color: "#1DA1F2" }}
                        className="fa-brands fa-twitter "
                      ></i>
                    </a>
                  </span>

                  <span style={{ fontSize: "24px" }}>
                    {" "}
                    <a
                      href="https://www.facebook.com/uzdjtsu.uzdjtsu"
                      target="_blank"
                    >
                      <i
                        style={{ color: "#1877F2" }}
                        className="fa-brands fa-facebook-f"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-lg-4 mb-30"></div>
              <div className="col-lg-4 mb-30">
                <h4
                  style={{ fontSize: textSize, lineHeight: "24px" }}
                  className=" mb-30 color-whitep"
                >
                  {t("Ma'lumot olish")}
                </h4>
                <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                  <>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          onChange={(e) =>
                            setValues((prev) => ({
                              ...prev,
                              full_name: e.target.value,
                            }))
                          }
                          required
                          className="input-name border-gray-500"
                          type="text"
                          placeholder={t("Ismingiz *")}
                          style={{ fontSize: textSize, lineHeight: "24px" }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          onChange={(e) =>
                            setValues((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          maxLength="13"
                          required
                          className="input-email border-gray-500"
                          type="text"
                          placeholder={t("Telefon nomeringiz")}
                          style={{ fontSize: textSize, lineHeight: "24px" }}
                        />
                      </div>
                      <div className="form-group mt-20">
                        <button
                          onClick={() =>
                            setValues((prev) => ({
                              ...prev,
                              type: "simple_connection",
                            }))
                          }
                          className="btn btn-linear hover-up"
                          type="submit"
                          style={{ fontSize: textSize, lineHeight: "24px" }}
                        >
                          {t("Yuborish")}
                          <i className="fi-rr-arrow-small-right" />
                        </button>
                      </div>
                    </form>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ToastContainer />
    </>
  );
};

export default Footer;
