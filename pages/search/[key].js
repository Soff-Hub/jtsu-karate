import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Head from 'next/head';
import { useRouter } from 'next/router';
import client from '../../repositories/repository';
import Layout from '../../components/layout/Layout';

export default function Home() {

    const [searchResult, setSearchResult] = useState(null)
    const { query } = useRouter()

    const globalSearch = async () => {
        const resp = await client.get(`common/global-search/?search=${query?.key}`)
        setSearchResult(resp.data);
    }

    useEffect(() => {
        globalSearch()
        if (!query?.key) {
            setSearchResult(null)
        } else {
            globalSearch('')
        }
    }, [query?.key])


    return (
        <>
            <Head>
                <title>
                    Qdiruv - {query?.key}
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className='col-8 mx-auto pt-40'>
                                <div className='search-result-list'>
                                    {
                                        searchResult && searchResult?.map((item, i) => (
                                            <div key={i} className='search-result-item'>
                                                <Link
                                                    className={`color-gray-500 d-flex justify-centen-start pb-2 gap-3`}
                                                    href={item.sign === 'text_book' ? `/darsliklar/${item.id}` : item.sign === 'text_book_content' ? `/darsliklar/${item.id}` : item.sign === "video_tutorial" ? `/videolar/${item.id}` : item.sign === "video_tutorial_content" ? `/videolar/1/preview/${item.id}` : item.sign === "document" ? `/maqolalar/` : 'https://st.jtsu.uz//elfinder-files/icons/pdf.png'}
                                                >
                                                    <>
                                                        <div style={{ maxWidth: '60px', display: 'flex', width: '100%', justifyContent: 'center' }}>
                                                            <img
                                                                style={{ width: '100%' }}
                                                                src={item.sign === 'text_book' || item.sign === 'video_tutorial' || item.sign === 'content' ? item.poster : item.sign === 'text_book_content' ? 'https://st.jtsu.uz//elfinder-files/icons/pdf.png' : item.sign === "video_tutorial_content" ? '/assets/imgs/page/homepage/video-icon.png' : 'https://st.jtsu.uz//elfinder-files/icons/pdf.png'}
                                                            />
                                                        </div>

                                                        {item.title}
                                                    </>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}