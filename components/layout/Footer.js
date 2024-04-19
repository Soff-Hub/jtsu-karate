import Link from 'next/link';
import React from 'react';
import useLead from "/hooks/UseLead";

const Footer = () => {
    const { nameRef, phoneRef, leadStatus, handleSubmit } = useLead()

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-1 bg-gray-850 border-gray-800">
                        <div className="row">
                            <div className="col-lg-4 mb-30">
                                <Link className="wow animate__animated animate__fadeInUp" href="/">
                                <img className="logo-night" alt="GenZ" src="/assets/imgs/page/logo/Soff Study white logo.png" />
                                <img className="d-none logo-day" alt="GenZ" src="/assets/imgs/page/logo/Soff Study dark logo.png" />
                                </Link>
                                <p className="mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp">Maqsad, aniq! O'quvchilarning natijasiga qaratilgan. O'z ustida ishlab sabr qila oladiganlargina "Soff Study" bilan birgalikda o'z maqsadiga erishadi. Bunga biz ishonamiz va tajribamizdan ham o'tkazdik!|</p>
                                <h6 className="color-white mb-5 wow animate__animated animate__fadeInUp">Manzil</h6>
                                <p className="text-sm color-gray-500 wow animate__animated animate__fadeInUp">8/1 Bunyodkor Avenue, <br/> Tashkent 100115</p>
                            </div>
                            <div className="col-lg-4 mb-30">
                                {/* <h6 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Categories</h6> */}
                                {/* <div className="row">
                                    <div className="col-6">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Action</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Business</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Adventure</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Canada</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">America</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Curiosity</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Animal</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Dental</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Biology</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Design</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Breakfast</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Dessert</Link></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-lg-4 mb-30">
                                <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Ma'lumot olish</h4>
                                    <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                                    {
                                        leadStatus ? (
                                            <>
                                                <h4 className="text-center text-success mt-20 wow animate__animated animate__fadeInUp">
                                                    <i className="fi fi-rr-paper-plane"> </i>
                                                    So'rovingiz qabul qilindi, biz siz bilan tez orada bog'lanamiz.
                                                </h4>
                                                <p className="text-center color-gray-50 mt-20 wow animate__animated animate__fadeInUp">
                                                    Biz 9:00 dan 21:00 gacha ishlaymiz (dam olish kunlaridan tashqari)
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-base color-gray-500 wow animate__animated animate__fadeInUp">* Arizani yuborishdan oldin, to'g'ri ma'lumot kiritganingizga ishonch hosil qiling</p>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group">
                                                        <input required ref={nameRef} className="input-name border-gray-500" type="text" placeholder="Ismingiz" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input  maxLength="9" required ref={phoneRef} className="input-email border-gray-500" type="text" placeholder="Telefon nomeringiz" />
                                                    </div>
                                                    <div className="form-group mt-20">
                                                        <button className="btn btn-linear hover-up" type="submit">
                                                            Yuborish
                                                            <i className="fi-rr-arrow-small-right" />
                                                        </button>
                                                    </div>
                                                </form>
                                        </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <div className="footer-bottom border-gray-800">
                            <div className="row">
                                <div className="col-lg-5 text-center text-lg-start">
                                    <p className="text-base color-white wow animate__animated animate__fadeIn">© Created by<Link className="copyright" href="http://alithemes.com" target="_blank"> AliThemes.com</Link></p>
                                </div>
                                <div className="col-lg-7 text-center text-lg-end">
                                    <div className="box-socials">
                                        <div className="d-inline-block mr-30 wow animate__animated animate__fadeIn" data-wow-delay=".0s"><Link className="icon-socials icon-twitter color-gray-500" href="https://twitter.com">Twitter</Link></div>
                                        <div className="d-inline-block mr-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="icon-socials icon-linked color-gray-500" href="https://www.linkedin.com">LinkedIn</Link></div>
                                        <div className="d-inline-block wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <Link className="icon-socials icon-insta color-gray-500" href="https://www.instagram.com">Instagram</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;