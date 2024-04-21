import Link from "next/link";
import React from "react";
import useLead from "/hooks/UseLead";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { nameRef, phoneRef, leadStatus, handleSubmit } = useLead();
  const { textSize } = useSelector((state) => state?.textClass);
  const { t } = useTranslation();

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
                <p
                  style={{ fontSize: textSize, lineHeight: "24px" }}
                  className="mb-20 mt-20  color-gray-500 "
                >
                {t("© Saytdagi materiallardan to`liq yoki qisman foydalanilganda, ushbu resursga havola etilishi shart © 2024 O`zbekiston davlat jismoniy tarbiya va sport universiteti PROACTIVE MEDIA  tomonidan ishlab chiqildi")}
                </p>
                <h6
                  style={{ fontSize: textSize, lineHeight: "24px" }}
                  className="color-white mb-5 "
                >
                  {t("Manzil")}
                </h6>
                <p
                  style={{ fontSize: textSize, lineHeight: "24px" }}
                  className="color-gray-500"
                >
                  {t("Toshkent viloyati, Chirchiq shahri, Sportchilar ko'chasi, 19-uy")}
                </p>
              </div>
              <div className="col-lg-4 mb-30">
                {/* <h6 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Categories</h6> */}
                {/* <div className="row">
                                    <div className="col-6">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Action</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Business</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Adventure</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Canada</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">America</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Curiosity</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Animal</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Dental</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Biology</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Design</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Breakfast</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Dessert</Link></li>
                                        </ul>
                                    </div>
                                </div> */}
              </div>
              <div className="col-lg-4 mb-30">
                <h4
                  style={{ fontSize: textSize, lineHeight: "24px" }}
                  className=" mb-30 color-whitep"
                >
                  {t("Ma'lumot olish")}
                </h4>
                <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                  {leadStatus ? (
                    <>
                      <h4
                        style={{ fontSize: textSize, lineHeight: "24px" }}
                        className="text-success"
                      >
                        <i className="fi fi-rr-paper-plane"> </i>
                        {t("So'rovingiz qabul qilindi, biz siz bilan tez orada  bog'lanamiz.")}
                      </h4>
                      <p
                        style={{ fontSize: textSize, lineHeight: "24px" }}
                        className="color-gray-50"
                      >
                        {t("Biz 9:00 dan 21:00 gacha ishlaymiz (dam olish kunlaridan tashqari)")}
                      </p>
                    </>
                  ) : (
                    <>
                      <p
                        style={{ fontSize: textSize, lineHeight: "24px" }}
                        className="color-gray-500 "
                      >
                        {t("* Arizani yuborishdan oldin, to'g'ri ma'lumot  kiritganingizga ishonch hosil qiling")}
                      </p>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            required
                            ref={nameRef}
                            className="input-name border-gray-500"
                            type="text"
                            placeholder={t("Ismingiz *")}
                            style={{ fontSize: textSize, lineHeight: "24px" }}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            maxLength="9"
                            required
                            ref={phoneRef}
                            className="input-email border-gray-500"
                            type="text"
                            placeholder={t("Telefon nomeringiz")}
                            style={{ fontSize: textSize, lineHeight: "24px" }}
                          />
                        </div>
                        <div className="form-group mt-20">
                          <button
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
                  )}
                </div>
              </div>
            </div>
            {/* <div className="footer-bottom border-gray-800">
                            <div className="row">
                                <div className="col-lg-5 text-center text-lg-start">
                                    <p className="text-base color-white wow animate__animated animate__fadeIn">© Created by<Link className="copyright" href="http://alithemes.com" target="_blank"> AliThemes.com</Link></p>
                                </div>
                                <div className="col-lg-7 text-center text-lg-end">
                                    <div className="box-socials">
                                        <div className="d-inline-block mr-30 wow animate__animated animate__fadeIn" data-wow-delay=".0s"><Link className="icon-socials icon-twitter color-gray-500" href="https://twitter.com">Twitter</Link></div>
                                        <div className="d-inline-block mr-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="icon-socials icon-linked color-gray-500" href="https://www.linkedin.com">LinkedIn</Link></div>
                                        <div className="d-inline-block wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <Link className="icon-socials icon-insta color-gray-500" href="https://www.instagram.com">Instagram</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
