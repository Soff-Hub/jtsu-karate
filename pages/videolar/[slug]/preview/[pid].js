import Link from "next/link";
import Head from "next/head";
import Layout from "../../../../components/layout/Layout";
import { useEffect, useState } from "react";
import client from "../../../../repositories/repository";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [video, setVideo] = useState(null);
  const { langauge } = useSelector((state) => state?.textClass);
  const { t } = useTranslation();

  const { query } = useRouter();

  async function getVideos() {
    try {
      const resp = await client.get(
        `common/video-tutorial-content/${query?.pid}/${localStorage.getItem(
          "user_id"
        )}/`,
        {
          headers: {
            "Accept-language": langauge,
          },
        }
      );
      setVideo(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (query?.pid && query?.pid !== "undefined") {
      getVideos();
    }
  }, [query?.pid, langauge]);

  return (
    <>
      <Head>
        <title>JTSU | {video?.title}</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="row mt-50 align-items-end">
                  <div className="col-lg-8 d-flex align-items-center justify-content-between">
                    <h3 className="color-linear">{video?.title}</h3>
                    <p
                      className="text-truncate d-flex align-items-center justify-content-center"
                    >
                      <img src="/assets/imgs/page/homepage/view-icon.svg" />
                      <span style={{color:"#333"}}>{2}</span>
                    </p>
                  </div>
                </div>
                <div className="row mt-10">
                  <div className="col-lg-8">
                    <div className="content-detail border-gray-800">
                      <div className="mt-20 mb-20">
                        {video && (
                          <iframe
                            width={"100%"}
                            height="400px"
                            src={`${video?.video_url
                              .replace(
                                "youtube.com/watch?v=",
                                "youtube.com/embed/"
                              )
                              .replace("youtu.be/", "youtube.com/embed/")}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        )}
                      </div>
                      <p
                        className="text-lg color-gray-500 mb-50"
                        style={{ textAlign: "justify", fontSize: "15px" }}
                      >
                        {video?.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-3">
                    <div className="sidebar">
                      <div className="box-sidebar bg-gray-850 border-gray-800">
                        <div className="head-sidebar wow animate__animated animate__fadeIn">
                          <h5 className="line-bottom">
                            {t("Ommabop videolar")}
                          </h5>
                        </div>
                        <div className="content-sidebar">
                          <div className="list-posts">
                            {video?.similar
                              ? video.similar.map((item) => (
                                  <div
                                    key={item?.id}
                                    className="item-post wow animate__animated animate__fadeIn"
                                  >
                                    <div className="image-post">
                                      <Link href={`/videolar/${item.id}`}>
                                        <img
                                          src={item.poster}
                                          alt="Genz"
                                          style={{ objectFit: "cover" }}
                                        />
                                      </Link>
                                    </div>
                                    <div className="info-post border-gray-800">
                                      <Link href={`/videolar/${item.id}`}>
                                        <h6 className="color-white">
                                          {item.title}
                                        </h6>
                                        <p
                                          className="pb-20 text-truncate"
                                          style={{ maxWidth: "200px" }}
                                        >
                                          {item.description}
                                        </p>
                                      </Link>
                                    </div>
                                  </div>
                                ))
                              : ""}
                          </div>
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
