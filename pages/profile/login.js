import React, { useContext, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { t } = useTranslation();
  const [pinfl, setPinfl] = useState("");
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const showErrorClbck = (err) => {
    setError(err.response?.data?.error);
  };

  const handleLogin = async () => {
    await login({ pinfl }, showErrorClbck);
  };

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
            onSubmit={(e) => (e.preventDefault(), handleLogin())}
          >
            <div className="form-group">
              <input
                required
                className="border-gray-500 px-3 py-2 fs-6 w-100"
                placeholder={t("PINFL raqamingiz")}
                style={{
                  lineHeight: "24px",
                  borderRadius: "8px",
                  appearance: "none",
                }}
                value={pinfl}
                onChange={(e) => {
                  setPinfl(e.target.value);
                  setError(null);
                }}
                autoComplete="off"
                name="pinfl"
                maxLength={14}
              />
              <p style={{ color: "red" }}>{error ? error : ""}</p>
            </div>

            <div className="form-group mt-20">
              <button
                className="btn btn-linear hover-up w-100 py-2"
                type="submit"
                style={{ lineHeight: "24px" }}
              >
                {t("Kirish")}
                <i className="fi-rr-arrow-small-right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
