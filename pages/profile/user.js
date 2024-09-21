import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import ProfileSidebar from "../../components/layout/ProfileSidebar";
import { AuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container" style={{ paddingTop: "40px" }}>
        <div className="row px-3 gap-4 justify-content-center">
          <ProfileSidebar />

          <div className="col-md-9 border-gray-800 bg-white">
            <div className="p-2 d-flex flex-column gap-3">
              <p className="mb-3 mt-1 fs-4">{t("Umumiy ma'lumot")}</p>
              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("F.I.O")}</div>
                <div className="col-md-6">{user?.full_name}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("PINFL raqam")}</div>
                <div className="col-md-6">{user?.pinfl}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Sportchi passport idsi")}</div>
                <div className="col-md-6">{user?.athlete_passport_id}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">
                  {t("Sportchi passport seriya raqami")}
                </div>
                <div className="col-md-6">{user?.athlete_passport_series}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Murabbiy F.I.O")}</div>
                <div className="col-md-6">{user?.coach_person_name}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Qatnashgan chempionati")}</div>
                <div className="col-md-6">{user?.competition_type_name}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Hujjat berilgan sanasi")}</div>
                <div className="col-md-6">{user?.doc_date || "-"}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Hujjat yaroqlik sanasi")}</div>
                <div className="col-md-6">{user?.doc_expire_date || "-"}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Hujjat raqami")}</div>
                <div className="col-md-6">{user?.doc_number}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Tashkilot nomi")}</div>
                <div className="col-md-6">{user?.organization_name}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Musobaqa turi")}</div>
                <div className="col-md-6">{user?.sport_event_type_name}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Olgan o'rni")}</div>
                <div className="col-md-6">{user?.sport_rank_name}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Qatnashgan sport nomi")}</div>
                <div className="col-md-6">{user?.sport_title_name}</div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Kategoriya")}</div>
                <div className="col-md-6">
                  {user?.sport_type_classifier_discipline_name}
                </div>
              </div>

              <div
                className="row bg-gray-850 p-2 w-100 ms-1"
                style={{ borderRadius: "6px" }}
              >
                <div className="col-md-6">{t("Sport turi")}</div>
                <div className="col-md-6">
                  {user?.sport_type_classifier_name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
