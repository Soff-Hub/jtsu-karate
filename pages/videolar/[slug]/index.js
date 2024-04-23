import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import { useEffect, useState } from "react";
import client from "../../../repositories/repository";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Card_skeleton from "../../../components//placeholder/card_skeleton";

export default function Home() {
  const [video, setVideo] = useState([]);
  const { langauge } = useSelector((state) => state?.textClass);
  const [loading, setLoading] = useState(false);

  const { query } = useRouter();
  const { t } = useTranslation();

  async function getVideos() {
    try {
      setLoading(true);
      const resp = await client.get(`common/video-tutorials/${query?.slug}`, {
        headers: {
          "Accept-language": langauge,
        },
      });
      setVideo(resp.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (query?.slug) {
      getVideos();
    }
  }, [query?.slug, langauge]);

  return (
    <>
      <Head>
        <title>JTSU | {video?.title}</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                <div className="row mt-50 align-items-end">
                  <div className="col-lg-12 col-md-12">
                    <h3 className="color-linear">{video?.title}</h3>
                    <p className="mt-5 mb-10" style={{textAlign:"justify"}}>{video?.description}</p>
                  </div>
                </div>

                <div className="row mt-10">
                  {loading
                    ? Array(30)
                        .fill(0)
                        .map((_, index) => <Card_skeleton />)
                    : video?.contents
                    ? video?.contents.map((item, i) => (
                        <div className="col-lg-4" key={i}>
                          <div
                            className="card-blog-1 border-gray-800 bg-gray-850 hover-up"
                            style={{ position: "relative" }}
                          >
                            <div className="card-image mb-10">
                             
                              <iframe
                                width={"100%"}
                                height="100%"
                                src={`${item?.video_url
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
                            </div>
                            <div className="card-info">
                              <Link
                                href={`/videolar/${query?.slug}/preview/${item?.id}`}
                              >
                                <h6 className="color-white mt-10 text-truncate">
                                  {item.title}
                                </h6>
                              </Link>
                              <div className="row align-items-center mt-10">
                                <p
                                  style={{ height: "56px", overflow: "hidden" }}
                                >
                                  {item?.description}
                                </p>
                                <p
                                  className="text-truncate d-flex align-items-center justify-content-end"
                                  style={{
                                    position: "absolute",
                                    bottom: "5px",
                                    right: 0,
                                  }}
                                >
                                  <img src="/assets/imgs/page/homepage/view-icon.svg" />
                                  <span>
                                    {item.get_view_count} 
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
