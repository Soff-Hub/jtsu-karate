import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import client from "../../repositories/repository";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import TextBook_placeholder from "../../components/placeholder/textBook_placeholder";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const { langauge } = useSelector((state) => state?.textClass);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  async function getVideos() {
    try {
      setLoading(true);
      const resp = await client.get("common/text-books/", {
        headers: {
          "Accept-language": langauge,
        },
      });
      setVideos(resp.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
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
                      {t("O'quv adabiyotlar")}
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
                      {loading
                        ? Array(20)
                            .fill(0)
                            .map((_, index) => <TextBook_placeholder />)
                        : videos &&
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
                                    <Link href={`/darsliklar/${item.id}`}>
                                      <h4
                                        className="color-linear"
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
                                        className="mt-15 mb-20 color-gray-500"
                                        style={{
                                          fontSize: 14,
                                          textAlign:"justify"
                                        }}
                                      >
                                        {item.description}
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="row">
                                    <div className="col-7 d-flex">
                                      <div className="color-gray-500 text-sm mr-15">
                                        <span className="color-gray-500 text-sm timeread">
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
