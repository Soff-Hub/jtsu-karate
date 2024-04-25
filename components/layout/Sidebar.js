import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Sidebar = ({ openClass }) => {
  const { textSize, theme } = useSelector((state) => state?.textClass);
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}
        style={{
          maxHeight: "100vh",
          filter: theme ? "grayscale(100%)" : "",
        }}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo border-gray-800 ">
              <Link className="d-flex align-itemd-start" href="/">
                <img
                  className="logo-day"
                  alt="GenZ"
                  src="/assets/imgs/page/logo/logo-1.png"
                />
              </Link>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
