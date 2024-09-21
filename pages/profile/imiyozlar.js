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
              <p className="mb-3 mt-1 fs-4">{t("Mening imtiyozlarim")}</p>

              {user?.privileges?.length > 0
                ? user?.privileges.map((el) => (
                    <>
                      <div
                        className="row bg-gray-850 px-2 w-100 ms-1 pt-3"
                        style={{ borderRadius: "6px" }}
                      >
                        <div className="col-md-4 mb-3">
                          {t("Tashkilot nomi")}
                        </div>
                        <div className="col-md-8 mb-3">
                          {el?.organization_name}
                        </div>

                        <div className="col-md-4 mb-3">{t("Murabbiy")}</div>
                        <div className="col-md-8 mb-3">
                          {el?.coach_person_name}
                        </div>

                        <div className="col-md-4 mb-3">{t("Sport turi")}</div>
                        <div className="col-md-8 mb-3">
                          {el?.sport_title_name}
                        </div>

                        <div className="col-md-4 mb-3">
                          {t("Hujjat raqami")}
                        </div>
                        <div className="col-md-8 mb-3">{el?.doc_number}</div>

                        <div className="col-md-4 mb-3">
                          {t("Hujjat berilgan sana")}
                        </div>
                        <div className="col-md-8 mb-3">{el?.doc_date}</div>

                        <div className="col-md-4 mb-3">
                          {t("Hujjat yaroqlik sanasi")}
                        </div>
                        <div className="col-md-8 mb-3">
                          {el?.doc_expire_date}
                        </div>

                        <div className="col-md-4 mb-3">
                          {t("Sport bo'limi")}
                        </div>
                        <div className="col-md-8 mb-3">
                          {el?.sport_type_classifier_name}
                        </div>

                        <div className="col-md-4 mb-3">{t("Kategoriya")}</div>
                        <div className="col-md-8 mb-3">
                          {el?.sport_type_classifier_discipline_name}
                        </div>

                        <div className="col-md-4 mb-3">
                          {t("Musobaqa turi")}
                        </div>
                        <div className="col-md-8 mb-3">
                          {el?.sport_event_type_name}
                        </div>
                      </div>
                    </>
                  ))
                : t("Sizda imtiyozlar mavjud emas")}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
