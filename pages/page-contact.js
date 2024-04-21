import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import client from "../repositories/repository";

export default function Home() {
  const { t } = useTranslation();
  const [values, setValues] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const resp = await client.post("/common/connection/", values);
    } catch (err) {
      console.log(err?.response?.data?.msg);
    }
  }

  return (
    <>
      <Head>
        <title>Genz - Contact</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <div className="text-center mt-20">
                  <ul className="d-flex  gap-5 align-items-center justify-content-center">
                    <li>
                      <a
                        href="tel:+998707171776"
                        target="_blank"
                        style={{ fontSize: "18px" }}
                      >
                        <span>
                          <i className="fa-solid fa-phone-volume mx-1"></i>{" "}
                          <strong>+998707171776</strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto: info@jtsu.uz"
                        style={{ fontSize: "18px" }}
                        target="_blank"
                      >
                        <span>
                          <i className="fa-solid fa-envelope mx-1"></i>{" "}
                          <strong> info@jtsu.uz</strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://maps.app.goo.gl/eL577Z9vywX4CCJC6"
                        style={{ fontSize: "18px" }}
                        target="_blank"
                      >
                        <span>
                          <i className="fa-solid fa-envelope mx-1"></i>{" "}
                          <strong>
                            {t(
                              "Toshkent viloyati, Chirchiq shahri, Sportchilar ko'chasi, 19-uy"
                            )}
                          </strong>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="box-map mt-30 mb-50">
                  <iframe
                    className="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.0879799289446!2d69.5289285508144!3d41.437312597502206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefb04418e5385%3A0xb7ec275ca7b0aae8!2sGosudarstvennyy%20Universitet%20Fizicheskoy%20Kul&#39;tury%20Respubliki%20Uzbekistan!5e0!3m2!1sen!2s!4v1713704285914!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="form-contact">
                  <div className="text-center">
                    <h3 className="color-linear d-inline-block mb-10">
                      {t("Bizga liniya qoldiring")}
                    </h3>
                    <p className="text-xs color-gray-500">
                      {t(
                        "Sizning elektron pochta manzilingiz nashr etilmaydi. Majburiy maydonlar belgilangan *"
                      )}
                    </p>
                  </div>

                  <form className="row mt-50" onSubmit={handleSubmit}>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          onChange={(e) =>
                            setValues((prev) => ({
                              ...prev,
                              full_name: e.target.value,
                            }))
                          }
                          required
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                          type="text"
                          placeholder={t("Ismingiz *")}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          onChange={(e) =>
                            setValues((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          required
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                          type="text"
                          placeholder={t("Telefon raqami *")}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          onChange={(e) =>
                            setValues((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                          rows={5}
                          placeholder={t("Xabar")}
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="text-center mb-50">
                        <button
                          onClick={() =>
                            setValues((prev) => ({
                              ...prev,
                              type: "full_connection",
                            }))
                          }
                          type="submit"
                          className="btn btn-linear btn-load-more btn-radius-8 hover-up"
                        >
                          {t("Xabar yuborish")}
                          <i className="fi-rr-arrow-small-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
