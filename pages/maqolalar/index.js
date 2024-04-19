import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout/Layout";
import data from "../../util/healthy";
import { useEffect, useState } from "react";
import client from "../../repositories/repository";

export default function Home() {
    const [documents, setDocuments] = useState([])

    async function getDocuments() {
        try {
            const resp = await client.get(`common/documents/`)
            setDocuments(resp.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDownload = async (file, id) => {

        await client.get(`common/download-count/${id}/document/`)
        await getDocuments()

        var link = document.createElement('a');
        link.href = file;

        link.setAttribute('download', file);

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    }

    useEffect(() => {
        getDocuments()
    }, [])


    return (
        <>
            <Head>
                <title>JTSU | Qonuniy hujjatlar bilan tanishing</title>
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
                                    <div className="row box-list-posts mt-30">
                                        {documents.map((item, i) => (
                                            <div key={i} className="col-6 card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 d-flex gap-2 wow animate__animated animate__fadeIn" style={{ cursor: 'pointer', position: 'relative' }} onClick={() => handleDownload(item.file, item.id)}>
                                                <div className="card-image hover-up">
                                                    <div>
                                                        <img src="/assets/imgs/page/homepage/document-icon.svg" alt="Genz" />
                                                    </div>
                                                </div>
                                                <div className="card-info">
                                                    <h5 className="mb-10 color-white">
                                                        {item.title}
                                                        <p className="text-truncate d-flex align-items-center justify-content-end gap-1" style={{ position: 'absolute', top: 0, right: 20, fontSize: '12px' }}>
                                                            <img src="/assets/imgs/page/homepage/download-icon.svg" />
                                                            <span>{item.download_count}</span>
                                                        </p>
                                                    </h5>

                                                    {/* <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                    <div className="row mt-20">
                                                        <div className="col-7">12.12.2024</div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
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