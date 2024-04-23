import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import client from "../../repositories/repository";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Home() {
  const [video, setVideo] = useState(null);
  const { textSize, langauge } = useSelector((state) => state?.textClass);

  const { query } = useRouter();

  async function getVideos() {
    try {
      const resp = await client.get(`common/text-books/${query?.slug}`, {
        headers: {
          "Accept-language": langauge,
        },
      });
      setVideo(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleDownload = async (file, id) => {
    await client.get(`common/download-count/${id}/textbook/`, {
      headers: {
        "Accept-language": langauge,
      },
    });
    await getVideos();

    var link = document.createElement("a");
    link.href = file;

    link.setAttribute("download", file);

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

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
                <div className="row mt-20 align-items-end">
                  <div className="col-lg-8 m-auto text-center">
                    <h2 className="color-linear">{video?.title}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 m-auto">
                    <div className="content-detail border-gray-800">
                      <div className="mt-30 mb-20">
                        <img
                          className="img-bdrd-12"
                          src={video?.image}
                          alt="Genz"
                        />
                      </div>

                      <p
                        style={{ fontSize: textSize, lineHeight: "26px",textAlign:"justify" }}
                        className="color-gray-500 mb-50"
                      >
                        {video?.description}
                      </p>

                      <div
                        className="lesson-files d-flex"
                        style={{ flexDirection: "column", gap: "20px" }}
                      >
                        {video?.contents
                          ? video.contents.map((item) => (
                              <div
                                key={item.id}
                                className="wow animate__animated animate__fadeIn d-flex align-items-center gap-4"
                                style={{
                                  border: "1px solid",
                                  borderRadius: "15px",
                                  padding: "5px 10px",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handleDownload(item.file, item.id)
                                }
                              >
                                <div style={{ width: "55px", height: "55px" }}>
                                  <img
                                    src={
                                      "/assets/imgs/page/homepage/document-icon.svg"
                                    }
                                    alt={video?.title}
                                  />
                                </div>
                                <div className="info-post border-gray-800 d-flex justify-content-between w-100">
                                  <h6
                                    className="color-white"
                                    style={{
                                      fontSize: textSize,
                                      lineHeight: "26px",
                                    }}
                                  >
                                    {item.title}
                                  </h6>
                                  <p
                                    className="text-truncate d-flex align-items-center justify-content-end gap-1 m-0"
                                    style={{ fontSize: "18px" }}
                                  >
                                    <img src="/assets/imgs/page/homepage/download-icon.svg" />
                                    <span
                                      style={{
                                        fontSize: textSize,
                                        lineHeight: "26px",
                                      }}
                                    >
                                      {item.download_count}
                                    </span>
                                  </p>
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
      </Layout>
    </>
  );
}
