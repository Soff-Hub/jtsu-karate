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
      const resp = await client.get("common/video-tutorials/", {
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
        <title>JTSU | Karate bo'yicha video qo'llanmalar</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                <div className="row align-items-end mt-50">
                  <div className="col-lg-9 mb-20 text-center mx-auto">
                    <div className="d-inline-block position-relative">
                      <h2 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">
                        {t("Karate bo'yicha video qo'llanmalar")}
                      </h2>
                    </div>
                    <p
                      style={{ fontSize: textSize, lineHeight: "26px" }}
                      className="color-gray-500 text-base wow animate__animated animate__fadeIn"
                    >
                      {t(
                        "Karate sport turi bo'yicha Respublika bo'yicha yagona ochiq bepul video qo'llanmalar portali istalgan vaqtda sport bilan mustaqil shug'ullaning"
                      )}
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <div className="border-bottom border-gray-800 mt-10 mb-30" />
                  </div>
                </div>
                <div
                  className="row mb-10"
                  data-masonry='{"percentPosition": true }'
                >
                  {videos.map((item, i) => (
                    <div className="col-lg-4" key={i}>
                      <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                        <div className="card-image mb-10">
                          <Link href={`/videolar/${item.id}`}>
                            <img src={`${item.image}`} alt="Genz" />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link href={`/videolar/${item.id}`}>
                            <h5 className="color-white mt-10">{item.title}</h5>
                          </Link>
                          <div className="row align-items-center mt-10">
                            <p className="text-truncate">{item?.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
