import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import TrendingTopic from "../components/slider/TrendingTopic";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import client from "../repositories/repository";
import { useSelector } from "react-redux";
import Card_skeleton from "../components/placeholder/card_skeleton";

export default function Home() {
  const [video, setVideo] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const { textSize, langauge } = useSelector((state) => state?.textClass);

  const { t } = useTranslation();

  async function getVideos() {
    try {
      setLoading2(true);
      const resp = await client.get(`common/video-tutorials/`, {
        headers: {
          "Accept-language": langauge,
        },
      });
      setVideo(resp.data);
    } catch (err) {
      console.log(err);
    }
    setLoading2(false);
  }

  async function getNews() {
    try {
      setLoading(true);
      const resp = await client.get(`common/text-books/`, {
        headers: {
          "Accept-language": langauge,
        },
      });
      setNews(resp.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    getVideos();
    getNews();
  }, [langauge]);

  return (
    <>
      <Head>
        <title>{t("JTSU - Asosiy sahifa")}</title>
      </Head>
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 mx-auto">
                <div
                  className="banner banner-home2"
                  style={{ position: "relative !important" }}
                >
                  <div className="hero-content"></div>
                  <div className="hero-content-overlay"></div>
                  <div className="text-center">
                    <h6
                      className="color-gray-600"
                      style={{ fontSize: textSize }}
                    >
                      {t("Xush kelibsiz")}
                    </h6>
                    <h3 style={{ color: "white" }}>
                      {t(
                        "O'zbekiston Davlat Jismoniy Tarbiya va Sport Universiteti ochiq"
                      )}
                    </h3>
                  </div>
                </div>

                <div className="text-center mt-50">
                  <h3 className="mb-10" style={{ color: "white" }}>
                    {t("Sportchilarimiz")}
                  </h3>
                  <p style={{ color: "white", fontSize: textSize }}>
                    {t(
                      "Jahon arenalarida faxrli yutuqlarni egallab, Yurtimiz bayrog'ini ko'tarayotkan sportchilarimiz"
                    )}
                  </p>
                </div>
                <div className="mb-70 mt-30">
                  <div className="box-topics box-topics-2 p-0 border-gray-800 bg-gray-850">
                    <div className="row w-full">
                      <div className="col-lg-12">
                        <div className="box-swiper">
                          <TrendingTopic />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-60">
                  <div className="col-lg-12 mb-20 text-center">
                    <h3 className="color-linear d-inline-block mb-10">
                      {t("Darsliklar")}
                    </h3>
                    <p
                      className="text-lg color-gray-500"
                      style={{ fontSize: textSize }}
                    >
                      {t("Karate sohasidagi darsliklar bilan tanishing")}
                    </p>
                  </div>
                  {loading
                    ? Array(3)
                        .fill(0)
                        .map((_, index) => <Card_skeleton />)
                    : news.map((event) => (
                        <div
                          key={event.id}
                          className="col-lg-4 wow animate__animated animate__fadeIn"
                          data-wow-delay={0}
                        >
                          <div className="card-blog-1 hover-up">
                            <div className="card-image">
                              <Link href={`/darsliklar/${event?.id}`}>
                                <img
                                  src={event?.image}
                                  alt="Genz"
                                  style={{ objectFit: "contain" }}
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link href={`/darsliklar/${event?.id}`}>
                                <h5
                                  className="color-white"
                                  style={{
                                    fontSize: textSize,
                                    lineHeight: "24px",
                                  }}
                                >
                                  {event?.title}
                                </h5>
                              </Link>

                              <div className="row align-items-center mt-5">
                                <p
                                  style={{
                                    maxHeight: "56px",
                                    overflow: "hidden",
                                  }}
                                >
                                  {event?.description}
                                </p>
                              </div>
                              <div className="row align-items-center mt-10">
                                <p className="text-truncate">
                                  {event?.created_at}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
                <div className="text-center">
                  <Link
                    style={{ fontSize: textSize }}
                    className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn"
                    href="/darsliklar"
                  >
                    {t("Barcha darsliklarni ko'rish")}
                    <i className="fi-rr-arrow-small-right" />
                  </Link>
                </div>

                <div className="row mt-70">
                  <div className="col-lg-12 mb-30">
                    <h3 className="color-linear d-inline-block mb-10">
                      {t("Video qo'llanmalar")}
                    </h3>
                    <p
                      className="text-lg color-gray-500"
                      style={{ fontSize: textSize }}
                    >
                      {t(
                        "Eng so'ngi video qo'llanmalar yordamida Karate sportini mustaqil o'rganing"
                      )}
                    </p>
                  </div>
                  <div className="col-12">
                    <div className="box-list-posts">
                      <div className="row">
                        {loading2
                          ? Array(3)
                              .fill(0)
                              .map((_, index) => <Card_skeleton />)
                          : video.slice(0, 3).map((item, i) => (
                              <div className="col-lg-4" key={i}>
                                <div
                                  className="card-blog-1 border-gray-800 bg-gray-850 hover-up"
                                  style={{
                                    overflow: "hidden",
                                    paddingBottom: "10px",
                                  }}
                                >
                                  <div className="card-image mb-10">
                                    <Link href={`/videolar/${item?.id}`}>
                                      <img
                                        src={`${item.image}`}
                                        alt={item?.title}
                                      />
                                    </Link>
                                  </div>
                                  <div className="card-info">
                                    <Link href={`/videolar/1`}>
                                      <h5
                                        className="color-white mt-10"
                                        style={{ fontSize: textSize }}
                                      >
                                        {item.title}
                                      </h5>
                                    </Link>
                                    <div className="row align-items-center mt-10">
                                      <p
                                        style={{
                                          lineHeight: "20px",
                                        }}
                                      >
                                        {item?.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        <div className="text-center">
                          <Link
                            style={{ fontSize: textSize }}
                            className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn"
                            href="/videolar"
                          >
                            {t("Barcha Videolarni ko'rish")}
                            <i className="fi-rr-arrow-small-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
