import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const { t } = useTranslation();
  const { initAuth } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const { query, push } = useRouter();

  const showErrorClbck = (err) => {
    setError(err.response?.data?.error);
  };

  const handleLogin = async (token) => {
    // await login({ pinfl }, showErrorClbck);

    localStorage.setItem("token", token);
    await initAuth();
    if (localStorage.getItem('returnUrl')) {
      return push(localStorage.getItem('returnUrl'));
    }
    push("/profile/user");
  };

  useEffect(() => {
    if (query?.error_msg) {
      setError(query?.error_msg);
    } else if (query?.token) {
      handleLogin(query?.token);
    }

    if (query?.returnUrl) {
      localStorage.setItem("returnUrl", query?.returnUrl);
    }
  }, [query]);

  return (
    <Layout>
      <div className="container">
        <div className="login-page py-5">
          <h1 className="color-gray-500 fs-2 text-center">
            {t("Tizimga kirish")}
          </h1>

          <form
            className="mx-auto"
            style={{ maxWidth: "360px" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="text-danger">{error}</p>
            <div className="form-group mt-20">
              <Link
                href={
                  "https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=karate-jtsu_uz&redirect_uri=https://admin.karate-jtsu.uz/oneid&scope=myportal&state=testState"
                }
                className="btn btn-linear hover-up w-100 py-2"
                type="submit"
                style={{ lineHeight: "24px", backgroundColor: "#0061d9" }}
              >
                <img
                  src="/assets/oneid.svg"
                  height={28}
                  style={{ verticalAlign: "middle" }}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
