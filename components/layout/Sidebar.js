import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = ({ openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const router = useRouter();

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo border-gray-800">
              <Link className="d-flex" href="/">
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
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu">
                    <li>
                      <Link
                        className={router.asPath === "/" ? "active" : ""}
                        href="/"
                      >
                        Asosiy Sahifa
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          router.asPath === "/afzalliklarList" ? "active" : ""
                        }
                        href="/afzalliklarList"
                      >
                        Afzalliklarimiz
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          router.asPath === "/page-about" ? "active" : ""
                        }
                        href="/page-about"
                      >
                        Maqolalar
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          router.asPath === "/page-portfolio" ? "active" : ""
                        }
                        href="/page-portfolio"
                      >
                        Kurslar
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          router.asPath === "/page-portfolio-2" ? "active" : ""
                        }
                        href="/page-portfolio-2"
                      >
                        Galereya
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          router.asPath === "/page-contact" ? "active" : ""
                        }
                        href="/page-contact"
                      >
                        Aloqa
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
