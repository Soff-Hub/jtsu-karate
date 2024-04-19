import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout/Layout";
import data from "../../util/healthy";
import { useEffect, useState } from "react";
import client from "../../repositories/repository";

export default function Home() {

    const [videos, setVideos] = useState([])

    async function getVideos() {
        try {
            const resp = await client.get('common/text-books/')
            setVideos(resp.data);
        } catch (err) {
            console.log(err);
        }
    }

    console.log(videos);

    useEffect(() => {
        getVideos()
    }, [])


    return (
        <>
            <Head>
                <title>Genx - Blog archive 3</title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="row align-items-end mt-20">
                                    <div className="col-lg-12 text-center">
                                        <div className="d-inline-block position-relative">
                                            <h2 className="color-white mb-10 color-linear wow animate__animated animate__fadeIn">Kitob va darsliklar</h2>
                                        </div>
                                        <p className="color-gray-500 text-base mb-20 wow animate__animated animate__fadeIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed turpis<br className="d-none d-lg-block" />vulputate viverra. Morbi ligula elit, hendrerit non nisl tincidunt, sodales consequat magna.</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom border-gray-800" />
                                    </div>
                                </div>
                                <div className="box-list-posts mt-10">
                                    <div className="row">
                                        <div className="col-lg-8 m-auto">
                                            <div className="box-list-posts mt-30">
                                                {videos.map((item, i) => (
                                                    <div key={i} className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up">
                                                            <div>
                                                                <img src={item?.image} alt="Genz" />
                                                            </div>
                                                        </div>
                                                        <div className="card-info"><Link href={`/darsliklar/1`}>
                                                            <h3 className="mb-10 color-white">{item.title}</h3></Link>
                                                            <p className="color-gray-500">
                                                                {item?.description}
                                                            </p>
                                                            <div className="row mt-20">
                                                                <div className="col-7">{item.created_at}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
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