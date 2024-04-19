import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout/Layout";
import data from "../../util/healthy";

export default function Home() {
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
                                            <h2 className="color-white mb-10 color-linear wow animate__animated animate__fadeIn">Qonuniy hujjatlar</h2>
                                        </div>
                                        <p className="color-gray-500 text-base mb-20 wow animate__animated animate__fadeIn">
                                            Sport sohasidagi eng so'ngi Qonuniy hujjatlar bilan tanishing
                                        </p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom border-gray-800" />
                                    </div>
                                </div>
                                <div className="box-list-posts mt-20">
                                    <div className="row">
                                        <div className="col-lg-8 m-auto">
                                            <div className="box-list-posts mt-30">
                                                {data.slice(0, 5).map((item, i) => (
                                                    <div key={i} className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up">
                                                            <div>
                                                                <img src="assets/imgs/page/healthy/author.png" alt="Genz" />
                                                            </div>
                                                        </div>
                                                        <div className="card-info"><Link href={`/maqolalar/1`}>
                                                            <h3 className="mb-10 color-white">{item.title}</h3></Link>
                                                            <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                            <div className="row mt-20">
                                                                <div className="col-7">12.12.2024</div>
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