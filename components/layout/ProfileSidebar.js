import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function ProfileSidebar() {
  // bg-gray-850 border-gray-800
  const { pathname } = useRouter();
  const { logout, initAuth } = useContext(AuthContext);
  const { t } = useTranslation();

  useEffect(() => {
    initAuth();
    if (!localStorage.getItem("token")) {
      logout();
    }
  }, []);

  return (
    <div className="col-md-2 m-0 p-2 bg-white" style={{ borderRadius: "5px" }}>
      <div>
        <img
          src="/assets/imgs/ava.jpg"
          style={{ borderRadius: "5px" }}
          className="border-gray-800"
        />
      </div>

      <div className="d-flex flex-column gap-2 mt-4">
        <div>
          <Link
            className={`btn ${
              pathname.startsWith("/profile/user")
                ? "btn-linear"
                : "bg-gray-850"
            } hover-up py-2 w-100 text-start`}
            href={"/profile/user"}
          >
            {t("Umumiy ma'lumot")}
          </Link>
        </div>
        <div>
          <Link
            className={`btn ${
              pathname.startsWith("/profile/imiyozlar")
                ? "btn-linear"
                : "bg-gray-850"
            } hover-up py-2 w-100 text-start`}
            href={"/profile/imiyozlar"}
          >
            {t("Mening imtiyozlarim")}
          </Link>
        </div>
      </div>
    </div>
  );
}
