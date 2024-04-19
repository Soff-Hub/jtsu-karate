import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout/Layout";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Genz - Single post
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
                                        <h2 className="color-linear">Digital Design That Will Help You Start Your Business</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 m-auto">
                                        <div className="content-detail border-gray-800">
                                            <div className="mt-30 mb-20">
                                                <img className="img-bdrd-16" src="/assets/imgs/page/single/img.jpg" alt="Genz" />
                                            </div>

                                            <p className="text-lg color-gray-500 mb-50">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id conse ctetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellu s ut sit.</p>

                                            <h3 className="color-white mb-30">Use your headings</h3>

                                            <p className="text-lg color-gray-500">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>

                                            <h4 className="color-white mt-40 mb-30">Smaller heading</h4>

                                            <div className="row">
                                                <div className="col-lg-12 mb-30">
                                                    <p className="text-lg color-gray-500 mb-40">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although.</p>
                                                    <p className="text-lg color-gray-500">White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                                </div>
                                            </div>

                                            <p className="text-lg color-gray-500">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut sit.</p>

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