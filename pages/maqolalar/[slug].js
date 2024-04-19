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
                                <div className="row mt-50 align-items-end">
                                    <div className="col-lg-8 m-auto text-center">
                                        <h3 className="color-linear">Digital Design That Will Help You Start Your Business</h3>
                                    </div>
                                </div>
                                <div className="row mt-30">
                                    <div className="col-lg-10 mx-auto">
                                        <div className="image-detail mb-30">
                                            <img className="bdrd16" src="/assets/imgs/page/single/img6.jpg" alt="Genz" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 m-auto">
                                        <div className="content-detail border-gray-800">
                                            <p className="text-xl color-gray-500">The fancy moon going in little artist painting. Thirty days of lavender in the dreamy light inside. Other perfect oh plants, for and again. I’ve honey feeling. Caring dreamland projects noteworthy than minimal, their it oh pretty feeling may. Include pink be.</p>
                                            {/* <div className="mt-30 mb-20"><img className="img-bdrd-16" src="/assets/imgs/page/single/img.jpg" alt="Genz" /></div> */}
                                            <p className="text-lg color-gray-500 mb-50">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id conse ctetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellu s ut sit.</p>
                                            <h3 className="color-white mb-30">Use your headings</h3>
                                            <p className="text-lg color-gray-500">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                            <h4 className="color-white mt-40 mb-30">Smaller heading</h4>
                                            <div className="">
                                                <div className="">
                                                    <p className="text-lg color-gray-500 mb-40">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although.</p>
                                                    <p className="text-lg color-gray-500">White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                                </div>
                                            </div>
                                            <p className="text-lg color-gray-500">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut sit.</p>
                                            <p className="text-center text-lg color-gray-500">furniture in your house</p>
                                            <h3 className="color-white mt-50 mb-30">Use your headings</h3>
                                            <p className="text-lg color-gray-500">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
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