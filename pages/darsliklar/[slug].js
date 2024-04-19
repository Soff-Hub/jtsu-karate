import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import client from "../../repositories/repository";
import { useRouter } from "next/router";

export default function Home() {

    const [video, setVideo] = useState(null)

    const { query } = useRouter()

    async function getVideos() {
        try {
            const resp = await client.get(`common/text-books/${query?.slug}`)
            setVideo(resp.data);
        } catch (err) {
            console.log(err);
        }
    }

    function clickFile(file) {
        window.location.href = file
    }

    useEffect(() => {
        if (query?.slug) {
            getVideos()
        }
    }, [query?.slug])


    return (
        <>
            <Head>
                <title>
                    JTSU | {video?.title}
                </title>
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
                                                <img className="img-bdrd-12" src={video?.image} alt="Genz" />
                                            </div>

                                            <p className="text-lg color-gray-500 mb-50">
                                                {video?.description}
                                            </p>

                                            <div className="lesson-files d-flex" style={{ flexDirection: 'column', gap: '20px' }}>
                                                {
                                                    video?.contents ? (
                                                        video.contents.map(item => (
                                                            <div key={item.id} className="wow animate__animated animate__fadeIn d-flex align-items-center gap-4" style={{ border: '1px solid', borderRadius: '15px', padding: '10px', cursor: 'pointer' }} onClick={() => clickFile(item?.file)}>
                                                                <div style={{ width: '45px', height: '45px' }}>
                                                                    <img
                                                                        src={'https://st.jtsu.uz//elfinder-files/icons/pdf.png'}
                                                                        alt={video?.title}
                                                                    />
                                                                </div>
                                                                <div className="info-post border-gray-800">
                                                                    <h6 className="color-white">
                                                                        {item.title}
                                                                    </h6>
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

            </Layout>
        </>
    )
}