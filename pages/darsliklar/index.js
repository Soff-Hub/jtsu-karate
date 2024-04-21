import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import client from "../../repositories/repository";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const { textSize, langauge } = useSelector((state) => state?.textClass);
  const { t } = useTranslation();

  async function getVideos() {
    try {
      const resp = await client.get("common/text-books/", {
        headers: {
          "Accept-language": langauge,
        },
      });
      setVideos(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getVideos();
  }, [langauge]);

  return (
    <>
      <Head>
        <title>Genx - Blog archive 3</title>
      </Head>
      <Layout>

        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto col-lg-12">
              <div className="row mt-30">
                <div className="col-lg-12">
                  <>
                    <h2 className="color-linear d-inline-block mb-10">
                      {t("Kitob va darsliklar")}
                    </h2>
                    <p className="text-lg color-gray-500">
                      {t(
                        "Karate (yaponcha — hech narsasiz qoʻl bilan) — qurolsiz oʻzini-oʻzi himoya qilish, inson tanasining"
                      )}{" "}
                      <br />
                      {t(
                        "nozik joylariga qoʻl yoki oyoq bilan zarbalar berishga asoslangan sport kurashining bir turi."
                      )}
                    </p>
                    <div id="postList" className="box-list-posts mt-30">
                      {videos &&
                        videos.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="card-list-posts wow animate__animated animate__fadeIn mb-30"
                            >
                              <div className="card-image hover-up">
                                <Link
                                  href={`/darsliklar/${item.id}`}
                                  className="h-100"
                                >
                                  <img
                                    className="h-100"
                                    src={item.image}
                                    alt="mentor"
                                  />
                                </Link>
                              </div>
                              <div
                                className="card-info"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                  padding: "10px 0",
                                }}
                              >
                                <div>
                                  <Link
                                   href={`/darsliklar/${item.id}`}
                                  >
                                    <h4
                                      className="color-white"
                                      style={{ cursor: "pointer" }}
                                    >
                                      {item.title}
                                    </h4>
                                  </Link>
                                  <Link
                                    className="d-flex align-items-center"
                                    href={`/darsliklar/${item?.id}`}
                                  >
                                    <p
                                      className="mt-15 mb-20 color-white"
                                      style={{
                                        fontSize: 14,
                                      }}
                                    >
                                      {item.description}
                                    </p>
                                  </Link>
                                </div>
                                <div className="row">
                                  <div className="col-7 d-flex">
                                    <div className="color-gray-700 text-sm mr-15">
                                      <span className="color-gray-700 text-sm timeread">
                                        {item.created_at}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
