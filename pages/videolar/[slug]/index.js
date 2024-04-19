import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import { useEffect, useState } from "react";
import client from "../../../repositories/repository";
import { useRouter } from "next/router";

export default function Home() {

    const [video, setVideo] = useState([])

    const { query } = useRouter()

    async function getVideos() {
        try {
            const resp = await client.get(`common/video-tutorials/${query?.slug}`)
            setVideo(resp.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (query?.slug) {
            getVideos()
        }
    }, [query?.slug])


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
                                    {video?.contents ? video?.contents.map((item, i) => (
                                        <div className="col-lg-4" key={i}>
                                            <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                <div className="card-image mb-10">
                                                    <iframe width={'100%'}
                                                        height="100%"
                                                        src={`${item?.video_url.replace('youtube.com/watch?v=', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/')}`}
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                                <div className="card-info">
                                                    <Link href={`/videolar/${query?.slug}/preview/${item?.id}`}>
                                                        <h5 className="color-white mt-10">{item.title}</h5>
                                                    </Link>
                                                    <div className="row align-items-center mt-10">
                                                        <p className="">
                                                            {item?.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
