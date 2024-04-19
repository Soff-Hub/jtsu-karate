import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import TrendingTopic from "../components/slider/TrendingTopic";
import { useTranslation } from "react-i18next";

export default function Home() {

    const { t } = useTranslation()

    return (
        <>
            <Head>
                <title>{t("JTSU - Asosiy sahifa")}</title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="banner banner-home2">
                                    <div className="text-center">
                                        <h6 className="color-gray-600">Welcome to our blog</h6>
                                        <h1 className="color-white">Being<span className="color-linear"> Unique</span>
                                            is better<br className="d-none d-lg-block" />than being
                                            <span className="color-linear">Erfect</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="row mt-60">
                                    <div className="col-lg-12 mb-20 text-center">
                                        <h3 className="color-linear d-inline-block mb-10">Eng so'ngi yangiliklar</h3>
                                        <p className="text-lg color-gray-500">Karate sohasidagi eng so'ngi yangiliklar bilan tanishing</p>
                                    </div>
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news3.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link></div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20">Are You Ready To Go Home After The Sunset View?</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news1.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link></div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">8 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20">Life is as free as eagles, or is it just loneliness?</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news2.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Photograph</Link></div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">12 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20">Beautiful aurora in the sky over the city, a spectacular sight</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news4.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Design</Link></div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">25 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20">Unique architectural designs but not lacking in solid structure</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn" href="#">
                                        Barcha yangililarni ko'rish
                                        <i className="fi-rr-arrow-small-right" />
                                    </Link>
                                </div>
                                <div className="text-center mt-70">
                                    <h3 className="color-linear mb-10">Sportchilarimiz</h3>
                                    <p className="text-lg color-gray-500">Jahon arenalarida faxrli yutuqlarni egallab, Yurtimiz bayrog'ini ko'tarayotkan sportchilarimiz</p>
                                </div>
                                <div className="mb-70 mt-30">
                                    <div className="box-topics box-topics-2 border-gray-800 bg-gray-850">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="box-swiper">
                                                    <TrendingTopic />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-70">
                                    <div className="col-lg-12 mb-30">
                                        <h3 className="color-linear d-inline-block mb-10">Video qo'llanmalar</h3>
                                        <p className="text-lg color-gray-500">Eng so'ngi video qo'llanmalar yordamida Karate sportini mustaqil o'rganing</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="box-list-posts">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news1.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">16 Unheard Ways To Achieve Greater Walker</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news2.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">Master The Art Of Nature With These 7 Tips</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author2.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news5.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">16 Unheard Ways To Achieve Greater Walker</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <Link className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn" href="/videolar">
                                                        Barcha Videolarni ko'rish
                                                        <i className="fi-rr-arrow-small-right" />
                                                    </Link>
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
    )
}