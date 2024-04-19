import Link from "next/link";
import Head from "next/head";
import Layout from "../../../../components/layout/Layout";
import { useEffect, useState } from "react";
import client from "../../../../repositories/repository";
import { useRouter } from "next/router";

export default function Home() {

  const [video, setVideo] = useState(null)

  const { query } = useRouter()

  async function getVideos() {
    try {
      const resp = await client.get(`common/video-tutorial-content/${query?.pid}`)
      setVideo(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (query?.pid && query?.pid !== 'undefined') {
      getVideos()
    }
  }, [query?.pid])


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
                  <div className="col-lg-9 col-md-8">
                    <h3 className="color-linear">
                      {video?.title}
                    </h3>
                  </div>
                </div>
                <div className="row mt-10">
                  <div className="col-lg-8">
                    <div className="content-detail border-gray-800">
                      <div className="mt-20 mb-20">
                        {video && <iframe width={'100%'} height="400px" src={`${video?.video_url.replace('youtube.com/watch?v=', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/')}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                      </div>
                      <p className="text-lg color-gray-500 mb-50">
                        {video?.description}
                      </p>
                      {/* <h3 className="color-white mb-30">Use your headings</h3>
                      <p className="text-lg color-gray-500">
                        Thirty there &amp; time wear across days, make inside on
                        these you. Can young a really, roses blog small of song
                        their dreamy life pretty? Because really duo living to
                        noteworthy bloom bell. Transform clean daydreaming cute
                        twenty process rooms cool. White white dreamy
                        dramatically place everything although. Place out
                        apartment afternoon whimsical kinder, little romantic
                        joy we flowers handmade. Thirty she a studio of she
                        whimsical projects, afternoon effect going an floated
                        maybe.
                      </p>

                      <p className="text-lg color-gray-500">
                        Tortor placerat bibendum consequat sapien, facilisi
                        facilisi pellentesque morbi. Id consectetur ut vitae a
                        massa a. Lacus ut bibendum sollicitudin fusce sociis mi.
                        Dictum volutpat praesent ornare accumsan elit venenatis.
                        Congue sodales nunc quis ultricies odio porta. Egestas
                        mauris placerat leo phasellus ut sit.
                      </p> */}

                    </div>

                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar">
                      <div className="box-sidebar bg-gray-850 border-gray-800">
                        <div className="head-sidebar wow animate__animated animate__fadeIn">
                          <h5 className="line-bottom">Ommabop videolar</h5>
                        </div>
                        <div className="content-sidebar">
                          <div className="list-posts">
                            {
                              video?.similar ? (
                                video.similar.map(item => (
                                  <div key={item?.id} className="item-post wow animate__animated animate__fadeIn">
                                    <div className="image-post">
                                      <Link href={`/videolar/${item.id}`}>
                                        <img
                                          src={item.image}
                                          alt="Genz"
                                        />
                                      </Link>
                                    </div>
                                    <div className="info-post border-gray-800">
                                      <Link href={`/videolar/${item.id}`}>
                                        <h6 className="color-white">
                                          {item.title}
                                        </h6>
                                        <p className="pb-20 text-truncate" style={{ maxWidth: '200px' }}>
                                          {item.description}
                                        </p>
                                      </Link>
                                    </div>
                                  </div>
                                ))
                              ) : ''
                            }
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
      </Layout >
    </>
  );
}
